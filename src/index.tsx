import { render } from "solid-js/web"
import "./index.css"
import { Router, Route } from "@solidjs/router"
import Home from "./routes/Home"
import NotFound from "./routes/NotFound"

render(
    () => (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/*" component={NotFound} />
        </Router>
    ),
    document.getElementById("root") as HTMLElement
)