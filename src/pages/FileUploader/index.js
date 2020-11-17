// File uploader page

import React, { useState, useEffect } from "react";
import { FilUploadedColumns, FilesData } from "./Config";
import CustomPage from "../shared/CustomPage";
import "../../styles/globals.css";
import { FileUpoaderData } from "../../fakeData";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import NewFileUploader from "./NewFileUploader";
import { LoadData, addFile } from "../../API";

import { Mesg, FailedMesg, SuccessMesg } from "../../API/APIMessage";
function FilUploader(props) {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [files, setfiles] = useState([]);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  const [file, setfile] = useState("");
  const handleInput = (value) => {
    setfile(value);
  };
  const getFiles = () => {
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
  };
  useEffect(() => {
    if (localStorage.getItem("station_token")) {
      setLoading(true);
      getFiles();
    } else {
      props.history.push("/login");
    }
  }, []);
  const handleSubmit = () => {
    let data = new FormData();
    data.append("file", file);

    setLoading(true);
    addFile(
      "upload/file",
      data,
      (data) => {
        if (data.errMsg) {
          Mesg(data.errMsg);
        } else {
          SuccessMesg("File upload done !");
          onOpenModal(false);
          getFiles();
        }
        setfile("");
        setLoading(false);
      },
      (err) => {
        onOpenModal(false);
        setLoading(false);
        setfile("");

        FailedMesg(err.toString());
      }
    );
  };
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
        closeOnOverlayClick={true}
        open={open}
        onClose={() => onOpenModal(false)}
        center
        showCloseIcon={false}
        classNames={{
          modal: "customModal",
        }}
      >
        <NewFileUploader
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          Close={() => onOpenModal(false)}
        />
      </Modal>
    </div>
  );
}

export default FilUploader;
