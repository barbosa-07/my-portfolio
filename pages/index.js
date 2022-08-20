import Head from "next/head";
import Link from "next/link";
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
          <strong>Frontend Engineer</strong> at{" "}
          <a href="https://verloop.io/">Verloop</a>
        </p>
        <p>
          A Generalist and Abstract Thinker using Growth Mindset and Emotional
          Intelligence for efficient collaborations within and across teams
        </p>
      </section>
    </Layout>
  );
}
