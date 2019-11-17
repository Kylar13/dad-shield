import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import COLORS from "../../utils/colors";

const QuizQuestionContainer = styled.div`
  font-family: Rubik;
  display: flex;
  height: 64px;
  background-color: #D4206C;
  border-radius: 6px;
  flex: 1;
  align-items: center;
  margin: 4px 0px;
`;

const conditionalStyle = props => css`
  background-color: ${props.correct ? "green" : "red"}
`;

const QuizQuestionSelectedContainer = styled.div`
  font-family: Rubik;
  display: flex;
  height: 64px;
  background-color: #8C67CB;
  border-radius: 6px;
  flex: 1;
  align-items: center;
  margin: 4px 0px;
  ${conditionalStyle}
`;

const QuestionNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  color: white;
  margin-right: 12px;
`;

const QuestionText = styled.div`
  font-size: 24px;
  line-height: 28px;
  color: white;
`;

interface IModalProps {
  number: string,
  answer: string,
  isSelected: boolean,
  onSelect: Function,
  correct?: boolean,
}

export const QuizQuestion = (props: IModalProps) => {
  if (!props.isSelected) {
    return (
      <QuizQuestionContainer onClick={props.onSelect}>
        <div style={{ width: 60, alignItems: "center", display: "flex", background: "#660A31", paddingLeft: 28, height: 64, borderTopLeftRadius: "6px", borderBottomLeftRadius: "6px" }}>
          <QuestionNumber>{props.number}</QuestionNumber>
        </div>
        <div style={{ flex: 1, display: "flex", paddingLeft: 16 }} >
          <QuestionText>{props.answer}</QuestionText>
        </div>
      </QuizQuestionContainer>
    )
  } else {
    return (
      <QuizQuestionSelectedContainer onClick={props.onSelect} correct={props.correct}>
        <div style={{ width: 60, alignItems: "center", display: "flex", background: "#8048BE", paddingLeft: 28, height: 64, borderTopLeftRadius: "6px", borderBottomLeftRadius: "6px" }}>
          <QuestionNumber>{props.number}</QuestionNumber>
        </div>
        <div style={{ flex: 1, display: "flex", paddingLeft: 16 }} >
          <QuestionText>{props.answer}</QuestionText>
        </div>
      </QuizQuestionSelectedContainer>
    );
  }
};