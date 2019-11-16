import * as React from "react";

export const Carousel = (props: any) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <div style={{ ...props.style, flexDirection: "column", paddingLeft: 56, paddingRight: 56 }}>
      <div style={{ display: "flex", justifyContent: "center", paddingTop: 30 }}>
        {props.items.map((item, index) => (
          <div
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
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "white", fontFamily: "Rubik", fontSize: 16 }}>{props.items[currentIndex]}</p>
      </div>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "blue",
          height: 48,
          marginBottom: 24,
          border: "none",
          borderRadius: 5,
        }}
        onClick={() => {
          if (currentIndex === props.items.length - 1) {
            props.onEndPress();
          } else {
            setCurrentIndex(currentIndex + 1);
          }
        }}
      ></button>
    </div>
  );
};
