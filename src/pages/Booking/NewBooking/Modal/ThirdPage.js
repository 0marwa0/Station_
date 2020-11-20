import React, { useState, useEffect } from "react";
import { Input, InputNumber, DatePicker } from "antd";
import { Mesg, FailedMesg } from "../../../../API/APIMessage";
import { BookItemLoading } from "../../../shared/Loading";
import { ReactComponent as DatePickerIcon } from "../../../../public/images/solid calendar-alt.svg";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import {
  DownOutlined,
  PropertySafetyFilled,
  UserOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { LoadData } from "../../../../API";
import {
  CardItem,
  CardWrapper,
  PageWrapper,
  SlidHolder,
  Space,
  Size,
  GrayBoldText,
  GrayText,
  SecondPageInput,
  BookedItem,
  Page1Item,
} from "./index";
import { ReactComponent as DropIcon } from "../../../../public/images/dropdown.svg";
import Slider from "react-slick";
import { FaTrashAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CustomInput, CustomInputArea } from "../../../shared/SharedStyle";
import { InputLable } from "../../../shared/SharedStyle";
const { TextArea } = Input;
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

export default function ThirdPage(props) {
  const [Coffeborder, setCoffeborder] = useState(
    "2px solid var(--lighterGray)"
  );
  const [activeCoffeId, setactiveCoffeId] = useState(null);
  const [Lunchesborder, setLunchesborder] = useState(
    "2px solid var(--lighterGray)"
  );
  const [activeLunchesId, setactiveLunchesId] = useState(null);
  const [designborder, setdesignborder] = useState(
    "2px solid var(--lighterGray)"
  );
  const [activedesignId, setactivedesignId] = useState(null);
  const selectCoffe = (id) => {
    setactiveCoffeId(id);
    props.handleselect(id, "coffeebreakId");
    setCoffeborder("2px solid var(--yellow)");
  };
  const selectLunches = (id) => {
    setactiveLunchesId(id);
    props.handleselect(id, "lunchId");
    setLunchesborder("2px solid var(--yellow)");
  };
  const selectdesign = (id) => {
    setactivedesignId(id);
    props.handleselect(id, "designId");
    setdesignborder("2px solid var(--yellow)");
  };
  return (
    <div className="modleWrapper">
      <SlidHolder>
        <InputLable>
          <span> Coffe Brake Pack</span>
          <Slider {...settings}>
            <div>
              <CardWrapper>
                {props.Loading ? (
                  <BookItemLoading />
                ) : (
                  props.coffees.map((item, i) => {
                    return (
                      <div key={i}>
                        <div
                          className="cardItem"
                          onClick={() => selectCoffe(item.id)}
                          style={{
                            border:
                              activeCoffeId === item.id
                                ? Coffeborder
                                : "2px solid var(--lighterGray)",
                          }}
                        >
                          {item.price + " IQD"}

                          <GrayText>
                            <div style={{ textAlign: "right" }}>
                              {item.description}
                            </div>
                          </GrayText>
                        </div>
                      </div>
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
        </InputLable>
      </SlidHolder>

      <SlidHolder>
        <InputLable>
          Lunches
          <Slider {...settings}>
            <div>
              <CardWrapper>
                <CardWrapper>
                  {props.lunches.map((item, i) => {
                    return (
                      <div
                        className="cardItem"
                        key={i}
                        onClick={() => selectLunches(item.id)}
                        style={{
                          border:
                            activeLunchesId === item.id
                              ? Lunchesborder
                              : "2px solid var(--lighterGray)",
                        }}
                      >
                        <div>{item.price} IQD</div>
                        <GrayText>
                          <div style={{ textAlign: "right" }}>
                            {item.description}
                          </div>
                        </GrayText>
                      </div>
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
        </InputLable>
      </SlidHolder>

      <SlidHolder>
        <InputLable>
          Hall Design
          <Slider {...settings}>
            <div>
              <CardWrapper>
                {props.Designs.map((item, i) => {
                  return (
                    <div
                      className="cardItem"
                      key={i}
                      onClick={() => selectdesign(item.id)}
                      style={{
                        border:
                          activedesignId === item.id
                            ? designborder
                            : "2px solid var(--lighterGray)",
                      }}
                    >
                      <div>{item.name} </div>
                      <GrayText>
                        <div style={{ textAlign: "right" }}>
                          {item.description}
                        </div>
                      </GrayText>
                    </div>
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
        </InputLable>
      </SlidHolder>
    </div>
  );
}
