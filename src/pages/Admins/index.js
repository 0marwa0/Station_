// Admin page //

import Sider from "antd/lib/layout/Sider";
import React, { useState, useEffect } from "react";
import CustomPage from "../shared/CustomPage";
import { Mesg, FailedMesg } from "../../API/APIMessage";

// import { AdminsData } from "../../fakeData/index";
import { AdminsColumns, AdminsData } from "./Config";
// import { Modal } from "react-responsive-modal";

import NewAdmin from "./NewAmin";
import { LoadData } from "../../API";

function Admins() {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Admins, setAdmins] = useState([]);

  const onOpenModal = (open) => {
    setOpen(open);
  };
  useEffect(() => {
    setLoading(true);
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
  }, []);

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
      {open ? <NewAdmin fun={onOpenModal} /> : null}
    </div>
  );
}

export default Admins;
