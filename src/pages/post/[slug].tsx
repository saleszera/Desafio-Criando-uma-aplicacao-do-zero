import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';

import Header from '../../components/Header';
import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): JSX.Element {
  const router = useRouter();
  const { url: bannerUrl } = post.data.banner;

  const timeToRead = post.data.content.reduce((acc, content) => {
    const contentToText = RichText.asText(content.body);
    const count = contentToText.split(/\s+/);

    const calc = Math.ceil(count.length / 200);

    return acc + calc;
  }, 0);

  if (router.isFallback) {
    return (
      <div className={styles.loading}>
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Post | spacetraveling</title>
      </Head>

      <Header />

      <div className={styles.banner}>
        <img src={bannerUrl} alt={post.data.title} />
      </div>

      <main className={commonStyles.container}>
        <article className={styles.post}>
          <h1>{post.data.title}</h1>

          <div className={styles.info}>
            <div>
              <FiCalendar color="#BBBBBB" />
              <span>
                {format(new Date(post.first_publication_date), 'dd MMM yyyy', {
                  locale: ptBR,
                })}
              </span>
            </div>

            <div>
              <FiUser color="#BBBBBB" />
              <span>{post.data.author}</span>
            </div>

            <div>
              <FiClock color="#BBBBBB" />
              <span>{timeToRead} min</span>
            </div>
          </div>
          <div className={styles.postContent}>
            {post.data.content.map(content => (
              <div key={content.heading}>
                <h2>{content.heading}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: RichText.asHtml(content.body),
                  }}
                />
              </div>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query(
    [Prismic.predicates.at('document.type', process.env.PRISMIC_DOCUMENT_TYPE)],
    {
      pageSize: 1,
    }
  );

  const postUids = posts.results.map(post => {
    return {
      params: {
        slug: String(post.uid),
      },
    };
  });

  return {
    paths: postUids,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID(
    process.env.PRISMIC_DOCUMENT_TYPE,
    String(slug),
    {}
  );

  const post = {
    uid: response.uid,
    first_publication_date: response.first_publication_date,
    data: {
      ...response.data,
      content: response.data.content.map(item => {
        return {
          heading: item.heading,
          body: item.body,
        };
      }),
    },
  };

  return {
    props: {
      post,
    },
    redirect: 60 * 30,
  };
};
