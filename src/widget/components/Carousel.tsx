import * as React from "react";
import { Header } from "./Header";

export interface ICarouselItem {
  text: string;
  img: string;
}

interface Props {
  style?: React.CSSProperties;
  items: ICarouselItem[];
  onEndPress: () => void;
}

export const Carousel = (props: Props) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <div style={{ ...props.style, flexDirection: "column", paddingLeft: 56, paddingRight: 56 }}>
      <div style={{ display: "flex", justifyContent: "center", paddingTop: 30 }}>
        {props.items.map((_: any, index: number) => (
          <div
            key={index}
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              marginLeft: 2,
              marginRight: 2,
              backgroundColor: "white",
              opacity: index === currentIndex ? 1 : 0.3,
            }}
          />
        ))}
      </div>
      <Header style={{ display: "flex", paddingTop: 60, paddignBottom: 20 }} img={props.items[currentIndex].img} />
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <p style={{ color: "white", fontFamily: "Rubik", fontSize: 16, marginBottom: isPressed ? 36 : 32 }}>
        {props.items[currentIndex].text}
      </p>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "blue",
          height: 48,
          marginBottom: isPressed ? 20 : 24,
          border: "none",
          borderRadius: 5,
          fontFamily: "Rubik",
          fontSize: 16,
          color: "white",
          boxShadow: isPressed ? "0px 0px 0px #9E9E9E" : "0px 4px 0px #140374",
          outline: "none",
        }}
        onClick={() => {
          setIsPressed(true);
          setTimeout(() => setIsPressed(false), 150);
          if (currentIndex === props.items.length - 1) {
            props.onEndPress();
          } else {
            setCurrentIndex(currentIndex + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};
