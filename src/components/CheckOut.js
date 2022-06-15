import axios from "axios";
import React, { useContext } from "react";
import { MyContext } from "../context/context";

export default function CheckOut() {
  const { user, setHere, setUserList } = useContext(MyContext);

  const submitCheckOut = (e) => {
    e.preventDefault();
    console.log(user);
    e.preventDefault();
    let id = localStorage.getItem("localId"); ///should be user.id
    axios
      .patch("https://pball-api-bk.web.app/checkout", {
        id,
      })
      .then((res) => {
        setHere(false);
        setUserList(res.data);
      })
      .catch(console.error);
  };

  return (
    <div>
      <button className="button" onClick={submitCheckOut}>
        I'm leaving
      </button>
    </div>
  );
}
