import React from "react";
import BroadCastedListItem from "./BroadCastedListItem";

function BroadCastedList({ broadCastedLeads }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Lead Name</th>
          <th scope="col">Lead Company</th>
          <th scope="col">Lead Domain</th>
        </tr>
      </thead>
      <tbody>
        {broadCastedLeads.map((lead) => (
          <BroadCastedListItem lead={lead} key={lead._id} />
        ))}
      </tbody>
    </table>
  );
}

export default BroadCastedList;
