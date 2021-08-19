import "./App.css";
import MainComponent from "./components/MainComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignInForm from "./components/SignInForm";
import Navbar from "./components/Navbar";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route exact path="/user/signin" component={SignInForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
