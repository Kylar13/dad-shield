import * as React from "react";
import * as ReactDOM from "react-dom";

import { WelcomeCarousel } from "./components/WelcomeCarousel";
import { PasswordHint } from "./components/PasswordHint";
import { Menu } from "./components/Menu";
import { QuizResponses } from "./components/QuizResponses";
import { DailyChallenge } from "./components/DailyChallenge";
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
  const [state, setState] = React.useState(WidgetStates.WELCOME);
  const [metadata, setMetadata] = React.useState({} as { [key: string]: any });

  React.useEffect(() => {
    chrome.storage.sync.get(["widgetData"], function(result) {
      if (result.widgetData) {
        const { state = WidgetStates.WELCOME, metadata = {} } = result.widgetData;
        // setState(state);
        // setMetadata(metadata);
        setState(WidgetStates.DAILY_CHALLENGE);
        setMetadata({
          question: "This is a test question not intended for the public to see? more lines",
          options: ["Fuck", "Yikes"],
        });
      }
    });
  }, []);

  return (
    <div style={styles.content}>
      {state === WidgetStates.WELCOME ? (
        <WelcomeCarousel
          style={{ display: "flex", flex: 1 }}
          items={test}
          onEndPress={() => {
            window.close();
          }}
        />
      ) : null}
      {state === WidgetStates.NEW_PASSWORD ? (
        <PasswordHint style={{ display: "flex", flex: 1 }} passwordHint={metadata.pwdHint} />
      ) : null}
      {state === WidgetStates.MENU ? <Menu style={{ display: "flex", flex: 1 }} /> : null}
      {state === WidgetStates.QUIZ_RESULT ? (
        <QuizResponses
          style={{ display: "flex", flex: 1 }}
          onEndPress={() => {
            window.close();
          }}
          responses={metadata.responses}
        />
      ) : null}
      {state === WidgetStates.DAILY_CHALLENGE ? (
        <DailyChallenge
          style={{ display: "flex", flex: 1 }}
          onEndPress={() => {
            window.close();
          }}
          question={metadata.question}
          options={metadata.options}
        />
      ) : null}
    </div>
  );
};

ReactDOM.render(<Widget />, document.getElementById("root"));
