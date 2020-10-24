import React from "react";
import {
  CustomPageWrapper,
  PageContent,
  PageTitle,
} from "../shared/SharedStyle";
import SideBar from "../Sidebar";
const Index = () => {
  return (
    <CustomPageWrapper>
      <SideBar />
      <PageContent>
        <Row>
          <Col>
            <PageTitle>hi</PageTitle>
          </Col>
        </Row>
      </PageContent>
    </CustomPageWrapper>
  );
};

export default Index;
