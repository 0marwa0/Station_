import React, { useState } from "react";
import { ResourcesColumns } from "./Config";
import CustomPage from "../shared/CustomPage";
import "../../styles/globals.css";
import { ResourcesData } from "../../fakeData";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import NewResources from "./NewResource";
function Resources() {
  const [open, setOpen] = useState(false);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  return (
    <div>
      <CustomPage
        pageTitle="Resources"
        columns={ResourcesColumns}
        data={ResourcesData}
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
        <NewResources />
      </Modal>
    </div>
  );
}

export default Resources;
