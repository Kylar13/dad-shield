import * as React from "react";

import { Header } from "./Header";
import { QuizHeader } from "../../assets/index";

interface Props {
  style?: React.CSSProperties;
  onEndPress: () => void;
  responses: string[];
}

export const QuizResponses = (props: Props) => {
  const [isPressed, setIsPressed] = React.useState(false);
  const { responses = [] } = props;

  return (
    <div style={{ ...props.style, flexDirection: "column", paddingLeft: 56, paddingRight: 56 }}>
      <Header style={{ display: "flex", paddingTop: 60, paddignBottom: 20 }} img={QuizHeader} />
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
