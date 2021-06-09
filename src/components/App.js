import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import Root from "../pages/Root";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";
import Badges from "../pages/Badges";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route
            exact
            path="/badges/:badgeId/"
            component={BadgeDetailsContainer}
          />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
