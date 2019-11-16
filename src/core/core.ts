import { Listener, IInterceptor } from "./models";
import { interceptors } from "./interceptors";

export class Core {
    private fn: Listener = () => { };
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
        const hrefInterceptors = interceptors.filter((x: IInterceptor) => x.condition.method === "href");
        for (const interceptor of hrefInterceptors) {
            if (interceptor.condition.fn(href)) {
                this.fn(interceptor.action);
            }
        }
    }
}
