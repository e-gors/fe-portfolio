import { Route, Router as BrowserRouter, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./routes/routes";
import Private from "./routes/Private";
import Public from "./routes/Public";
import ThemeProvider from "./theme";
import NotFoundPage from "./routes/NotFound";
import Authentication from "./routes/Authentication";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter history={createBrowserHistory()}>
        <Switch>
          {routes.map((route, index) => {
            if (route.auth) {
              return <Private exact key={index} {...route} />;
            } else if (route.authentication) {
              return <Authentication exact key={index} {...route} />;
            } else {
              return <Public exact key={index} {...route} />;
            }
          })}
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
