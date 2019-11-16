import * as React from "react";

import COLORS from "../../utils/colors";

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
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
  },
  container: {
    backgroundColor: COLORS.pink,
    borderRadius: 8,
    color: COLORS.white,
    padding: 24,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 16,
    cursor: "pointer",
  }
};

interface IModalProps {
  children: React.ReactNode,
  width: number | string,
  height: number | string,
}

export const Modal = (props: IModalProps) => {
  
  const [visible, setVisibility] = React.useState(true);

  return (
    <div style={{...styles.overlay, display: visible ? "flex": "none"}}>
      <div style={{...styles.container, width: props.width, height: props.height}}>
        {props.children}
        <div style={styles.closeButton} onClick={() => setVisibility(false)}>X</div>
      </div>
    </div>
  );
};
