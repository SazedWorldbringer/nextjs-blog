import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Atharva. I'm a self-taught software engineer. Check out my{" "}
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
          <a href="https://nextjs.org/learn">Next.js tutorial</a>. Read about my
          learning, stuff I read and maybe some recipes.
        </p>
      </section>
    </Layout>
  );
}
