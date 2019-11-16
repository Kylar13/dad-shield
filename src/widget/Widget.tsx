import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/Header";
import { Carousel } from "./components/Carousel";

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

const test = [
  "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
];

class Widget extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div style={styles.content}>
        <Header style={{ display: "flex", paddingTop: 60, paddignBottom: 20 }} />
        <Carousel
          style={{ display: "flex", flex: 1 }}
          items={test}
          onEndPress={() => window.alert("Done with carousel")}
        />
      </div>
    );
  }
}

ReactDOM.render(<Widget />, document.getElementById("root"));
