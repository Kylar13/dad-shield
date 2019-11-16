import { Listener } from "./models";

export class Core {
    private fn: Listener = (info: any) => { };
    private lastHref: string;

    constructor() {
        // bindings
        this.start = this.start.bind(this);
        this.registerListener = this.registerListener.bind(this);
        this.onHrefChanged = this.onHrefChanged.bind(this);
    }

    public start() {
        const newhref = window.location.href;
        if (newhref !== this.lastHref) {
            this.onHrefChanged(newhref);
        }
        this.lastHref = window.location.href;
    }

    public registerListener(fn: Listener) {
        this.fn = fn;
    }

    private onHrefChanged(href: string) {
        console.log(href);
        if (href.indexOf("register") >= 0 || href.indexOf("signup") >= 0) {
            this.fn({
                type: "question",
                asd: "this is a signup page"
            });
        }
    }
}
