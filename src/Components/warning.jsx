import { useState, useContext, useEffect } from "react";
import { Alert } from "react-bootstrap";
import setLoadingContxt from "../Context/setLoadingContxt";

const Message = ({ message }) => {
  const { error } = useContext(setLoadingContxt);

  return (
    <div
      style={{
        position: "fixed",
        top: "3%",
        left: "50%",
        transform: "translate(-50%, 0%)",
        width: "auto",
        zIndex: 999,
      }}
    >
      {
        <>
          <Alert
            key={error.type}
            variant={error.type}
            className="bouncing-component"
          >
            {error.message}
          </Alert>
        </>
      }
    </div>
  );
};

const MessageComponent = () => {
  const obj = {
    warning: (message) => {
      // return Message("warning", message);
      return <Message message={message} />;
    },
    primary: (message) => <Message variant="primary" message={message} />,
    secondary: (message) => <Message variant="secondary" message={message} />,
    success: (message) => <Message variant="success" message={message} />,
    danger: (message) => <Message variant="danger" message={message} />,
    info: (message) => <Message variant="info" message={message} />,
    light: (message) => <Message variant="light" message={message} />,
    dark: (message) => <Message variant="dark" message={message} />,
  };

  return obj;
};

export default MessageComponent;
