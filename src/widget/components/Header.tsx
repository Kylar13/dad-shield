import * as React from "react";
import { WelcomeBanner } from "../../assets/index";

interface Props {
  style: React.CSSProperties;
}

export const Header = (props: Props) => {
  return (
    <div style={{ ...props.style, justifyContent: "center" }}>
      <img src={WelcomeBanner} alt="Welcome banner" />
    </div>
  );
};
