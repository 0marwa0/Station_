// Resource page

import React, { useState, useEffect } from "react";
import { ResourcesColumns, ResourcesData } from "./Config";
import CustomPage from "../shared/CustomPage";
import "../../styles/globals.css";

// import { ResourcesData } from "../../fakeData";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import NewResources from "./NewResource";
import { LoadData, addFile, removeItem } from "../../API";
import { monthNames } from "../shared/assets";

import { Mesg, FailedMesg, SuccessMesg } from "../../API/APIMessage";

function Resources(props) {
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
    let file = e;
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

      default:
        break;
    }
  };
  const handleFile = (file) => {
    setimage(file);
  };
  const handleSubmit = () => {
    console.log(image, "image ");
    // let form = new FormData();
    // form.append("name", title);
    // form.append("description", dec);
    // form.append("nameAr", title);
    // form.append("descriptionAr", dec);
    // form.append("url", "url");
    // form.append("image", image.toString());
    var raw = JSON.stringify({
      name: title,
      description: dec,
      url: image.name,
      image: image.file,

      nameAr: title,
      descriptionAr: dec,
    });

    // if (url != "" && title != "") {
    setLoading(true);
    addFile(
      "resource",
      raw,
      (data) => {
        // console.log(data, "whn file succes");
        if (data.errMsg) {
          Mesg(data.errMsg);
        } else {
          SuccessMesg("Resource creating done !");

          getResources();
        }
        settitle("");
        onOpenModal(false);
        setdec("");
        setimage("");
        seturl("");
        setLoading(false);
      },
      (err) => {
        onOpenModal(false);
        setLoading(false);
        settitle("");
        setdec("");
        setimage("");
        seturl("");
        console.log(err, "whn file fail");

        FailedMesg(" Resuorces creating failed ", err);
      }
    );
  };

  useEffect(() => {
    if (localStorage.getItem("station_token")) {
      getResources();
    } else {
      props.history.push("/login");
    }
  }, []);
  const onDelete = (id) => {
    setLoading(true);
    removeItem(
      "resource",
      id,
      (err, data) => {
        setLoading(false);

        if (err) {
          setLoading(false);
          Mesg(err);
        } else {
          setLoading(false);
          getResources();
          SuccessMesg("Delete File Done !");
        }
      },
      (err) => {
        setLoading(false);
        FailedMesg("Delete File Faild!", err);
      }
    );
    console.log(id, "id to deleted");
  };
  let Resources = [];
  resource.map((item) => {
    Resources.push({
      id: {
        url: item.url,
        id: item.id,
        delete: () => onDelete(item.id),
      },
      Title: item.name,

      Descriptions: item.description,
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
        pageTitle="resources"
        columns={ResourcesColumns}
        data={Resources}
        onOpenModal={onOpenModal}
        Item="resource"
        Loading={Loading}
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
        <NewResources
          handleFile={handleFile}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          Close={() => onOpenModal(false)}
        />
      </Modal>
    </div>
  );
}

export default Resources;
