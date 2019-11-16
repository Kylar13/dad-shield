import * as React from "react";

interface Props {
  style?: React.CSSProperties;
  img: string;
}

export const Header = (props: Props) => {
  return (
    <div style={{ ...props.style, justifyContent: "center" }}>
      <img src={props.img} alt="Welcome banner" />
    </div>
  );
};
