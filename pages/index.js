import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Atharva. I am the Dragon Reborn. No, just kidding, I'm a
          self-taught software engineer. Check out my{" "}
          <a
            href="https://github.com/SazedWorldbringer"
            target={"_blank"}
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          profile.
        </p>
        <p>
          I finally got to creating a blog following the official{" "}
          <a
            href="https://nextjs.org/learn/basics/create-nextjs-app"
            target="_blank"
            rel="noreferrer"
          >
            Next.js tutorial
          </a>
          . Read about my learning, stuff I read and maybe some recipes.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
