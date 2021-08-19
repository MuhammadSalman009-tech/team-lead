import React from "react";

function BroadCastedListItem({ lead }) {
  return (
    <tr>
      <td>{lead.name}</td>
      <td>{lead.company}</td>
      <td>{lead.domain}</td>
    </tr>
  );
}

export default BroadCastedListItem;
