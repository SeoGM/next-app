import Head from "next/head";
import { PropsWithChildren } from "react";
import Header from "./Header";

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>BLINGLOG</title>
        <meta name="description" content="BLINGLOG" />
      </Head>
      <Header />
      <main className="pt-28">{props.children}</main>
    </>
  );
}
