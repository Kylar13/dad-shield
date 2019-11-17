import * as React from "react";

import { Header } from "./Header";
import { QuizHeader } from "../../assets/index";

interface Props {
  style?: React.CSSProperties;
  onEndPress: () => void;
  onBackPress: () => void;
}

export const QuizResponses = (props: Props) => {
  const [isPressed, setIsPressed] = React.useState(false);
  const [responses, setResponses] = React.useState([
    "Tell your parents if someone you don’t know ask you to do something.",
    "Do not share your strong password with anyone that is not from your family.",
  ]);

  React.useEffect(() => {
    chrome.storage.sync.get(["quizResponses"], async (result) => {
      if (!result.quizResponses.responses) {
        return;
      }
      setResponses(result.quizResponses.responses);
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
        img={QuizHeader}
      />
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: 52,
          marginLeft: 56,
          marginRight: 56,
        }}
      >
        {responses.map((response: string) => (
          <div
            style={{
              backgroundColor: "#D44A85",
              borderRadius: 9,
              marginTop: 8,
              marginBottom: 8,
              display: "flex",
              height: 104,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Rubik",
                fontSize: 20,
                color: "white",
                paddingLeft: 8,
                paddingRight: 8,
                textAlign: "center",
              }}
            >
              {response}
            </p>
          </div>
        ))}
      </div>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "blue",
          height: 48,
          marginBottom: isPressed ? 20 : 24,
          borderRadius: 5,
          fontFamily: "Rubik",
          fontSize: 16,
          color: "white",
          boxShadow: isPressed ? "0px 0px 0px #9E9E9E" : "0px 4px 0px #140374",
          border: "none",
          outline: "none",
          marginLeft: 56,
          marginRight: 56,
        }}
        onClick={() => {
          setIsPressed(true);
          setTimeout(() => {
            setIsPressed(false);
            props.onEndPress();
          }, 150);
        }}
      >
        👍🏻 Got it!
      </button>
    </div>
  );
};
