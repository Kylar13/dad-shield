import * as React from "react";

import { Header } from "./Header";

interface Props {
  style?: React.CSSProperties;
}

export const Menu = (props: Props) => {
  return (
    <div style={{ ...props.style, flexDirection: "column", paddingLeft: 56, paddingRight: 56 }}>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
};
