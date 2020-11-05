import React, { useState } from "react";
import { EventsColumns } from "./Config";
import { EventsData } from "../../fakeData";
import CustomPage from "../shared/CustomPage";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useHistory } from "react-router-dom";
function Events() {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const onOpenModal = (open) => {
    setOpen(open);
  };
  return (
    <div>
      <CustomPage
        pageTitle="Events"
        columns={EventsColumns}
        data={EventsData}
        onOpenModal={onOpenModal}
      />

      {/* <Modal
        closeOnOverlayClick={false}
        open={open}
        onClose={() => onOpenModal(false)}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        <div> new event</div>
      </Modal> */}
    </div>
  );
}

export default Events;
