import { Route, Router as BrowserRouter, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./routes/routes";
import Private from "./routes/Private";
import Public from "./routes/Public";
import ThemeProvider from "./theme";
import NotFoundPage from "./routes/NotFound";
import Authentication from "./routes/Authentication";
import DevelopmentMode from "./routes/DevelopmentMode";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter history={createBrowserHistory()}>
        <Switch>
          {routes.map((route, index) => {
            if (route.development) {
              // Check if 'isDashboard' is true when development is true
              if (route.isDashboard) {
                return <Private exact key={index} {...route} />;
              } else {
                return <DevelopmentMode exact key={index} {...route} />;
              }
            } else if (route.auth) {
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
