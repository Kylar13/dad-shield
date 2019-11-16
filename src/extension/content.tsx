import * as React from "react";
import * as ReactDOM from "react-dom";
import { Overlay } from "../overlay/Overlay";

const element = document.createElement("div");
element.id = "extroot";

document.body.appendChild(element);

ReactDOM.render(<Overlay />, document.getElementById("extroot"));
