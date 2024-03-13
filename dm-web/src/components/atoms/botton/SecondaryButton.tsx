import Link from "next/link";
import React from "react";

type Button = {
  children: React.ReactNode;
  url: string;
};

export const PrimaryButton = (props: Button) => {
  const { children, url } = props;
  return <button className={`secondary-button`}>{children}</button>;
};
