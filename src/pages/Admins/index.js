// Admin page //

import Sider from "antd/lib/layout/Sider";
import React, { useState } from "react";
import CustomPage from "../shared/CustomPage";

import { AdminsData } from "../../fakeData/index";
import { AdminsColumns } from "./Config";
// import { Modal } from "react-responsive-modal";
import NewAdmin from "./NewAmin";
function Admins() {
  const [open, setOpen] = useState(false);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  return (
    <div>
      <CustomPage
        pageTitle="Admins"
        columns={AdminsColumns}
        data={AdminsData}
        onOpenModal={onOpenModal}
      />
      {open ? <NewAdmin fun={onOpenModal} /> : null}
    </div>
  );
}

export default Admins;
