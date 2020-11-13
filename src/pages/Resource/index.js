// Resource page

import React, { useState, useEffect } from "react";
import { ResourcesColumns, ResourcesData } from "./Config";
import CustomPage from "../shared/CustomPage";
import "../../styles/globals.css";

// import { ResourcesData } from "../../fakeData";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import NewResources from "./NewResource";
import { LoadData, addFile } from "../../API";
import { monthNames } from "../shared/assets";

import { Mesg, FailedMesg, SuccessMesg } from "../../API/APIMessage";

function Resources() {
  const [open, setOpen] = useState(false);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  const [Loading, setLoading] = useState(false);
  const [resource, setresource] = useState([]);

  const getResources = () => {
    setLoading(true);
    LoadData(
      "resources",
      (err, data) => {
        setLoading(false);
        setresource(data.data.rows);

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
  const [title, settitle] = useState("");
  const [dec, setdec] = useState("");
  const [url, seturl] = useState("");
  const [image, setimage] = useState("");

  const handleInput = (e, key) => {
    let value = e.target.value;
    switch (key) {
      case "title":
        settitle(value);
        break;
      case "dec":
        setdec(value);
        break;
      case "url":
        seturl(value);
        break;
      case "image":
        setimage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    let data = JSON.stringify({
      name: title,
      description: dec,
      url: url,
      image: image,
    });

    // if (url != "" && title != "") {
    setLoading(true);
    console.log(data, "here what we send");
    addFile(
      "resource",
      data,
      (data) => {
        if (data.status) {
          SuccessMesg("Resource creating done !");
          onOpenModal(false);
          getResources();
          settitle("");
          setdec("");
          setimage("");
          seturl("");
        } else {
          Mesg(data.errMsg);
        }

        setLoading(false);
      },
      (err) => {
        onOpenModal(false);
        setLoading(false);
        settitle("");
        setdec("");
        setimage("");
        seturl("");

        FailedMesg(" Resuorces creating failed ", err);
      }
    );
  };

  useEffect(() => {
    getResources();
  }, []);
  let Resources = [];
  resource.map((item) => {
    Resources.push({
      Title: { url: item.url, name: item.name },

      Descriptions: item.descriptionAr,
      Type: ["PDF"],
      Size: "12.2mb",

      UploadedDate:
        item.createdAt.slice(0, 2) +
        " " +
        monthNames[
          item.createdAt.split("-")[1] === 0
            ? item.createdAt.split("-")[1].slice(1) - 1
            : item.createdAt.split("-")[1] - 1
        ] +
        " " +
        item.createdAt.split("-")[0],
      image: "",
    });
  });
  return (
    <div>
      <CustomPage
        pageTitle="Resources"
        columns={ResourcesColumns}
        data={Resources}
        onOpenModal={onOpenModal}
        Item="resource"
        Loading={Loading}
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
        <NewResources
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          Close={() => onOpenModal(false)}
        />
      </Modal>
    </div>
  );
}

export default Resources;
