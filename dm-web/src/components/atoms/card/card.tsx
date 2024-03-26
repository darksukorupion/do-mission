import { ReactNode } from "react";

type Children = {
  children: ReactNode;
};

export const Card = (props: Children) => {
  const { children } = props;
  return (
    <div className={`bg-white border-none rounded-2xl shadow-md mx-auto mt-3`}>
      {children}
    </div>
  );
};
