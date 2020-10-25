import React, { useState } from "react";
import { FilUploadedColumns } from "./Config";
import CustomPage from "../shared/CustomPage";
import "../../styles/globals.css";
import { FileUpoaderData } from "../../fakeData";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import NewFileUploader from "./NewFileUploader";
function FilUploader() {
  const [open, setOpen] = useState(false);
  const onOpenModal = (open) => {
    setOpen(open);
  };

  return (
    <div>
      {" "}
      <CustomPage
        pageTitle="File Uploader"
        columns={FilUploadedColumns}
        data={FileUpoaderData}
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
        <NewFileUploader />
      </Modal>
    </div>
  );
}

export default FilUploader;
