import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/Header";

const styles: { [key: string]: React.CSSProperties } = {
  content: {
    minHeight: 550,
    minWidth: 432,
    padding: 10,
  },
};

class Widget extends React.Component {
  render() {
    return (
      <div style={styles.content}>
        <Header title={"NetMate"} />
      </div>
    );
  }
}

ReactDOM.render(<Widget />, document.getElementById("root"));
