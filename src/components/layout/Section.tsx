import React, { PropsWithChildren } from "react";

interface props {
  id: string;
}

export default function Section({ children, id }: PropsWithChildren<props>) {
  return (
    <section id={id} className="pt-24 pb-8">
      {children}
    </section>
  );
}
