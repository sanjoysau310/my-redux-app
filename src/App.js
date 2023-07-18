//import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth.isAuth);
  return (
    <Fragment>
      <Header />
      {!auth ? <Login /> : <Counter />}
    </Fragment>
  );
}

export default App;
