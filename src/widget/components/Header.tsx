import * as React from "react";
import { WelcomeBanner } from "../../assets/index";

interface Props {}

export const Header = (props: Props) => {
  return (
    <div style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <img src={WelcomeBanner} alt="Welcome banner" />
    </div>
  );
};
