import axios from "axios";
import React, { useContext } from "react";
import { MyContext } from "../context/context";

export default function CheckOut() {
  const { user, setHere } = useContext(MyContext);

  const checkIn = (user) => {
    let id = user.id;
    axios
      .patch("https://pball-api-bk.web.app/checkout", {
        id,
      })
      .then(setHere(false))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button className="button" onSubmit={checkIn(user)}></button>
    </div>
  );
}
