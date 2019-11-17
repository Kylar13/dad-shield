import * as React from "react";

import { Header } from "./Header";
import { DailyChallengeHeader } from "../../assets/index";

interface Props {
  style?: React.CSSProperties;
  onEndPress: () => void;
  question: string;
  options: string[];
}

export const DailyChallenge = (props: Props) => {
  const [hasClicked, setHasClicked] = React.useState(false);
  const [selectedQuestions, setSelectedQuestions] = React.useState([false, false]);

  const { question, options = ["🎉 Yes", "😭 No"] } = props;

  return (
    <div style={{ ...props.style, flexDirection: "column", paddingLeft: 56, paddingRight: 56 }}>
      <Header style={{ display: "flex", paddingTop: 60, paddignBottom: 20 }} img={DailyChallengeHeader} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 72,
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
              setHasClicked(true);
              setSelectedQuestions([false, true]);
            }}
          >
            {options[1]}
          </button>
        </div>
      </div>
    </div>
  );
};
