import axios from "axios";
import React from "react";

function MainListItem({ lead, getAllLeads, getAllBroadCastedLeads }) {
  const handleConversionChange = (e) => {
    const id = lead._id;
    let value;
    if (e.target.value === "false") {
      value = true;
    } else {
      value = false;
    }
    axios
      .post(`http://localhost:5000/leads/conversion-status/${id}`, {
        conversion: value,
      })
      .then(function (response) {
        getAllLeads();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleBroadCastChange = (e) => {
    const id = lead._id;
    let value;
    if (e.target.value === "false") {
      value = true;
    } else {
      value = false;
    }
    axios
      .post(`http://localhost:5000/leads/broadcast-status/${id}`, {
        broadcast: value,
      })
      .then(function (response) {
        getAllLeads();
        getAllBroadCastedLeads();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <tr className={lead.conversion_status ? "table-success" : ""}>
      <td>{lead.name}</td>
      <td>{lead.company}</td>
      <td>{lead.domain}</td>
      <td>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="converion-status"
            name="converion-status"
            onChange={handleConversionChange}
            value={lead.conversion_status}
            checked={lead.conversion_status}
          />
        </div>
      </td>
      <td>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="broadcast-status"
            name="broadcast-status"
            onChange={handleBroadCastChange}
            value={lead.broadcast_status}
            checked={lead.broadcast_status}
          />
        </div>
      </td>
    </tr>
  );
}

export default MainListItem;
