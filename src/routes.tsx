import { Container } from "@material-ui/core"
import { lazy } from "react"
import { Suspense } from "react"
import {
    HashRouter as Router,
    Route,
    Switch,
} from "react-router-dom"
import PageLoading from "./components/PageLoading"
import Home from "./pages/Home"

const Newsletter = lazy(() => import('./pages/Newsletter'))
const NotFound = lazy(() => import('./pages/404'))


const Scaffold: React.FC = () => {

    return (
        <Router >
            <Container maxWidth='lg'>
                <Suspense fallback={<PageLoading />}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/newsletter' component={Newsletter} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Suspense>
            </Container>
        </Router>
    )
}

export default Scaffold