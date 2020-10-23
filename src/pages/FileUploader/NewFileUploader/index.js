import React from "react";
import { InputLable, ModleFooter, ModleHeader } from "../../shared/SharedStyle";
import { CustomModleButton } from "../../shared/SharedComponents";
import styled from "styled-components";

const PageWrapper = styled.div`
  width: 600px;
  padding: 40px;
`;
function Index() {
  return (
    <div>
      <ModleHeader>Upload New Media</ModleHeader>
      <PageWrapper>upload file</PageWrapper>{" "}
      <ModleFooter>
        <CustomModleButton>cancel</CustomModleButton>
        <CustomModleButton Main>Upload</CustomModleButton>
      </ModleFooter>
    </div>
  );
}

export default Index;
