import { ReactNode } from "react";

type Children = {
  children: ReactNode;
};

export const Card = (props: Children) => {
  const { children } = props;
  return (
    <div className={`bg-white border-none rounded-2xl shadow-lg mx-auto mt-2`}>
      {children}
    </div>
  );
};
