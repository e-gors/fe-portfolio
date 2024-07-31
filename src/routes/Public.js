import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../layouts/Loader";
import PublicDefaultLayout from "../layouts/PublicDefaultLayout";

function Public(props) {
  const { component, ...rest } = props;
  const Component = lazy(() => import(`../${component}`));

  return (
    <Route
      {...rest}
      render={(props) => (
        <Suspense fallback={<Loader />}>
          <PublicDefaultLayout>
            <Component {...props} />
          </PublicDefaultLayout>
        </Suspense>
      )}
    />
  );
}

export default Public;
