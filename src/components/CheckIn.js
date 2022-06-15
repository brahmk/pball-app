import axios from "axios";
import React, { useContext } from "react";
import { MyContext } from "../context/context";

export default function CheckIn() {
  const { user, setHere, setUserList } = useContext(MyContext);

  const submitCheckIn = () => {
    let id = localStorage.getItem("localId"); //should be user.id
    axios
      .patch("https://pball-api-bk.web.app/checkin", {
        id,
      })

      .then((res) => {
        setHere(true);
        setUserList(res.data);
      })
      .catch(console.error);

  };
  return (
    <div>
      <button className="button" onClick={submitCheckIn}>
        I'm here
      </button>
    </div>
  );
}
