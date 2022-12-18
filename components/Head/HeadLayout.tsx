import React from "react";
import Head from "next/head";

interface HeadLayoutProps {
  page: string;
}

function HeadLayout({ page }: HeadLayoutProps) {
  return (
    <Head>
      <title>{`${page} | RandomFacts`}</title>
      <meta name="description" content="View and share random facts" />
      <meta
        name="keywords"
        content="random facts funfact trivia didyouknow fact"
      />
      <link rel="icon" href="/owl.webp" />
    </Head>
  );
}

export default HeadLayout;
