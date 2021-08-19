import "./App.css";
import MainComponent from "./components/MainComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignInForm from "./components/SignInForm";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route exact path="/user/signin" component={SignInForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
