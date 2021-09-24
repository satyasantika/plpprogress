import React from "react";

function StatusPercent({ status }) {
  return (
    <div>
      {status === 100 ? (
        <div className="text-success">OK</div>
      ) : (
        <div className="text-danger">{status}%</div>
      )}
    </div>
  );
}

export default StatusPercent;
