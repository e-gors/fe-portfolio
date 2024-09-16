import React from "react";
import { Helmet } from "react-helmet-async";
import FeedbacksView from "../modules/private/sections/feedbacks/view/FeedbacksView";

function Feedbacks() {
  return (
    <>
      <Helmet>
        <title>Efren Goron | Feedbacks</title>
      </Helmet>
      <FeedbacksView />
    </>
  );
}

export default Feedbacks;
