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
  const [data, setdata] = useState([]);
  const [Filterdata, setFilterdata] = useState([]);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  const getAdmins = () => {
    LoadData(
      "Admins",
      (err, data) => {
        setLoading(false);
        if (err) {
          Mesg(err);
        } else {
          //     AdminsData(data.data, (Admins) => {
          //   setAdmins(Admins);
          // });

          let Admins = [];
          data.data.map((admin) => {
            Admins.push({
              FullName: admin.name,
              Username: admin.username,
              Type: admin.type === 1 ? ["Book Admin"] : ["Book Admin"],
              Branch: "Baghdad",
              Status: true ? ["Enabled"] : ["Disabled"],
            });
          });
          setdata(Admins);
          setFilterdata(Admins);
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
    if (localStorage.getItem("station_token")) {
      setLoading(true);
      getAdmins();
    } else {
      props.history.push("/login");
    }
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
  const ClearState = () => {
    setLoading(false);

    setname("");
    setusername("");
    setpassword("");
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
          SuccessMesg("Account creating done !");
          onOpenModal(false);
          getAdmins();
          ClearState();
        },
        (err) => {
          onOpenModal(false);
          ClearState();
          FailedMesg(err);
        }
      );
    } else {
      onOpenModal(false);
      FailedMesg(" Account creating failed ", "Empty fileds");
    }
  };
  const [searchText, setsearchText] = useState("");

  const HandleSearch = (e) => {
    let value = e.target.value;
    setsearchText(value);
    if (value) {
      setFilterdata(data);
    }
  };

  const Filter = () => {
    let newData = data.filter((item) =>
      item.FullName.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilterdata(newData);
  };
  return (
    <div>
      <CustomPage
        pageTitle="admins"
        columns={AdminsColumns}
        data={Filterdata}
        HandleSearch={HandleSearch}
        filter={Filter}
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
