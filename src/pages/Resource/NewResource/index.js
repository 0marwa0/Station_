import React from "react";
import { InputLable, ModleFooter, ModleHeader } from "../../shared/SharedStyle";
import { CustomModleButton } from "../../shared/SharedComponents";
import styled from "styled-components";

import { Input } from "antd";
const { TextArea } = Input;
const PageWrapper = styled.div`
  width: 600px;
  padding: 40px;
`;
function Index() {
  return (
    <div>
      <ModleHeader>Upload New Resources</ModleHeader>
      <PageWrapper>
        <InputLable>
          Title
          <Input placeholder="write file title" />
        </InputLable>
        <InputLable>
          Description
          <TextArea placeholder="write file Description ..." />
        </InputLable>{" "}
      </PageWrapper>{" "}
      <ModleFooter>
        <CustomModleButton>Cansle</CustomModleButton>
        <CustomModleButton Main>Upload</CustomModleButton>
      </ModleFooter>
    </div>
  );
}

export default Index;
