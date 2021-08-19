import axios from "axios";
import React, { useState } from "react";

function MainList({ lead }) {
  const handleConversionChange = (e) => {
    const id = lead._id;
    let value;
    if (e.target.value == "false") {
      value = true;
    } else {
      value = false;
    }

    console.log(id, value);
    // axios
    //   .get(`http://localhost:5000/leads/update/${id}`, { id })
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  const handleBroadCastChange = () => {};
  return (
    <tr>
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
          />
        </div>
      </td>
    </tr>
  );
}

export default MainList;
