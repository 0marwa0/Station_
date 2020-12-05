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
import Admin from "./Admin";
import EditAdmin from "./EditAdmin";
import { Drawer } from "antd";
import { LoadData, addData, editData, addFile } from "../../API";

function Admins(props) {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Admins, setAdmins] = useState([]);
  const [data, setdata] = useState([]);
  const [openPass, setopenPass] = useState(false);
  const [openEdit, setopenEdit] = useState(false);
  const [Filterdata, setFilterdata] = useState([]);
  const [id, setId] = useState();
  const [Edited, setEdited] = useState([]);
  const [admin, setadmin] = useState([]);
  const [image, setimage] = useState();

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };
  const onCloseModalEdit = () => {
    setopenEdit(false);
  };

  const onOpenModalPass = (id, value) => {
    setopenPass(value);
    setId(id);
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
                onOpen: () => onOpenModalEdit(admin.id),
              },
            });
          });
          setEdited(data.data);

          setdata(Admins);
          setFilterdata(Admins);
        }
      },
      (err) => {
        setLoading(false);
        FailedMesg(err, "Something worng happend !");
        // console.log(err, "failed");
      }
    );
  };
  const onOpenModalEdit = (id) => {
    setId(id);
    setopenEdit(true);
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
  const [branch, setbranch] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
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
      case "email":
        setemail(value);
        break;
      case "password":
        setpassword(value);
        break;
      case "phone":
        setphone(value);
        break;
      default:
        break;
    }
  };
  const handleSelect = (e, key) => {
    let value = e;
    switch (key) {
      case "type":
        settype(value);
      case "branch":
        setbranch(value);
        break;
      case "image":
        setimage(value);
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
    console.log(branch, type, "branch,type");

    // setLoading(true);
    // // console.log(data, "data");
    // let File = new FormData();
    // File.append("image", image);
    // addFile(
    //   "upload",
    //   File,
    //   (res) => {
    //     if (res.errMsg) {
    //       Mesg(res.errMsg);
    //     } else {
    //       let admin = {
    //         image: res.url,
    //         name: name,
    //         username: username,
    //         password: password,
    //         email: email,
    //         type: type,
    //         phone: phone,
    //         branch: branch,
    //       };
    //       console.log(admin, "data");

    //       addData(
    //         "admin/add",
    //         data,
    //         (mesg, Data) => {
    //           SuccessMesg("Account creating done !");
    //           onOpenModal(false);
    //           getAdmins();
    //           ClearState();
    //         },
    //         (err) => {
    //           onOpenModal(false);
    //           ClearState();
    //           FailedMesg(err);
    //         }
    //       );
    //     }
    //   },
    //   (err) => {
    //     FailedMesg(err.toString());
    //   }
    // );
  };
  const handleEdit = () => {
    let data = {
      name: name,
      username: username,
      password: password,
      email: email,
      type: type,
      branch: branch,
    };

    setLoading(true);
    editData(
      "",
      data,
      (mesg, Data) => {
        SuccessMesg("Account data saved !");
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
  let admins = admin.filter((item) => item.id === id);
  // setEdited(admins[0]);

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

      <Drawer
        placement="right"
        closable={false}
        title={false}
        onClose={onCloseModal}
        width={570}
        maskClosable={open}
        visible={open}
        key="right">
        <Admin
          fun={onCloseModal}
          type="create"
          handleSelect={handleSelect}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
        />
      </Drawer>
      <Drawer
        placement="right"
        closable={false}
        title={false}
        onClose={onCloseModalEdit}
        width={570}
        visible={openEdit}
        key="right">
        <Admin
          fun={onCloseModalEdit}
          type="edit"
          id={id}
          handleSelect={handleSelect}
          admins={admins}
          handleSubmit={handleEdit}
          handleInput={handleInput}
        />
      </Drawer>

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
