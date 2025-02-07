import { render } from "solid-js/web"
import "./index.css"
import { Router, Route } from "@solidjs/router"
import Home from "./routes/Home"
import NotFound from "./routes/NotFound"
import About from "./routes/About"
import Lessons from "./routes/Lessons"
import Problems from "./routes/Problems"
import Resources from "./routes/Resources"
import Lesson from "./routes/lessons/[...id]"


render(
    () => (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/lessons" component={Lessons} />
            <Route path="/problems" component={Problems} />
            <Route path="/resources" component={Resources} />
            <Route path="/lessons/*id" component={Lesson} />
            <Route path="/*" component={NotFound} />
        </Router>
    ),
    document.getElementById("root") as HTMLElement
)