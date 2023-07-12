import React from "react";
import error from "./../assets/error.jpg";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={error}
        alt="Page not found"
        style={{ height: "800px", marginTop: "1.5rem", padding: "1rem" }}
      />
    </div>
  );
};

export default ErrorPage;
