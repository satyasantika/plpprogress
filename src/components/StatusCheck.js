import React from "react";

function StatusCheck({ status, form }) {
  return (
    <>
      {status ? (
        <div className="btn btn-sm btn-outline-success">{form} &#10004;</div>
      ) : (
        <div className="btn btn-sm btn-outline-danger">{form} &#10060;</div>
      )}
    </>
  );
}

export default StatusCheck;
