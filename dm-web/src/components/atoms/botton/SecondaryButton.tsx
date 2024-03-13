import React from "react";

type Button = {
  children: React.ReactNode;
};

export const SecondaryButton = (props: Button) => {
  const { children } = props;
  return <button className={`secondary-button`}>{children}</button>;
};
