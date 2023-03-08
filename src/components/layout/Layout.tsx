import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>서광명 | 5년차 프론트엔드 개발자 포트폴리오</title>
        <meta
          name="description"
          content="5년차 프론트엔드 개발자 서광명의 포트폴리오입니다."
        />
        <meta
          name="keywords"
          content="프론트엔드, 개발자, 웹퍼블리셔, 웹사이트 만들기"
        />
        <meta name="author" content="서광명" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
