import Home from "./components/Home";
import BreakingTheShiftCipher from "./components/IntroductionToSubject/Experiments/BreakingTheShiftCipher";
import Navbar from "./components/Navbar";
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';


function App() {

  return (
    <Router >
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path='/home' >
            <Home />
          </Route>
          <Route path='/navbar/'>
            <Navbar />
          </Route>
          <Route path='/breakShiftCipher'>
            <BreakingTheShiftCipher />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
