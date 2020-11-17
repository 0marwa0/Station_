// Event page
import React, { useState, useEffect } from "react";
import { EventsColumns, EventsData } from "./Config";
// import { EventsData } from "../../fakeData";
import CustomPage from "../shared/CustomPage";
import "react-responsive-modal/styles.css";
import { Mesg, FailedMesg } from "../../API/APIMessage";
import { LoadData } from "../../API";
import { monthNames } from "../shared/assets";
import { Modal } from "react-responsive-modal";
import { useHistory } from "react-router-dom";
function Events(props) {
  const [open, setOpen] = useState(false);

  const onOpenModal = (open) => {
    setOpen(open);
  };
  const [Loading, setLoading] = useState(false);
  const [events, setevents] = useState([]);
  const loadEvent = () => {
    setLoading(true);
    LoadData(
      "events",
      (err, data) => {
        setLoading(false);
        setevents(data.data.rows);

        // EventsData(data.data.rows, (event) => {

        // });

        if (err) {
          Mesg(err);
        }
      },
      (err) => {
        setLoading(false);
        FailedMesg(err, "Something worng happend !");
        // console.log(err, "failed");
      }
    );
  };
  useEffect(() => {
    if (localStorage.getItem("station_token")) {
      loadEvent();
    } else {
      props.history.push("/login");
    }
  }, []);
  let Events = [];
  events.map((item) => {
    // console.log(item.approvedBy, "event admin");

    Events.push({
      Organizer: item.organizer,
      Date:
        item.createdAt.slice(0, 2) +
        " " +
        monthNames[
          item.date.split("-")[1] === 0
            ? item.date.split("-")[1].slice(1) - 1
            : item.date.split("-")[1] - 1
        ] +
        " " +
        item.date.split("-")[0],
      // Time: "10:0 AM -4:00 PM",
      Space: [`${item.space.title}`],
      SoldTickets: item.ticketLeft,
      Approvedby: props.admins
        .filter((i) => i.id === item.approvedBy)
        .map((i) => i.username)
        .toString(),
    });
  });
  return (
    <div>
      <CustomPage
        pageTitle="events"
        columns={EventsColumns}
        data={Events}
        Item="event"
        Loading={Loading}
        onOpenModal={onOpenModal}
      />
    </div>
  );
}

export default Events;
