import * as React from "react";
import * as ReactDOM from "react-dom";

import { WelcomeCarousel } from "./components/WelcomeCarousel";
import { WelcomeBanner, CharacterWaving } from "../assets/index";

enum WidgetStates {
  WELCOME = "WELCOME",
  NEW_PASSWORD = "NEW_PASSWORD",
  MENU = "MENU",
  DAILY_CHALLENGE = "DAILY_CHALLENGE",
  QUIZ_RESULT = "QUIZ_RESULT",
}

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
    console.log("Use effect hook");
    chrome.storage.sync.get(["widgetData"], function(result) {
      if (result.widgetData) {
        const { state = "WELCOME", metadata = {} } = result.widgetData;
        setState(state);
        setMetadata(metadata);
      }
    });
  }, []);

  return (
    <div style={styles.content}>
      {state === "WELCOME" ? (
        <WelcomeCarousel
          style={{ display: "flex", flex: 1 }}
          items={test}
          onEndPress={() => {
            window.close();
          }}
        />
      ) : null}
      {state === "NEW_PASSWORD" ? (
        <div style={{ display: "flex", flex: 1 }}>
          <h1>{metadata.pwdHint}</h1>
        </div>
      ) : null}
    </div>
  );
};

ReactDOM.render(<Widget />, document.getElementById("root"));
