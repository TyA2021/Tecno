import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/**
 *
 * @Commands
 *            npm i react-cookie
 *            npm install @mui/material @emotion/react @emotion/styled
 *            npm install react-bootstrap bootstrap@5.1.3
 *            npm i react-router-dom
 */

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        {/*<Menu></Menu>*/}
        <Switch>
          <Route exact path="/" component={""}></Route>
          <Route exact path="/parametro/:parametro" component={""}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

///Mulitple navigation
/**
 * const User = ({ match }) => {
return (
<Switch>
<Route
exact
path={${match.url}/Ingresar}
component={LoginRegistro}

  ></Route>
</Switch>
);
};

const StandardSection = ({ match }) => {
return (
<div className="box-container position-relative ">
<Menu />
<Container>
<Switch>
<Route exact path={match.url} component={Inicio}></Route>
<Route exact path={${match.url}/Catalogo} component={Catalogo}></Route>
<Route exact path={${match.url}/Diccionario} component={Diccionario}></Route>
</Switch>
</Container>
</div>
);
};

function App() {
return (
<BrowserRouter>
<div className="App ">
<Switch>
<Route exact path={'/'} component={StandardSection}></Route>
<Route path="/home" component={StandardSection} />
<Route path="/user" component={User}></Route>
</Switch>
</div>
</BrowserRouter>
);
}
 */
