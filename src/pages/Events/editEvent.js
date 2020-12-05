import React from "react";
import CreateEvent from "./CreateEvent";
function Index(props) {
  return <CreateEvent event={true} admins={props.admins} />;
}

export default Index;
