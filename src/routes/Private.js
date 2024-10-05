import React, { lazy, Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import Loader from "../layouts/Loader";
import { isAuth } from "../utils/heplers";
import { useScrollToTop } from "../hooks/use-scroll-to-top";
import DashboardLayout from "../layouts/dashboard";

function Private(props) {
  useScrollToTop();

  const { component, development, ...rest } = props;
  const Component = lazy(() => import(`../${component}`));

  if (!isAuth()) {
    return <Route render={() => <Redirect to="/login" />} />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Suspense fallback={<Loader />}>
          <DashboardLayout development={development}>
            <Component {...props} />
          </DashboardLayout>
        </Suspense>
      )}
    />
  );
}

export default Private;
