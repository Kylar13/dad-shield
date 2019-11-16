import * as React from "react";
import * as ReactDOM from "react-dom";

import { Carousel } from "./components/Carousel";
import { WelcomeBanner, CharacterWaving } from "../assets/index";

const styles: { [key: string]: React.CSSProperties } = {
  content: {
    display: "flex",
    flex: 1,
    minHeight: 550,
    minWidth: 432,
    flexDirection: "column",
    backgroundColor: "#D83178",
    borderRadius: 5,
  },
};

const test = [
  {
    text:
      "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    img: WelcomeBanner,
  },
  {
    text:
      "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    img: CharacterWaving,
  },
  {
    text:
      "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    img: WelcomeBanner,
  },
];

const Widget = () => {
  const [state, setState] = React.useState("WELCOME");
  const [metadata, setMetadata] = React.useState({} as { [key: string]: any });

  React.useEffect(() => {
    try {
      console.log("Use effect hook");
      chrome.storage.sync.get(["widgetData"], function(result) {
        console.log("Value currently is " + result.widgetData);
        const { state = "WELCOME", metadata = {} } = result.widgetData;
        setState(state);
        setState(metadata);
      });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div style={styles.content}>
      {state === "WELCOME" ? (
        <Carousel
          style={{ display: "flex", flex: 1 }}
          items={test}
          onEndPress={() => {
            window.close();
          }}
        />
      ) : null}
      {state === "PASSWORD" ? (
        <div style={{ display: "flex", flex: 1 }}>
          <p>{metadata.pwdHint}</p>
        </div>
      ) : null}
    </div>
  );
};

ReactDOM.render(<Widget />, document.getElementById("root"));
