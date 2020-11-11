// Event page
import React, { useState, useEffect } from "react";
import { EventsColumns, EventsData } from "./Config";
// import { EventsData } from "../../fakeData";
import CustomPage from "../shared/CustomPage";
import "react-responsive-modal/styles.css";
import { Mesg, FailedMesg } from "../../API/APIMessage";
import { LoadData } from "../../API";

import { Modal } from "react-responsive-modal";
import { useHistory } from "react-router-dom";
function Events() {
  const [open, setOpen] = useState(false);

  const onOpenModal = (open) => {
    setOpen(open);
  };
  const [Loading, setLoading] = useState(false);
  const [events, setevents] = useState([]);

  useEffect(() => {
    setLoading(true);
    LoadData(
      "events",
      (err, data) => {
        setLoading(false);

        EventsData(data.data.rows, (event) => {
          setevents(event);
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
        pageTitle="Events"
        columns={EventsColumns}
        data={events}
        Item="event"
        Loading={Loading}
        onOpenModal={onOpenModal}
      />
    </div>
  );
}

export default Events;
