import React from "react";
import styled from "styled-components";
import { ArticlesData } from "../../fakeData";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
const ListItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
`;
const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: white;
  font-size: 9px;
`;
const ListIcon = styled.div`
  border: 1px solid var(--darkGray);
  align-items: center;
  padding: 3px 5px 0 5px;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  margin-right: 13px;
  margin-top: 9px;
  color: white;
`;

const ListBottom = styled.div`
  display: ;
  flex-direction: column;
 padding 0 20px;
 margin-top:30%;


`;

const BottomText = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ListItem = () => {
  //   const [showActions, setShowActions] = useState(false);
  //   const show = () => {
  //     setShowActions(true);
  //   };
  return (
    <ListItemWrapper>
      {ArticlesData.map((item, i) => {
        return (
          <div>
            <ImgHolder>
              <Item src={require(`../../public/${item.image}`)} />

              <Overlay>
                <Actions>
                  <ListIcon>
                    <FiEdit size={16} />
                  </ListIcon>
                  <span style={{ display: "flex" }}>
                    <ListIcon>
                      <BsTrashFill /> <span>Delete</span>
                    </ListIcon>
                    <ListIcon>
                      <FiEdit />
                      <span> Edit</span>
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
