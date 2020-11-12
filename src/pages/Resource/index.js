// Resource page

import React, { useState, useEffect } from "react";
import { ResourcesColumns, ResourcesData } from "./Config";
import CustomPage from "../shared/CustomPage";
import "../../styles/globals.css";
// import { ResourcesData } from "../../fakeData";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import NewResources from "./NewResource";
import { LoadData } from "../../API";
import { monthNames } from "../shared/assets";

import { Mesg, FailedMesg } from "../../API/APIMessage";

function Resources() {
  const [open, setOpen] = useState(false);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  const [Loading, setLoading] = useState(false);
  const [resource, setresource] = useState([]);
  useEffect(() => {
    setLoading(true);
    LoadData(
      "resources",
      (err, data) => {
        setLoading(false);
        setresource(data.data.rows);
        // ResourcesData(data.data.rows, (item) => {

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
        <NewResources Close={() => onOpenModal(false)} />
      </Modal>
    </div>
  );
}

export default Resources;
