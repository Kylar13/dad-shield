import * as React from "react";
import * as ReactDOM from "react-dom";

import { WelcomeCarousel } from "./components/WelcomeCarousel";
import { PasswordHint } from "./components/PasswordHint";
import { Menu } from "./components/Menu";
import { QuizResponses } from "./components/QuizResponses";
import { DailyChallenge } from "./components/DailyChallenge";
import { WelcomeBanner, CharacterWaving, Zombies, ZombiesBanner } from "../assets/index";

import { fetchFromDb } from "../utils/fetchDB";

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
      "This is Teddy, your NetMate. He will help you protect your things from the Zombies while using the Internet.",
    imgBanner: WelcomeBanner,
    img: CharacterWaving,
  },
  {
    text:
      "These are The Zombies, they will try to get advantage of you. They are all the strangers around the Internet.",
    imgBanner: ZombiesBanner,
    img: Zombies,
  },
];

const Widget = () => {
  const [state, setState] = React.useState(WidgetStates.WELCOME);

  React.useEffect(() => {
    chrome.storage.sync.get(["hasUsedExtension"], async (result) => {
      if (result.hasUsedExtension.hasUsedExtension) {
        const widgetData = await fetchFromDb("widgetData");
        if (!widgetData) {
          return;
        }
        const { state = WidgetStates.MENU } = widgetData;
        setState(state);
      } else {
        setState(WidgetStates.WELCOME);
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
            chrome.storage.sync.set({ hasUsedExtension: { hasUsedExtension: true } }, () => {
              setState(WidgetStates.DAILY_CHALLENGE);
            });
          }}
        />
      ) : null}
      {state === WidgetStates.NEW_PASSWORD ? (
        <PasswordHint
          style={{ display: "flex", flex: 1 }}
          onBackPressed={() => {
            setState(WidgetStates.MENU);
          }}
        />
      ) : null}
      {state === WidgetStates.MENU ? (
        <Menu
          style={{ display: "flex", flex: 1 }}
          onDailyChallengePressed={() => {
            chrome.storage.sync.set({ widgetData: { state: WidgetStates.DAILY_CHALLENGE } });
            setState(WidgetStates.DAILY_CHALLENGE);
          }}
          onPasswordHintPressed={() => {
            chrome.storage.sync.set({ widgetData: { state: WidgetStates.NEW_PASSWORD } });
            setState(WidgetStates.NEW_PASSWORD);
          }}
          onQuizResultsPressed={() => {
            chrome.storage.sync.set({ widgetData: { state: WidgetStates.QUIZ_RESULT } });
            setState(WidgetStates.QUIZ_RESULT);
          }}
        />
      ) : null}
      {state === WidgetStates.QUIZ_RESULT ? (
        <QuizResponses
          style={{ display: "flex", flex: 1 }}
          onBackPress={() => {
            chrome.storage.sync.set({ widgetData: { state: WidgetStates.MENU } });
            setState(WidgetStates.MENU);
          }}
          onEndPress={() => {
            chrome.storage.sync.set({ widgetData: { state: WidgetStates.MENU } });
            window.close();
          }}
        />
      ) : null}
      {state === WidgetStates.DAILY_CHALLENGE ? (
        <DailyChallenge
          style={{ display: "flex", flex: 1 }}
          onBackPress={() => {
            chrome.storage.sync.set({ widgetData: { state: WidgetStates.MENU } });
            setState(WidgetStates.MENU);
          }}
        />
      ) : null}
    </div>
  );
};

ReactDOM.render(<Widget />, document.getElementById("root"));
