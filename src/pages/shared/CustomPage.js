import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillGridFill } from "react-icons/bs";
import { useState } from "react";
import { Col, Row, Table, Input } from "antd";
import React from "react";
import { BiImport, BiExport } from "react-icons/bi";
import { ReactComponent as ExportIcon } from "../../public/images/export.svg";
import { ReactComponent as ImportIcon } from "../../public/images/import.svg";

import { FiFilter } from "react-icons/fi";
import {
  CustomButton,
  EmptyText,
  LoadingText,
} from "../shared/SharedComponents";
import { AiOutlinePlus } from "react-icons/ai";
import SideBar from "../Sidebar";
import styled from "styled-components";
import { ReactComponent as Upload } from "../../public/images/solid cloud-upload-alt.svg";
import { ReactComponent as Notifiy } from "../../public/images/solid bell.svg";
import { ReactComponent as TableIcon } from "../../public/images/Table.svg";
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
  color: ${(props) => (props.active ? "var(--yellow)" : "var(--textGray)")};
`;
function CustomPage(props) {
  let pageTitle = props.pageTitle;
  const columns = props.columns;
  const data = props.data;
  const [next, setNext] = useState(true);
  const [prev, setprev] = useState(false);
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
  const [currentPage, setcurrentPage] = useState(1);
  const [pagePerOnce, setpagePerOnce] = useState(6);
  const [pageNumber, setpageNumber] = useState(0);
  const prevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  const totalPge = Math.ceil(props.data.length / pagePerOnce);

  const nextPage = () => {
    if (currentPage != totalPge) {
      setcurrentPage(currentPage + 1);
    }
  };
  const indexOfLastPage = currentPage * pagePerOnce;
  const indexOfFirstPage = indexOfLastPage - pagePerOnce;
  const Data = props.data.slice(indexOfFirstPage, indexOfLastPage);
  let pageTitleName;
  if (pageTitle === "Booking") {
    pageTitleName = props.pageTitle;
  } else {
    pageTitleName = props.pageTitle.substring(0, props.pageTitle.length - 1);
  }
  console.log(pageTitleName, "show page name");
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
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  <svg
                    cursor="pointer"
                    onClick={showTableItem}
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.5"
                    height="22.5"
                    viewBox="0 0 22.5 22.5"
                  >
                    <g
                      id="Group_8468"
                      data-name="Group 8468"
                      transform="translate(0.431 1.074)"
                    >
                      <rect
                        id="Rectangle_6614"
                        data-name="Rectangle 6614"
                        width="21"
                        height="8"
                        rx="2"
                        transform="translate(0.319 -0.324)"
                        fill={showTable ? "var(--yellow)" : "white"}
                        stroke={
                          showTable ? "var(--yellow)" : "var(--lighterGray)"
                        }
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                      <rect
                        id="Rectangle_6615"
                        data-name="Rectangle 6615"
                        width="21"
                        height="8"
                        rx="2"
                        transform="translate(0.319 12.676)"
                        fill={showTable ? "var(--yellow)" : "white"}
                        stroke={
                          showTable ? "var(--yellow)" : "var(--lighterGray)"
                        }
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                    </g>
                  </svg>

                  <svg
                    onClick={showListItem}
                    cursor="pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32.011"
                    height="32.011"
                    viewBox="0 0 32.011 32.011"
                  >
                    <g
                      id="Group_8458"
                      data-name="Group 8458"
                      transform="translate(32.011 32.011) rotate(180)"
                    >
                      <path
                        id="Path_2839"
                        data-name="Path 2839"
                        d="M0,0H32.011V32.011H0Z"
                        fill="none"
                      />
                      <g
                        id="Group_8459"
                        data-name="Group 8459"
                        transform="translate(5.335 5.335)"
                      >
                        <rect
                          id="Rectangle_6614"
                          data-name="Rectangle 6614"
                          width="8"
                          height="8"
                          rx="2"
                          transform="translate(0.665 -0.324)"
                          fill={showList ? "var(--yellow)" : "white"}
                          stroke={
                            showList ? "var(--yellow)" : "var(--lighterGray)"
                          }
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <rect
                          id="Rectangle_6618"
                          data-name="Rectangle 6618"
                          width="8"
                          height="8"
                          rx="2"
                          transform="translate(0.665 12.676)"
                          fill={showList ? "var(--yellow)" : "white"}
                          stroke={
                            showList ? "var(--yellow)" : "var(--lighterGray)"
                          }
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <rect
                          id="Rectangle_6616"
                          data-name="Rectangle 6616"
                          width="8"
                          height="8"
                          rx="2"
                          transform="translate(13.665 -0.324)"
                          fill={showList ? "var(--yellow)" : "white"}
                          stroke={
                            showList ? "var(--yellow)" : "var(--lighterGray)"
                          }
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <rect
                          id="Rectangle_6617"
                          data-name="Rectangle 6617"
                          width="8"
                          height="8"
                          rx="2"
                          transform="translate(13.665 12.676)"
                          fill={showList ? "var(--yellow)" : "white"}
                          stroke={
                            showList ? "var(--yellow)" : "var(--lighterGray)"
                          }
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                  </svg>
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
                  {/* <BiImport /> */}
                  <ImportIcon />
                </CustomButton>
              )}
              <CustomButton lable="Export">
                {/* <BiExport /> */}
                <ExportIcon />
              </CustomButton>
              {pageTitleName == "Customer" ? (
                <CustomButton
                  Main
                  lable={`Notify Users`}
                  pageTitle={pageTitle}
                  onOpen={() => props.onOpenModal(true)}
                >
                  <Notifiy />
                </CustomButton>
              ) : pageTitleName === "Resource" ||
                pageTitleName === "File Uploade" ? (
                <CustomButton
                  Main
                  lable={`Upload`}
                  pageTitle={pageTitle}
                  onOpen={() => props.onOpenModal(true)}
                >
                  <Upload />
                </CustomButton>
              ) : pageTitleName === "Article" ||
                pageTitleName === "Event" ? null : (
                <CustomButton
                  Main
                  lable={`New ${pageTitleName}`}
                  pageTitle={pageTitle}
                  onOpen={() => props.onOpenModal(true)}
                >
                  <AiOutlinePlus />
                </CustomButton>
              )}
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
                  dataSource={Data}
                  locale={{
                    emptyText: EmptyText(props.Loading, props.Item),
                  }}
                />
                <Pagination>
                  <PageText>
                    View search of {Data.length} from {props.data.length} search
                    we got .
                  </PageText>
                  <PageNmber>
                    <IconCss active={currentPage > 1 ? true : false}>
                      <LeftOutlined
                        onClick={prevPage}
                        style={{
                          cursor: currentPage > 1 ? "pointer" : "not-allowed",
                        }}
                      />
                    </IconCss>
                    <p style={{ marginTop: "12px" }}>
                      {currentPage}/ {totalPge}
                    </p>
                    <IconCss active={currentPage != totalPge ? true : false}>
                      <RightOutlined
                        onClick={nextPage}
                        style={{
                          cursor:
                            currentPage != totalPge ? "pointer" : "not-allowed",
                        }}
                      />
                    </IconCss>
                  </PageNmber>
                </Pagination>
              </div>
            ) : showList ? (
              <ListItem data={props.data} />
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
