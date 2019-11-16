import * as React from "react";

interface Props {
  title: string;
}

export const Header = (props: Props) => {
  const { title } = props;
  return <h1>{title}</h1>;
};
