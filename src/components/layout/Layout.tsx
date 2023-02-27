import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="pt-28">
        {props.children}
      </main>
      <Footer />
    </>
  );
}