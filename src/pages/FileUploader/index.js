// File uploader page

import React, { useState, useEffect } from "react";
import { FilUploadedColumns, FilesData } from "./Config";
import CustomPage from "../shared/CustomPage";
import "../../styles/globals.css";
import { FileUpoaderData } from "../../fakeData";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import NewFileUploader from "./NewFileUploader";
import { LoadData } from "../../API";

import { Mesg, FailedMesg } from "../../API/APIMessage";
function FilUploader() {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [files, setfiles] = useState([]);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  useEffect(() => {
    setLoading(true);
    LoadData(
      "files",
      (err, data) => {
        setLoading(false);

        FilesData(data.data.rows, (item) => {
          setfiles(item);
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
      {" "}
      <CustomPage
        pageTitle="File Uploader"
        columns={FilUploadedColumns}
        data={files}
        onOpenModal={onOpenModal}
        Loading={Loading}
        Item="file"
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
        <NewFileUploader Close={() => onOpenModal(false)} />
      </Modal>
    </div>
  );
}

export default FilUploader;
