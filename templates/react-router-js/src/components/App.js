import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const ChildComponent = () => {
    return (<>
        <h4>This is Child component on /child route!</h4>
    </>)
}

const Home = () => {
    return (<>
        <h4>This is Home component on / route</h4>
    </>)
}

const App = () => {
    return (
        <div className="App">
            <Router>

                <h1>This application is created using Flash!</h1>
                <Link to='/'>Home</Link>
                <Link to='/child'>Child</Link>

                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/child'>
                        <ChildComponent />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;