// Customer page
import React, { useState, useEffect } from "react";
import CustomPage from "../shared/CustomPage";
import { CustomersColumns, UsersData } from "./Config";
// import { CustomersData } from "../../fakeData";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Newcustomer from "./NewCustomer";
import { Mesg, FailedMesg } from "../../API/APIMessage";
import { LoadData } from "../../API";
import Progress from "react-progress-2";
function Customers(props) {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [users, setusers] = useState([]);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  const loadCustomers = () => {
    setLoading(true);
    // Progress.show();
    LoadData(
      "users",
      (err, data) => {
        setLoading(false);
        // Progress.hide();
        UsersData(data.data.rows, (users) => {
          setusers(users);
        });

        if (err) {
          Mesg(err);
        }
      },
      (err) => {
        setLoading(false);
        // Progress.hide();
        FailedMesg(err, "Something worng happend !");
        console.log(err, "failed");
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

  return (
    <div>
      {/* <Progress.Component thumbStyle={{ background: "var(--yellow)" }} /> */}

      <CustomPage
        pageTitle="customers"
        columns={CustomersColumns}
        data={users}
        onOpenModal={onOpenModal}
        Loading={Loading}
        Item="customer"
      />
      <Modal
        closeOnOverlayClick={false}
        open={open}
        onClose={() => onOpenModal(false)}
        center
        showCloseIcon={false}
        classNames={{
          modal: "customModal",
        }}
      >
        <Newcustomer Close={() => onOpenModal(false)} id={props.id} />
      </Modal>
    </div>
  );
}

export default Customers;
