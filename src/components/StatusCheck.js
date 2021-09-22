import React from "react";

function StatusCheck({ status }) {
  return (
    <div>
      {status ? (
        <div className="text-success">OK</div>
      ) : (
        <div className="text-danger">Belum</div>
      )}
    </div>
  );
}

export default StatusCheck;
