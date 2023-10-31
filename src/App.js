import { useContext } from "react";
import Home from "./components/Home";
import BreakingTheMonoAlphabeticSubstitutionCipher from "./components/IntroductionToSubject/Experiments/BreakingTheMonoAlphabeticSubstitutionCipher";
import BreakingTheShiftCipher from "./components/IntroductionToSubject/Experiments/BreakingTheShiftCipher";
import OneTimePad from "./components/IntroductionToSubject/Experiments/OneTimePad";
import Navbar from "./components/Navbar";
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import authContext from "./context/authContext";
import LoginRegister from "./components/LoginRegister";


function App() {

  let user = useContext(authContext);
  console.log('here is the user you want to look for ', user);
  return (
    ((user.authToken) ? (<Router >
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
          <Route path='/BreakingTheMonoAlphabeticSubstitutionCipher'>
            <BreakingTheMonoAlphabeticSubstitutionCipher />
          </Route>
          <Route path='/OneTimePad'>
            <OneTimePad />
          </Route>
        </Switch>

      </div>
    </Router>) : (<LoginRegister />))

  );
}

export default App;
