import React from "react";

interface Props {
  text: String;
}
const Alert = ({ text }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {text}
    </div>
  );
};

export default Alert;
