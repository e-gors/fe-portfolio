import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../layouts/Loader";
import { useScrollToTop } from "../hooks/use-scroll-to-top";

function Authentication(props) {
  useScrollToTop();

  const { component, ...rest } = props;
  const Component = lazy(() => import(`../${component}`));

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

export default Authentication;
