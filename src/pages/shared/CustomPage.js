import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillGridFill } from "react-icons/bs";
import { useState } from "react";
import { Col, Row, Table, Input } from "antd";
import React from "react";
import { BiImport, BiExport } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { CustomButton } from "../shared/SharedComponents";
import { AiOutlinePlus } from "react-icons/ai";
import SideBar from "../Sidebar";
import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import ListItem from "../Booking/ListItem";
export const CustomPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-left: 123px;
  margin-right: 35px;
`;
export const PageBtn = styled.div`
  display: flex;
  flex-cirection: row;
  justify-content: space-between;
  margin-bottom: 17px;

  width: 100%;
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  algin-items: cneter;
  justify-content: flex-end;
  margin-right: ${(props) => (props.space ? "10px" : "0")};
`;
export const PageTitle = styled.div`
  color: var(--black);
  font-size: 30px;
  font-weight: bold;
  padding: 10px 0;
`;
const Pagination = styled.div`
  display: flex;

  justify-content: space-between;
  padding: 0px 20px;
  color: var(--darkGray);
  border: 1px solid var(--lighterGray);
  border-radius: 0 0 10px 10px;
  border-top: none;
`;
const PageText = styled.div`
  color: var(--darkGray);
  margin-top: 12px;
`;
const PageNmber = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const IconCss = styled.span`
  color: var(--yellow);
`;

function CustomPage(props) {
  let pageTitle = props.pageTitle;
  const columns = props.columns;
  const data = props.data;
  const [showList, setShowList] = useState(false);
  const showListItem = () => {
    setShowList(true);
    hideTableItem();
  };
  const hideListItem = () => {
    setShowList(false);
  };
  const [showTable, setShowTable] = useState(true);
  const showTableItem = () => {
    setShowTable(true);
    hideListItem();
  };
  const hideTableItem = () => {
    setShowTable(false);
  };
  let pageTitleName;
  if (pageTitle === "Booking") {
    pageTitleName = props.pageTitle;
  } else {
    pageTitleName = props.pageTitle.substring(0, props.pageTitle.length - 1);
  }

  return (
    <CustomPageWrapper>
      <SideBar title={props.pageTitle} />
      <PageContent>
        <Row>
          <Col>
            <PageTitle>{props.pageTitle}</PageTitle>
          </Col>
        </Row>
        <Row>
          <PageBtn>
            <ButtonGroup space>
              {props.pageTitle === "Articles" ? (
                <div style={{ display: "flex", gap: "6px" }}>
                  {" "}
                  <GiHamburgerMenu
                    size={27}
                    color={showTable ? "var(--yellow)" : "var(--lighterGray)"}
                    cursor="pointer"
                    onClick={showTableItem}
                  />
                  <BsFillGridFill
                    size={25}
                    cursor="pointer"
                    color={showList ? "var(--yellow)" : "var(--lighterGray)"}
                    onClick={showListItem}
                  />
                </div>
              ) : (
                ""
              )}
              <Input
                style={{
                  borderRadius: "6px",
                  border: "1px solid var(--lighterGray)",
                  height: "30px",
                  color: "var(--lighterGray)",
                  width: "220px",
                }}
                placeholder="Search"
              />
              {props.pageTitle === "Resources" ? (
                ""
              ) : props.pageTitle === "File Uploader" ? (
                ""
              ) : (
                <CustomButton lable="Filter" filter>
                  <FiFilter />
                </CustomButton>
              )}
            </ButtonGroup>
            <ButtonGroup>
              {props.pageTitle === "Resources" ? (
                ""
              ) : props.pageTitle === "File Uploader" ? (
                ""
              ) : (
                <CustomButton lable="Import">
                  <BiImport />
                </CustomButton>
              )}
              <CustomButton lable="Export">
                <BiExport />
              </CustomButton>
              <CustomButton
                Main
                lable={`New ${pageTitleName}`}
                pageTitle={pageTitle}
                onOpen={() => props.onOpenModal(true)}
              >
                <AiOutlinePlus />
              </CustomButton>
            </ButtonGroup>
          </PageBtn>
        </Row>

        <Row>
          <Col style={{ width: "100%" }}>
            {showTable ? (
              <div>
                <Table
                  columns={columns}
                  rowClassName="tableRow"
                  pagination={false}
                  dataSource={data}
                />
                <Pagination>
                  <PageText>
                    View search of 12 from 1,232 search we got .
                  </PageText>
                  <PageNmber>
                    <LeftOutlined />
                    <p style={{ marginTop: "12px" }}> 1/ 12</p>
                    <IconCss>
                      <RightOutlined />
                    </IconCss>
                  </PageNmber>
                </Pagination>
              </div>
            ) : showList ? (
              <ListItem />
            ) : (
              ""
            )}
          </Col>
        </Row>
      </PageContent>
    </CustomPageWrapper>
  );
}

export default CustomPage;
