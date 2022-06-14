import axios from "axios";
import React, { useContext } from "react";
import { MyContext } from "../context/context";

export default function CheckOut() {
  const { user, setHere, setUserList } = useContext(MyContext);

  const submitCheckOut = (e) => {
    e.preventDefault();
    let id = user.id;
    axios
      .patch("https://pball-api-bk.web.app/checkout", {
        id,
      })
      .then(setHere(false))
      .then(console.log(user))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button className="button" onClick={submitCheckOut}>
        I'm leaving
      </button>
    </div>
  );
}
