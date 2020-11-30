// File uploader page

import React, { useState, useEffect } from "react";
import { FilUploadedColumns, FilesData } from "./Config";
import CustomPage from "../shared/CustomPage";
import "../../styles/globals.css";
import { FileUpoaderData } from "../../fakeData";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import NewFileUploader from "./NewFileUploader";

import { LoadData, addFile, removeItem } from "../../API";
import { monthNames } from "../shared/assets";
import { Mesg, FailedMesg, SuccessMesg } from "../../API/APIMessage";
function FilUploader(props) {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [files, setfiles] = useState([]);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  const [file, setfile] = useState("");
  const [copied, setcopy] = useState(false);
  const [copiedUlr, setcopiedUlr] = useState("");
  const handleCopy = (url, value) => {
    setcopy(value);
    setcopiedUlr(url);
    console.log(url, "from handle");
  };
  const handleInput = (value) => {
    setfile(value);
  };
  const getFiles = () => {
    LoadData(
      "files",
      (err, data) => {
        setLoading(false);
        setfiles(data.data.rows);
        // FilesData(data.data.rows, (item) => {

        // });

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
  const onDelete = (id) => {
    setLoading(true);
    removeItem(
      "file",
      id,
      (err, data) => {
        if (err) {
          setLoading(false);
          Mesg(err);
        } else {
          setLoading(false);
          getFiles();
          SuccessMesg("Delete File Done !");
        }
      },
      (err) => {
        setLoading(false);
        FailedMesg("Delete File Faild!", err);
      }
    );
    // console.log(id, "id to deleted");
  };
  let Files = [];
  files.map((file) => {
    Files.push({
      id: {
        url: file.link,
        id: file.id,
        delete: () => onDelete(file.id),
        copy: handleCopy,
        copied: copied,
        copiedUlr: copiedUlr,
      },
      FileTitle: file.name,
      Type: [`${/[.]/.exec(file.name) ? /[^.]+$/.exec(file.name) : undefined}`],
      Size: "",
      UploadedDate:
        file.createdAt.slice(0, 2) +
        " " +
        monthNames[
          file.createdAt.split("-")[1] === 0
            ? file.createdAt.split("-")[1].slice(1) - 1
            : file.createdAt.split("-")[1] - 1
        ] +
        " " +
        file.createdAt.split("-")[0],
      image: "",
      // Status: true ? ["Enabled"] : ["Disabled"],
    });
  });
  return (
    <div>
      {" "}
      <CustomPage
        pageTitle="file Uploader"
        columns={FilUploadedColumns}
        data={Files}
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
        }}>
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
