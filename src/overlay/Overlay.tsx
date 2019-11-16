import * as React from "react";
import { Modal } from "./components/Modal";

export const Overlay = (props) => (
  <Modal width={500} height={200} visible={props.visible} setVisibility={props.setVisibility}>
    Modal Content!
  </Modal>
);
