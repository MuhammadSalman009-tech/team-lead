import React from "react";
import MainListItem from "./MainListItem";

function MainList({ leads, getAllLeads, getAllBroadCastedLeads }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Lead Name</th>
          <th scope="col">Lead Company</th>
          <th scope="col">Lead Domain</th>
          <th scope="col">Conversion Status</th>
          <th scope="col">BroadCast Status</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <MainListItem
            lead={lead}
            getAllLeads={getAllLeads}
            getAllBroadCastedLeads={getAllBroadCastedLeads}
          />
        ))}
      </tbody>
    </table>
  );
}

export default MainList;
