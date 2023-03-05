import { metadata } from "@/data/metadata";
import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content="BLINGLOG" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
