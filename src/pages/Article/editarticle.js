import React, { useState, useEffect } from "react";
import { editData } from "../../API";
import { useParams } from "react-router-dom";

import Newarticle from "./newarticle";
import { LoadData, addData, addFile } from "../../API";
import { SuccessMesg, FailedMesg, Mesg } from "../../API/APIMessage";

function Index() {
  return <Newarticle type="edit" />;
}

export default Index;
