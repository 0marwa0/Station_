// Customer page
import React, { useState, useEffect } from "react";
import CustomPage from "../shared/CustomPage";
import { CustomersColumns, UsersData } from "./Config";
// import { CustomersData } from "../../fakeData";
import { DateName } from "../Dashboard";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Notify from "./Notify";
import { Mesg, FailedMesg, SuccessMesg } from "../../API/APIMessage";
import { LoadData, addData } from "../../API";
import Progress from "react-progress-2";
import { Drawer } from "antd";
function Customers(props) {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [users, setusers] = useState([]);
  const [data, setdata] = useState([]);
  const [openNotify, setNotify] = useState(false);

  const [Filterdata, setFilterdata] = useState([]);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  const [Id, setId] = useState("");
  const onOpenModalNotify = (id) => {
    setNotify(true);
    setId(id);
    // console.log("notify user", value);
  };
  const deactive = (id) => {
    let data = { id: id };
    addData(
      "user/deactivate",
      data,
      (mesg, Data) => {
        SuccessMesg("Deactivate costumer done !");

        loadCustomers();
      },
      (err) => {
        FailedMesg(err);
      }
    );
  };
  const loadCustomers = () => {
    setLoading(true);
    // Progress.show();

    LoadData(
      "users",
      (err, data) => {
        setLoading(false);
        if (err) {
          Mesg(err);
        } else {
          let Users = [];
          data.data.rows.map((user) => {
            Users.push({
              id: {
                id: user.id,
                onOpen: () => onOpenModalNotify(user.id),
                deactive: () => deactive(user.id),
              },

              FullName: user.name,
              Email: user.email,
              // notify: {
              //   onOpen: () => onOpenModalNotify(user.id, true),
              // },
              PhoneNumber: user.phone,
              Date: DateName(user.createdAt),
              Status: user.active ? ["Enabled"] : ["Disabled"],
            });
          });
          setdata(Users);
          setFilterdata(Users);
        }
      },
      (err) => {
        setLoading(false);
        // Progress.hide();
        FailedMesg(err, "Something worng happend !");
      }
    );
  };
  useEffect(() => {
    if (localStorage.getItem("station_token")) {
      loadCustomers();
    } else {
      props.history.push("/login");
    }
  }, []);
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
    console.log(data, searchText);

    setFilterdata(newData);
  };
  return (
    <div>
      {/* <Progress.Component thumbStyle={{ background: "var(--yellow)" }} /> */}
      <CustomPage
        pageTitle="customers"
        columns={CustomersColumns}
        data={Filterdata}
        HandleSearch={HandleSearch}
        filter={Filter}
        onOpenModal={onOpenModal}
        Loading={Loading}
        Item="customer"
      />
      {/* <Modal
        closeOnOverlayClick={false}
        open={open}
        onClose={() => onOpenModal(false)}
        center
        showCloseIcon={false}
        classNames={{
          modal: "customModal",
        }}> */}
      <Drawer
        placement="right"
        closable={false}
        title={false}
        onClose={() => onOpenModal(false)}
        width={520}
        maskClosable={open}
        visible={open}
        key="right">
        <Notify Close={() => onOpenModal(false)} id={props.id} all={true} />
      </Drawer>{" "}
      {/* </Modal> */}
      {/* <Modal
        closeOnOverlayClick={false}
        open={openNotify}
        onClose={() => onOpenModalNotify(false)}
        center
        showCloseIcon={false}
        classNames={{
          modal: "customModal",
        }}> */}
      {/* <Drawer
        placement="right"
        closable={false}
        title={false}
        onClose={() => onOpenModalNotify(false)}
        width={520}
        maskClosable={openNotify}
        visible={openNotify}
        key="right"> */}
      {openNotify ? (
        <Notify
          Close={() => onOpenModalNotify(false)}
          id={props.id}
          recevierId={Id}
          all={false}
          fun={onOpenModalNotify(false)}
        />
      ) : null}
      {/* </Drawer>
       </Modal>  */}
    </div>
  );
}

export default Customers;
