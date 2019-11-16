import * as React from "react";
import * as ReactDOM from "react-dom";
import { Overlay } from "../overlay/Overlay";

const element = document.createElement("div");
element.id = "extroot";
document.body.appendChild(element);

const style = document.createElement('style');
style.innerHTML = "@import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap');"
document.body.appendChild(style);

ReactDOM.render(<Overlay />, document.getElementById("extroot"));
