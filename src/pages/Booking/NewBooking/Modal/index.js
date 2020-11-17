import React, { useState, useEffect } from "react";
import { Input, InputNumber, DatePicker } from "antd";
import { Mesg, FailedMesg } from "../../../../API/APIMessage";
import { BookItemLoading } from "../../../shared/Loading";
import { ReactComponent as DatePickerIcon } from "../../../../public/images/solid calendar-alt.svg";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { LoadData } from "../../../../API";

// import DatePicker from "react-datepicker";
import { ReactComponent as DropIcon } from "../../../../public/images/dropdown.svg";
import Slider from "react-slick";
import { FaTrashAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CustomInput, CustomInputArea } from "../../../shared/SharedStyle";
import { InputLable } from "../../../shared/SharedStyle";
const { TextArea } = Input;

const optionData = (
  <Menu>
    <Menu.Item key="1">200</Menu.Item>
    <Menu.Item key="2">100</Menu.Item>
    <Menu.Item key="3">50</Menu.Item>
  </Menu>
);

export const CardItem = styled.div`
  height: 120px;
  min-width: 200px;
  padding: 11px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  gap: 5px;
  border: 2px solid var(--lighterGray);
  &:hover {
    border: 2px solid var(--yellow);
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 600px;
  gap: 10px;
  cursor: grab;
`;
const SlidHolder = styled.div`
  display: flex;
  height: 180px;
  flex-direction: column;
`;
const PageWrapper = styled.div`
  width: 580px;

  margin-bottom: 18px;
  padding: 0px 40px;
`;
const Page1Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 14px;
`;
const BookedItem = styled.div`
  display: grid;
  padding: 5px 0;
  grid-template-columns: 0.5fr 0.3fr 0.3fr 0.2fr;
  border-bottom: ${(props) =>
    props.head ? "1px solid var(--lighterGray)" : "none"};
  grid-template-columns: 0.6fr 0.3fr 0.3fr 0.1fr;
`;
const SecondPageInput = styled.div`
  display: grid;

  align-itmes: center;

  gap: 15px;
  grid-template-columns: 1.2fr 0.1fr 0.1fr auto;
`;
export const GrayText = styled.div`
  color: var(--textGray);
`;
const Size = styled.span`
  display: flex;
  justify-content: space-between;
`;
const GrayBoldText = styled.div`
  color: var(--textGray);
`;
const Space = styled.div`
  height: 5px;
