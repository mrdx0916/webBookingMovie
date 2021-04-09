import React from "react";
import { Route } from "react-router-dom";
import GlobalHeader from "../Components/GlobalHeader";
import GlobalFooter from '../Components/GlobalFooter';
import data from '../Components/assets/Data.json';

export const HomeTemplate = (props) => {
  let { Component, ...restParam } = props;
  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <>
            <GlobalHeader />
            <Component {...propsRoute} />
            <GlobalFooter />
          </>
        );
      }}
    />
  );
};
