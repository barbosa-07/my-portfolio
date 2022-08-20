import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>contact me</title>
        </Head>
        <div>
          Contact
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </div>
      </Layout>
    </>
  );
}
