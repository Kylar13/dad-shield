import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const styles: { [key: string]: React.CSSProperties } = {
  content: {
    minHeight: 550,
    minWidth: 432,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#D83178",
  },
};

class Widget extends React.Component {
  render() {
    return (
      <div style={styles.content}>
        <Header style={{ display: "flex", paddingTop: 60, paddignBottom: 20 }} />
        <div style={{ display: "flex", flex: 1, backgroundColor: "blue", flexDirection: "row" }}>
          <Carousel showThumbs={false}>
            <div>
              <p className="legend">Legend Carlos</p>
            </div>
            <div>
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Widget />, document.getElementById("root"));
