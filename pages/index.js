import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faTwitter,
  faLinkedin,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

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
          <strong>Frontend Engineer</strong> at{" "}
          <a href="https://verloop.io/">Verloop</a>
        </p>
        <p>
          <strong className={`${utilStyles.orange} ${utilStyles.bold600}`}>
            Prev
          </strong>{" "}
          | <strong>Software Development Engineer</strong> at{" "}
          <a href="https://embibe.com/">Embibe</a>
        </p>
        <p>
          A Generalist and Abstract Thinker using Growth Mindset and Emotional
          Intelligence for efficient collaborations within and across teams
        </p>
      </section>
      <setion>
        <ul
          className={`${utilStyles.list} ${utilStyles.displayFlex} ${utilStyles.flexGap40}`}
        >
          <li className={utilStyles.cursorPointer}>
            <a href={"https://github.com/barbosa-07"} target="_blank">
              <FontAwesomeIcon icon={faGithub} size="xl" color="#161b22" />
            </a>
          </li>
          <li className={utilStyles.cursorPointer}>
            <a href={"https://www.linkedin.com"} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="xl" color="#0a66c2" />
            </a>
          </li>
          <li className={utilStyles.cursorPointer}>
            <a href={"https://twitter.com/RizwanAkram07"} target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="xl" color="#1d9bf0" />
            </a>
          </li>

          <li className={utilStyles.cursorPointer}>
            <Link
              href={"https://www.youtube.com/channel/UCT4PBRI8nHa7-8zFKBJHygQ"}
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} size="xl" color="#ff0000" />
            </Link>
          </li>
        </ul>
      </setion>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
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
