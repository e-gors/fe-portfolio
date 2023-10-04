import React, { lazy, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../utils/helpers";
import Loader from "../layouts/Loader";

function Private(props) {
  const { component, ...rest } = props;
  const Component = lazy(() => import(`../${component}`));

  if (!isAuth()) {
    return <Route render={() => <Redirect to="/login" />} />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Suspense fallback={<Loader />}>
          <Component {...props} />
        </Suspense>
      )}
    />
  );
}

export default Private;
