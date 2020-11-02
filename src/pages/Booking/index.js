import React, { useState } from "react";
import CustomPage from "../shared/CustomPage";
import { BookingColumns } from "./Config";
import { BookingData } from "../../fakeData/index";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import NewBooking from "./NewBooking";

function Booking() {
  const [open, setOpen] = useState(false);
  const onOpenModal = (open) => {
    setOpen(open);
  };

  return (
    <div>
      <CustomPage
        pageTitle="Booking"
        columns={BookingColumns}
        // data={BookingData}

        onOpenModal={() => onOpenModal(true)}
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
        <NewBooking Close={() => onOpenModal(false)} />
      </Modal>
    </div>
  );
}

export default Booking;
