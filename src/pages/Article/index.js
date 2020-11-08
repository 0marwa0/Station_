// Aritcle page //

import React from "react";
import ArticlesColumns from "./Config.js";
import { ArticlesData } from "../../fakeData";
import CustomPage from "../shared/CustomPage";
import "react-responsive-modal/styles.css";

function Aritcle() {
  return (
    <div>
      <CustomPage
        pageTitle="Articles"
        columns={ArticlesColumns}
        data={ArticlesData}
      />
    </div>
  );
}

export default Aritcle;
