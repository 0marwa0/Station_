import Sider from "antd/lib/layout/Sider";
import React, { useState } from "react";
import CustomPage from "../shared/CustomPage";
import SideBar from "../Sidebar";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Checkbox, Table, Tooltip, Tag, Space, Button, Input } from "antd";
import { AdminsData } from "../../fakeData/index";
import { AdminsColumns } from "./Config";
import { Modal } from "react-responsive-modal";
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
