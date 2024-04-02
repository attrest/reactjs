"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/hooks/store";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <Provider store={store}>
      <div>{children}</div>
    </Provider>
  );
};

export default Container;
