import React, { useState } from "react";
import { InputLable, ModleFooter, ModleHeader } from "../../shared/SharedStyle";
import { CustomModleButton } from "../../shared/SharedComponents";
import styled from "styled-components";
import UploadImage from "../../shared/UploadImage";
const PageWrapper = styled.div`
  width: 600px;
  padding: 40px;
`;
function Index() {
  const [imgSrc, setimgSrc] = useState("../../../public/images/default.png");
  const [Active, setActive] = useState(false);
  const [Image, setImage] = useState("../../public/images/user2.png");
  const [isActive, setIsActive] = useState(false);
  const [allowToChange, setallowToChange] = useState(false);
  const handleImageChange = (event, key) => {
    let imgSrc = URL.createObjectURL(event.target.files[0]);
    setImage(imgSrc);
    setallowToChange(true);
  };
  const removeImage = () => {
    setActive(false);
    setImage("../../public/images/default.png");
    setallowToChange(false);
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };
  const dragLeave = (e) => {
    e.preventDefault();
    setActive(false);
  };
  const dragOver = (e) => {
    setActive(true);
    e.preventDefault();
  };
  const fileDrop = (e) => {
    e.preventDefault();
    let imgSrc = URL.createObjectURL(e.dataTransfer.files[0]);

    setImage(imgSrc);
    setallowToChange(true);
  };
  return (
    <div>
      <ModleHeader>Upload New Media</ModleHeader>
      <PageWrapper>
        {/* {" "}
        <UploadImage
          Active={Active}
          isActive={isActive}
          Image={Image}
          dragEnter={dragEnter}
          dragLeave={dragLeave}
          dragOver={dragOver}
          fileDrop={fileDrop}
          removeImage={removeImage}
          handleImageChange={handleImageChange}
          allowToChange={allowToChange}
        /> */}
      </PageWrapper>
      <ModleFooter>
        <CustomModleButton>cancel</CustomModleButton>
        <CustomModleButton Main>Upload</CustomModleButton>
      </ModleFooter>
    </div>
  );
}

export default Index;
