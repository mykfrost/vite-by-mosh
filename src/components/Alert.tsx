import React from "react";

interface Props {
  text: String;
}
const Alert = (props: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      Alert
    </div>
  );
};

export default Alert;
