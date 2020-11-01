import React from "react";
import styled from "styled-components";
import { ArticlesData } from "../../fakeData";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const ListItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
const Actions = styled.span`
  display: flex;
  padding: 5px 0;
  padding-left: 13px;
  justify-content: space-between;
  flex-direction: row;
  font-size: 13px;
  visibility: hidden;
`;
const Item = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  border-radius: 5px;
`;
const Overlay = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 13rem;
  position: absolute;
  top: 0;
  left: 0;
  reight: 0;
  bottom: 0;
  background-image: linear-gradient(
    transparent,
    rgba(2, 2, 2, 0.3),
    rgba(2, 2, 2, 0.8)
  );
`;
const ImgHolder = styled.div`
  width: 290px;
  height: 30%;
  position: relative;
  &:hover ${Actions} {
    visibility: visible;
  }
  &:hover ${Overlay} {
    background-image: linear-gradient(
      rgba(2, 2, 2, 0.5),
      rgba(2, 2, 2, 0.5),
      rgba(2, 2, 2, 0.5)
    );
  }
`;

const ListImg = styled.img`
  with: 20px;
  height: 20px;
  border-radius: 50%;
`;
const Title = styled.div`
  color: white;
  font-size: 14px;
  font-weight: bold;
  width: 180px;
  margin-bottom: 7px;
  line-height: 1.3em;
`;
const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: white;
  font-size: 9px;
`;
const ListIcon = styled.div`
  border: 1px solid white;
  gap: 5px;
  display: flex;
  height: 26px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-right: 13px;
  margin-top: 9px;
  padding: 1px 10px;
  color: white;
`;

const ListBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin-top: 24%;
`;

const BottomText = styled.div`
  display: flex;

  justify-content: space-between;
`;
const ListItem = () => {
  return (
    <ListItemWrapper>
      {ArticlesData.map((item, i) => {
        return (
          <div>
            <ImgHolder>
              <Item src={require(`../../public/${item.image}`)} />

              <Overlay>
                <Actions>
                  <div style={{ marginTop: "9px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                    >
                      <g
                        id="Group_37679"
                        data-name="Group 37679"
                        transform="translate(-24.918 -0.072)"
                      >
                        <g
                          id="Rectangle_6525"
                          data-name="Rectangle 6525"
                          transform="translate(24.918 0.072)"
                          fill="none"
                          stroke="#ebebeb"
                          stroke-width="1"
                        >
                          <rect width="26" height="26" rx="6" stroke="none" />
                          <rect
                            x="0.5"
                            y="0.5"
                            width="25"
                            height="25"
                            rx="5.5"
                            fill="none"
                          />
                        </g>
                        <path
                          id="solid_external-link-alt"
                          data-name="solid external-link-alt"
                          d="M11.383.474V3a.475.475,0,0,1-.81.335l-.706-.706L5.055,7.446a.474.474,0,0,1-.671,0L3.937,7a.474.474,0,0,1,0-.671L8.75,1.515,8.044.81A.475.475,0,0,1,8.379,0h2.529A.474.474,0,0,1,11.383.474ZM8.044,5.351l-.316.316A.474.474,0,0,0,7.589,6v2.85H1.265V2.529H6.482a.474.474,0,0,0,.335-.139l.316-.316a.474.474,0,0,0-.335-.81H.949A.949.949,0,0,0,0,2.213V9.169a.949.949,0,0,0,.949.949H7.9a.949.949,0,0,0,.949-.949V5.687A.474.474,0,0,0,8.044,5.351Z"
                          transform="translate(32.97 7.972)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </div>
                  <span style={{ display: "flex" }}>
                    <ListIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8.697"
                        height="9.94"
                        viewBox="0 0 8.697 9.94"
                      >
                        <path
                          id="solid_trash-alt"
                          data-name="solid trash-alt"
                          d="M.621,9.008a.932.932,0,0,0,.932.932H7.144a.932.932,0,0,0,.932-.932V2.485H.621ZM5.9,4.038a.311.311,0,1,1,.621,0V8.386a.311.311,0,0,1-.621,0Zm-1.864,0a.311.311,0,1,1,.621,0V8.386a.311.311,0,0,1-.621,0Zm-1.864,0a.311.311,0,1,1,.621,0V8.386a.311.311,0,0,1-.621,0ZM8.387.621H6.057L5.874.258A.466.466,0,0,0,5.457,0H3.238a.46.46,0,0,0-.415.258L2.64.621H.311A.311.311,0,0,0,0,.932v.621a.311.311,0,0,0,.311.311H8.387A.311.311,0,0,0,8.7,1.553V.932A.311.311,0,0,0,8.387.621Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </svg>

                      <div>Delete</div>
                    </ListIcon>
                    <ListIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10.783"
                        height="9.583"
                        viewBox="0 0 10.783 9.583"
                      >
                        <path
                          id="solid_edit"
                          data-name="solid edit"
                          d="M7.537,1.656,9.225,3.344a.183.183,0,0,1,0,.258L5.137,7.691,3.4,7.884a.364.364,0,0,1-.4-.4L3.19,5.744,7.279,1.656a.183.183,0,0,1,.258,0Zm3.033-.429L9.656.313a.732.732,0,0,0-1.033,0L7.96.976a.183.183,0,0,0,0,.258L9.649,2.923a.183.183,0,0,0,.258,0l.663-.663a.732.732,0,0,0,0-1.033ZM7.189,6.579V8.485H1.2V2.494H5.5a.23.23,0,0,0,.159-.066l.749-.749A.225.225,0,0,0,6.249,1.3H.9a.9.9,0,0,0-.9.9v6.59a.9.9,0,0,0,.9.9h6.59a.9.9,0,0,0,.9-.9V5.83A.225.225,0,0,0,8,5.671l-.749.749A.23.23,0,0,0,7.189,6.579Z"
                          transform="translate(0 -0.1)"
                          fill="#fff"
                        />
                      </svg>

                      <div> Edit</div>
                    </ListIcon>
                  </span>
                </Actions>
                <ListBottom>
                  <Title>{item.Title}</Title>
                  <BottomText>
                    <Date>
                      <FaCalendarAlt color="var(--yellow)" size={8} />
                      {item.CreatedDate}
                    </Date>
                    <ListImg src={require(`../../public/images/user2.png`)} />
                  </BottomText>
                </ListBottom>
              </Overlay>
            </ImgHolder>
          </div>
        );
      })}
    </ListItemWrapper>
  );
};

export default ListItem;
