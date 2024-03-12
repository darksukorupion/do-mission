import React from "react";

type Button = {
  children: React.ReactNode;
};

export const PrimaryButton = (props: Button) => {
  const { children } = props;
  return <button className={``}>{children}</button>;
};
