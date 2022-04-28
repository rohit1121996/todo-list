/** @format */

import React from "react";

export default function Todo({ data }) {
  return (
    <div className="card m-2" style={{ width: "100%" }}>
      <div className="card-body">
        <div class="d-flex justify-content-between">
          <h5 className="card-title">{data.todoName}</h5>
          <h5 className="card-title">
            Assignee employee: {data && data.user && data.user.name}
          </h5>
        </div>
        <p className="card-text">{data.description}</p>
      </div>
    </div>
  );
}
