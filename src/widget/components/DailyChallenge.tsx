import * as React from "react";

import { Header } from "./Header";
import { DailyChallengeHeader } from "../../assets/index";

interface Props {
  style?: React.CSSProperties;
  onBackPress: () => void;
}

export const DailyChallenge = (props: Props) => {
  const [hasClicked, setHasClicked] = React.useState(false);
  const [selectedQuestions, setSelectedQuestions] = React.useState([false, false]);
  const [question, setQuestion] = React.useState("Do you need to log out when you are done using a platform?");
  const [options, setOptions] = React.useState(["🎉 Yes", "😭 No"]);

  React.useEffect(() => {
    chrome.storage.sync.get(["dailyChallenge"], async (result) => {
      if (!result.question) {
        return;
      }
      setQuestion(result.question);
      setOptions(result.options);
    });
  }, []);

  return (
    <div style={{ ...props.style, flexDirection: "column" }}>
      <button
        style={{
          display: "flex",
          border: "none",
          outline: "none",
          marginLeft: 16,
          paddingTop: 16,
          fontSize: 16,
          fontFamily: "Rubik",
          backgroundColor: "transparent",
        }}
        onClick={props.onBackPress}
      >{`<  Back to Menu`}</button>
      <Header
        style={{ display: "flex", paddingTop: 60, paddignBottom: 20, marginLeft: 56, marginRight: 56 }}
        img={DailyChallengeHeader}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 72,
          marginLeft: 56,
          marginRight: 56,
        }}
      >
        <p style={{ fontFamily: "Rubik", fontSize: 24, color: "white" }}>{question}</p>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: 48,
          marginBottom: 52,
          marginLeft: 56,
          marginRight: 56,
        }}
      >
        <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: hasClicked ? (selectedQuestions[0] ? "#00B762" : "#6C0E0E") : "blue",
              height: hasClicked ? (selectedQuestions[0] ? 80 : 54) : 72,
              width: hasClicked ? (selectedQuestions[0] ? 168 : 114) : 152,
              borderRadius: 7,
              fontFamily: "Rubik",
              fontSize: hasClicked ? (selectedQuestions[0] ? 27 : 18) : 24,
              color: "white",
              border: "none",
              outline: "none",
            }}
            onClick={() => {
              if (hasClicked) {
                return;
              }
              setHasClicked(true);
              setSelectedQuestions([true, false]);
            }}
          >
            {options[0]}
          </button>
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: hasClicked ? (selectedQuestions[1] ? "#00B762" : "#6C0E0E") : "blue",
              height: hasClicked ? (selectedQuestions[1] ? 80 : 54) : 72,
              width: hasClicked ? (selectedQuestions[1] ? 168 : 114) : 152,
              borderRadius: 7,
              fontFamily: "Rubik",
              fontSize: hasClicked ? (selectedQuestions[1] ? 27 : 18) : 24,
              color: "white",
              border: "none",
              outline: "none",
            }}
            onClick={() => {
              if (hasClicked) {
                return;
              }
              setHasClicked(true);
              setSelectedQuestions([true, false]);
            }}
          >
            {options[1]}
          </button>
        </div>
      </div>
    </div>
  );
};
