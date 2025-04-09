import React from "react";

import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import { ToastContainer } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <ToastContainer />
    </>
  );
};

export default PageLayout;
