import React, { useState } from "react";
import ArticlesColumns from "./Config.js";
import { ArticlesData } from "../../fakeData";
import CustomPage from "../shared/CustomPage";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { UserImage } from "../Sidebar";
import { Checkbox } from "antd";

import styled from "styled-components";
const ArticleImage = styled.img`
  width: 55px;
  height: 50px;
  border-radius: 4px;
`;

function Aritcle() {
  const [open, setOpen] = useState(false);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  return (
    <div>
      <CustomPage
        pageTitle="Articles"
        columns={ArticlesColumns}
        data={ArticlesData}
        onOpenModal={onOpenModal}
      />
      <Modal
        closeOnOverlayClick={false}
        open={open}
        onClose={() => onOpenModal(false)}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        <h1>new article</h1>
      </Modal>
    </div>
  );
}

export default Aritcle;
