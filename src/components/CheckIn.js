import axios from "axios";
import React, { useContext } from "react";
import { MyContext } from "../context/context";

export default function CheckIn() {
  const { user, setHere, setUserList } = useContext(MyContext);

  const submitCheckIn = (e) => {
    e.preventDefault();
    console.log(user);
    let id = localStorage.getItem("localId"); //should be user.id
    axios
      .patch("https://pball-api-bk.web.app/checkin", {
        id,
      })
      .then(setHere(true))
      .then(
        axios
          .get("https://pball-api-bk.web.app/users")
          .then((res) => setUserList(res.data))

          .catch(console.error)
      )

      //.then(console.log("checked in! " + id))

      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button className="button" onClick={submitCheckIn}>
        I'm here
      </button>
    </div>
  );
}
