import axios from "axios";
import React, { useContext } from "react";
import { MyContext } from "../context/context";

export default function CheckIn() {
  const { user, setHere } = useContext(MyContext);

  const submitCheckIn = (e) => {
    e.preventDefault();
    console.log(user);
    let id = user.id;
    axios
      .patch("https://pball-api-bk.web.app/checkin", {
        id,
      })
      .then(setHere(true))
      .then(console.log(id))

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
