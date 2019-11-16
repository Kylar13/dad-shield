import * as React from "react";

export const Overlay = () => (
  <div
    style={{
      position: "fixed",
      display: "flex",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 9999,
    }}
  >
    <p>Hola Carlos</p>
  </div>
);
