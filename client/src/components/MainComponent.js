import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AddLeadForm from "./AddLeadForm";
import BroadCastedList from "./BroadCastedList";
import MainList from "./MainList";
function MainComponent() {
  const [leads, setLeads] = useState([]);
  const [broadCastedLeads, setBroadCastedLeads] = useState([]);
  const history = useHistory();
  const getAllLeads = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return axios
      .post("http://localhost:5000/leads/", { userID: user.id })
      .then(function (response) {
        console.log(response.data);
        setLeads(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getAllBroadCastedLeads = () => {
    return axios
      .get("http://localhost:5000/leads/broadcasted")
      .then(function (response) {
        setBroadCastedLeads(response.data);
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
    getAllBroadCastedLeads();
  }, []);
  return (
    <div className="container">
      <AddLeadForm getAllLeads={getAllLeads} />
      <hr />
      <h1 className="mt-3">Mian List</h1>
      <MainList
        leads={leads}
        getAllLeads={getAllLeads}
        getAllBroadCastedLeads={getAllBroadCastedLeads}
      />
      <hr />
      <h1 className="mt-3">BroadCasted List</h1>
      <BroadCastedList broadCastedLeads={broadCastedLeads} />
    </div>
  );
}

export default MainComponent;
