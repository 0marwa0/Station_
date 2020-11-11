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

        ResourcesData(data.data.rows, (item) => {
          setresource(item);
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
      <CustomPage
        pageTitle="Resources"
        columns={ResourcesColumns}
        data={resource}
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
