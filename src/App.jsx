import Login from "pages/Login";
import Index from "pages/Index";
import Registro from "pages/Registro";
import Admin from "pages/admin/Index";
import Vehiculos from "pages/admin/Vehiculos";
import Clientes from "pages/admin/Clientes";
import PublicLayout from "layouts/PublicLayout";
import AuthLayout from "layouts/AuthLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "styles/styles.css";
import PrivateLayout from "layouts/PrivateLayout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/admin/Index", "/admin/Vehiculos", "/Admin/Clientes"]}>
          <PrivateLayout>
            <Switch>
              <Route path="/admin/Index">
                <Admin />
              </Route>
              <Route path="/admin/Vehiculos">
                <Vehiculos />
              </Route>
              <Route path="/Admin/Clientes">
                <Clientes />
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>
        <Route path={["/Login", "/Registro"]}>
          <AuthLayout>
            <Switch>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/Registro">
                <Registro />
              </Route>
            </Switch>
          </AuthLayout>
        </Route>
        <Route path={["/"]}>
          <PublicLayout>
            <Switch>
              <Route path="/">
                <Index />
              </Route>
            </Switch>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
