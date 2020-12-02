// Admin page //

import Sider from "antd/lib/layout/Sider";
import React, { useState, useEffect } from "react";
import CustomPage from "../shared/CustomPage";
import { Mesg, FailedMesg, SuccessMesg } from "../../API/APIMessage";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import PasswordRest from "./PasswordRest";
// import { AdminsData } from "../../fakeData/index";
import { AdminsColumns, AdminsData } from "./Config";
// import { Modal } from "react-responsive-modal";
import NewAdmin from "./NewAmin";
import EditAdmin from "./EditAdmin";
import { LoadData, addData } from "../../API";

function Admins(props) {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Admins, setAdmins] = useState([]);
  const [data, setdata] = useState([]);
  const [openPass, setopenPass] = useState(false);
  const [openEdit, setopenEdit] = useState(false);
  const [Filterdata, setFilterdata] = useState([]);
  const [id, setId] = useState();
  const [idEdit, setIdEdit] = useState();
  const [admin, setadmin] = useState([]);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  const onOpenModalPass = (id, value) => {
    setopenPass(value);
    setId(id);
  };
  const onOpenModalEdit = (id, value) => {
    setopenEdit(value);
    setIdEdit(id);
  };
  const deactive = (id) => {
    let data = { id: id };
    addData(
      "admin/deactivate",
      data,
      (mesg, Data) => {
        SuccessMesg("Deactivate admin done !");

        getAdmins();
      },
      (err) => {
        FailedMesg(err);
      }
    );
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
          setadmin(data.data);
          data.data.map((admin) => {
            Admins.push({
              id: { id: admin.id, deactive: () => deactive(admin.id) },
              FullName: admin.name,
              Username: admin.username,
              Type: admin.type === 1 ? ["Book Admin"] : ["Book Admin"],
              Branch: "Baghdad",
              Status: admin.active ? ["Enabled"] : ["Disabled"],
              pass: {
                onOpen: () => onOpenModalPass(admin.id, true),
                openPass: openPass,
                onClose: onOpenModalPass(null, false),
              },
              edit: {
                onOpen: () => onOpenModalEdit(admin.id, true),
              },
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
      {openEdit ? (
        <EditAdmin
          fun={onOpenModal}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
        />
      ) : null}
      <Modal
        closeOnOverlayClick={false}
        open={openPass}
        onClose={() => onOpenModalPass(null, false)}
        center
        showCloseIcon={false}
        classNames={{
          modal: "customModal",
        }}>
        <PasswordRest
          id={id}
          onClose={() => onOpenModalPass(null, false)}
          data={admin}
        />
      </Modal>
    </div>
  );
}

export default Admins;
