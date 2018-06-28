import React from "react";
import { Message } from "semantic-ui-react";

const Alert = props => {
  const { type, message } = props.alert;

  return message ? (
    <Message className="margin-10" color={type === "success" ? "olive" : "red"}>
      {message}
    </Message>
  ) : null;
};

export default Alert;
