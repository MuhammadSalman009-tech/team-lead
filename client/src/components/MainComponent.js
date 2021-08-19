import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AddLeadForm from "./AddLeadForm";
import MainList from "./MainList";
function MainComponent() {
  const [leads, setLeads] = useState([]);
  const history = useHistory();
  const getAllLeads = () => {
    return axios
      .get("http://localhost:5000/leads/")
      .then(function (response) {
        setLeads(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      history.push("/user/signin");
    }
    getAllLeads();
  }, []);
  return (
    <div className="container">
      <h1>salman</h1>
      <AddLeadForm leads={leads} getAllLeads={getAllLeads} />
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
            <MainList lead={lead} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainComponent;
