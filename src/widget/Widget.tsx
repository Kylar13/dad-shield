import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/Header";

const styles: { [key: string]: React.CSSProperties } = {
  content: {
    minHeight: 550,
    minWidth: 432,
    display: "flex",
    backgroundColor: "#D83178",
  },
};

class Widget extends React.Component {
  render() {
    return (
      <div style={styles.content}>
        <Header />
      </div>
    );
  }
}

ReactDOM.render(<Widget />, document.getElementById("root"));
