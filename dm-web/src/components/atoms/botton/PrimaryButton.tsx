import React from "react";

type Button = {
  children: React.ReactNode;
};

export const PrimaryButton = (props: Button) => {
  const { children } = props;
  return <button className={`primary-button`}>{children}</button>;
};
