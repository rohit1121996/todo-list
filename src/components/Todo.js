/** @format */

import React from "react";

export default function Todo({ data }) {
  return (
    <div className="card m-2" style={{ width: "100%" }}>
      <div className="card-body">
        <div class="d-flex justify-content-between">
          <h5 className="card-title">{data.name}</h5>
          <h5 className="card-title">Team: {data.teamname}</h5>
        </div>
        <h6>Assignee employee: {data && data.username}</h6>
        <p className="card-text">{data.description}</p>
      </div>
    </div>
  );
}
