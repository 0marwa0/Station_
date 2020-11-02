import React, { useState } from "react";
import CustomPage from "../shared/CustomPage";
import { CustomersColumns } from "./Config";
import { CustomersData } from "../../fakeData";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Newcustomer from "./NewCustomer";

function Customers() {
  const [open, setOpen] = useState(false);
  const onOpenModal = (open) => {
    setOpen(open);
  };
  return (
    <div>
      <CustomPage
        pageTitle="Customers"
        columns={CustomersColumns}
        data={CustomersData}
        onOpenModal={onOpenModal}
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
        <Newcustomer Close={() => onOpenModal(false)} />
      </Modal>
    </div>
  );
}

export default Customers;
