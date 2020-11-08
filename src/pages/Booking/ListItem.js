// List item Page //

import React from "react";
import styled, { keyframes } from "styled-components";
import { ArticlesData } from "../../fakeData";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as EditICon } from "../../public/images/solid edit.svg";
import { ReactComponent as ItemIcon } from "../../public/images/itemIcon.svg";

import { ReactComponent as TrashICon } from "../../public/images/solid trash-alt.svg";
const ListItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const ItemActions = styled.span`
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

const ItemOverlay = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 13rem;
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.8)
  );

  -webkit-transition: background 1s ease-out;
  -moz-transition: background 1s ease-out;
  -o-transition: background 1s ease-out;
  transition: background 1s ease-out;

  background-size: 1px 500px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const ItemHolder = styled.div`
  width: 290px;
  height: 30%;
  position: relative;
  cursor: pointer;
  &:hover ${ItemActions} {
    visibility: visible;
  }

  &:hover ${ItemOverlay} {
    background-position: 100% 100%;
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
  opacity: 1;
`;

const BottomText = styled.div`
  display: flex;
  opacity: 1;
  justify-content: space-between;
`;
const ListItem = () => {
  return (
    <ListItemWrapper>
      {ArticlesData.map((item, i) => {
        return (
          <ItemHolder>
            <Item src={require(`../../public/${item.image}`)} />

            <ItemOverlay>
              <ItemActions>
                <div style={{ marginTop: "9px" }}>
                  <ItemIcon />
                </div>
                <span style={{ display: "flex" }}>
                  <ListIcon>
                    <TrashICon />
                    <div>Delete</div>
                  </ListIcon>
                  <ListIcon>
                    <EditICon />
                    <div> Edit</div>
                  </ListIcon>
                </span>
              </ItemActions>
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
            </ItemOverlay>
          </ItemHolder>
        );
      })}
    </ListItemWrapper>
  );
};

export default ListItem;
