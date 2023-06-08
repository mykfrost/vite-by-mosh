import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return <div className="container-fluid">{children}</div>;
};
export default Container;
