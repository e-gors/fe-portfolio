import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import Loader from "../layouts/Loader";
import DefaultAppbar from "../layouts/DefaultAppbar";

function Public(props) {
  const { component, ...rest } = props;
  const Component = lazy(() => import(`../${component}`));

  return (
    <Route
      {...rest}
      render={(props) => (
        <Suspense fallback={<Loader />}>
          <DefaultAppbar>
            <Component {...props} />
          </DefaultAppbar>
        </Suspense>
      )}
    />
  );
}

export default Public;
