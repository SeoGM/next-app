import React, { PropsWithChildren } from 'react';

export default function Container(props: PropsWithChildren) {
  return (
    <div className={`max-w-5xl w-full mx-auto px-4`}>
      {props.children}
    </div>
  );
}