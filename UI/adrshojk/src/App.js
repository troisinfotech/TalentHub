import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/profile/Home";
import ProtectedRoutes from './ProtectedRoutes'
import './app.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact render={()=><Redirect to='/login'/>} />
        <Route path="/login" component={Login} />
        <ProtectedRoutes path="/profile" component={Home} />
        <Route path="/**" component={PageNotFound} />
      </Switch>


    </div>
  );
}

export default App;
