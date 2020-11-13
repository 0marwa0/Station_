// Admin page //

import Sider from "antd/lib/layout/Sider";
import React, { useState, useEffect } from "react";
import CustomPage from "../shared/CustomPage";
import { Mesg, FailedMesg, SuccessMesg } from "../../API/APIMessage";

// import { AdminsData } from "../../fakeData/index";
import { AdminsColumns, AdminsData } from "./Config";
// import { Modal } from "react-responsive-modal";

import NewAdmin from "./NewAmin";
import { LoadData, addData } from "../../API";

function Admins(props) {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Admins, setAdmins] = useState([]);

  const onOpenModal = (open) => {
    setOpen(open);
  };
  const getAdmins = () => {
    LoadData(
      "Admins",
      (err, data) => {
        setLoading(false);
        AdminsData(data.data, (Admins) => {
          setAdmins(Admins);
        });

        if (err) {
          Mesg(err);
        }
      },
      (err) => {
        setLoading(false);
        FailedMesg(err, "Something worng happend !");
        console.log(err, "failed");
      }
    );
  };
  useEffect(() => {
    setLoading(true);
    getAdmins();
  }, []);
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [type, settype] = useState("");

  const handleInput = (e, key) => {
    let value = e.target.value;
    switch (key) {
      case "name":
        setname(value);
        break;
      case "username":
        setusername(value);
        break;
      case "password":
        setpassword(value);
        break;
      case "type":
        settype(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = () => {
    let data = {
      name: name,
      username: username,
      password: password,
      type: 1,
    };
    if (name != "" && password != "") {
      setLoading(true);
      addData(
        "admin/add",
        data,
        (mesg, Data) => {
          // if (!Data.status) {
          //   Mesg(mesg);
          // }
          SuccessMesg("Account creating done !");

          setLoading(false);
          onOpenModal(false);
          getAdmins();
          setname("");
          setusername("");
          setpassword("");
        },
        (err) => {
          onOpenModal(false);
          setLoading(false);
          setname("");
          setusername("");
          setpassword("");
          FailedMesg(err);
        }
      );
    } else {
      onOpenModal(false);
      FailedMesg(" Account creating failed ", "Empty fileds");
    }
  };
  return (
    <div>
      <CustomPage
        pageTitle="Admins"
        columns={AdminsColumns}
        data={Admins}
        onOpenModal={onOpenModal}
        EmptyTitle="No Admins found"
        Item="Admin"
        onOpenModal={() => onOpenModal(true)}
        Loading={Loading}
        length={Admins.length}
      />
      {open ? (
        <NewAdmin
          fun={onOpenModal}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
        />
      ) : null}
    </div>
  );
}

export default Admins;
