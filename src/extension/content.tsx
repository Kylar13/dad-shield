import * as React from "react"
import * as ReactDOM from "react-dom"
import { Overlay } from "../overlay/Overlay";
import { Core } from "../core/core";

chrome.runtime.sendMessage({}, (response) => {
    var checkReady = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(checkReady)
            console.log("We're in the injected content script!")
        }
    })
})

const core = new Core();
core.start();
core.registerListener((info: any) => {
    console.log("content.tsx", info);
});

const element = document.createElement('div');
element.id = "extroot";

document.body.appendChild(element);

ReactDOM.render(<Overlay />, document.getElementById("extroot"));
