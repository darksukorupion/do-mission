import { ReactNode } from "react";
import { Header } from "../atoms/layout/Header";

type Children = {
  children: ReactNode;
};

export const Layout = (props: Children) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