`;
export function FirstPage() {
  return (
    <div className="modleWrapper">
      <Page1Item>
        <InputLable>
          Booking Title
          <CustomInput placeholder="write booking title" />
        </InputLable>

        <InputLable>
          Space
          <Dropdown overlay={optionData}>
            <Button
              style={{
                borderRadius: "7px",
                display: "flex",
                alignItems: "center",
                color: "var(--textGray)",
                justifyContent: "space-between",
              }}
            >
              Choose space
              <DropIcon />
            </Button>
          </Dropdown>
        </InputLable>
      </Page1Item>
      <Page1Item>
        <InputLable>
          <Space />
          Organizer Name
          <CustomInput placeholder="write organizer name" />
        </InputLable>{" "}
        <InputLable>
          <Space />{" "}
          <Size>
            No. of People
            <span style={{ color: "var(--textGray)" }}>Max: 30</span>{" "}
          </Size>
          <InputNumber
            placeholder="00"
            style={{ borderRadius: "7px", width: "100%" }}
          />
        </InputLable>
      </Page1Item>
      <InputLable>
        <Space />
        Comment
        <CustomInputArea
          rows={4}
          placeholder="write something about booking ..."
        />
      </InputLable>
    </div>
  );
}

export function SecondPage() {
  const [datevalue, setdatevalue] = useState("");
  return (
    <div className="modleWrapper">
      <SecondPageInput>
        <InputLable>
          Choose Date
          <div style={{ display: "flex", position: "relative" }}>
            <DatePicker
              value={datevalue}
              style={{ width: "100%" }}
              onChange={(e) => setdatevalue(e)}
            />
            <span className="datePickerIcon">
              <DatePickerIcon />
            </span>
          </div>
        </InputLable>
        <InputLable>
          Start
          <Dropdown overlay={optionData}>
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "var(--textGray)",
                justifyContent: "space-between",
              }}
            >
              00:00Am
              <DropIcon />
            </Button>
          </Dropdown>
        </InputLable>
        <InputLable>
          End
          <Dropdown overlay={optionData}>
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "var(--textGray)",
                justifyContent: "space-between",
              }}
            >
              00:00Am <DropIcon />
            </Button>
          </Dropdown>
        </InputLable>
        <InputLable>
          <div style={{ color: "transparent" }}>*</div>
          <Button
            style={{
              borderRadius: "7px",

              backgroundColor: "var(--lightGray)",
            }}
          >
            <GrayBoldText> +</GrayBoldText>
          </Button>
        </InputLable>
      </SecondPageInput>
      <div style={{ marginTop: "30px", marginBottom: "70px" }}>
        <BookedItem head>
          <div>Dates</div>
          <div>Start</div>
          <div>End</div>
        </BookedItem>
        <Space />
        <BookedItem>
          <div>13 Oct 2020</div>
          <GrayBoldText>09:00 Am</GrayBoldText>
          <GrayBoldText>06:00 Am</GrayBoldText>
          <div>
            <FaTrashAlt color="var(--lighterGray)" style={{ float: "right" }} />
          </div>
        </BookedItem>

        <BookedItem>
          <div>15 Oct 2020</div>
          <GrayBoldText>09:00 Am</GrayBoldText>
          <GrayBoldText>06:00 Am</GrayBoldText>
          <div>
            <FaTrashAlt color="var(--lighterGray)" style={{ float: "right" }} />
          </div>
        </BookedItem>
      </div>
    </div>
  );
}
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 320,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false },
    },
  ],
};

export function ThirdPage() {
  const [Loading, setLoading] = useState(false);
  const [coffees, setCoffees] = useState([]);
  const [lunches, setLunches] = useState([]);
  const [Designs, setDesigns] = useState([]);

  const loadDesigns = () => {
    setLoading(true);
    LoadData(
      "space/designs",
      (err, data) => {
        setLoading(false);
        setDesigns(data.data);
        console.log(data.data, "design");
        if (err) {
          Mesg(err);
        }
      },
      (err) => {
        setLoading(false);
        FailedMesg(err, "Something worng happend !");
      }
    );
  };
  const loadLunches = () => {
    setLoading(true);
    LoadData(
      "lunches",
      (err, data) => {
        setLoading(false);
        setLunches(data.data);
        console.log(data, "our lunches");
        if (err) {
          Mesg(err);
        }
      },
      (err) => {
        setLoading(false);
        FailedMesg(err, "Something worng happend !");
      }
    );
  };
  const loadCoffees = () => {
    setLoading(true);
    LoadData(
      "/coffees",
      (err, data) => {
        setLoading(false);
        setCoffees(data.data);
        if (err) {
          Mesg(err);
        }
      },
      (err) => {
        setLoading(false);
        FailedMesg(err, "Something worng happend !");
      }
    );
  };
  useEffect(() => {
    loadCoffees();
    loadLunches();
    loadDesigns();
  }, []);
  return (
    <div className="modleWrapper">
      <SlidHolder>
        <span> Coffe Brake Pack</span>
        <Slider {...settings}>
          <div>
            <CardWrapper>
              {Loading ? (
                <BookItemLoading />
              ) : (
                coffees.map((item, i) => {
                  return (
                    <CardItem key={i}>
                      <div>{item.price}</div>
                      <GrayText>
                        <div style={{ textAlign: "right" }}>
                          {item.description}
                        </div>
                      </GrayText>
                    </CardItem>
                  );
                })
              )}
            </CardWrapper>
          </div>
          {/* below divs placed to show empty space at the end of item */}
          <div></div>
          <div></div>
          <div></div>
        </Slider>
      </SlidHolder>
      <Space />
      <Space />
      <SlidHolder>
        Lunches
        <Slider {...settings}>
          <div>
            <CardWrapper>
              <CardWrapper>
                {lunches.map((item, i) => {
                  return (
                    <CardItem key={i}>
                      <div>{item.price} IQD</div>
                      <GrayText>
                        <div style={{ textAlign: "right" }}>
                          {item.description}
                        </div>
                      </GrayText>
                    </CardItem>
                  );
                })}
              </CardWrapper>
            </CardWrapper>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Slider>
      </SlidHolder>
      <Space />
      <Space />
      <SlidHolder>
        Hall Design
        <Slider {...settings}>
          <div>
            <CardWrapper>
              {Designs.map((item, i) => {
                return (
                  <CardItem key={i}>
                    <div>{item.name} </div>
                    <GrayText>
                      <div style={{ textAlign: "right" }}>
                        {item.description}
                      </div>
                    </GrayText>
                  </CardItem>
                );
              })}
            </CardWrapper>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Slider>
      </SlidHolder>
    </div>
  );
}

export function ForthPage() {
  return (
    <div className="modleWrapper">
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}
      >
        <InputLable>
          Total Price
          <Input addonAfter="IQD" placeholder="0.0" />
        </InputLable>
        <InputLable>
          Received
          <Input addonAfter="IQD" placeholder="0.0" />
        </InputLable>
      </div>
    </div>
  );
}
function Index() {
  return <div></div>;
}

export default Index;
