import React from "react";

import { Button, Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[72px] md:ml-[0] ml-[120px] md:mt-0 my-1"
          src="images/img_uikitlogo.svg"
          alt="uikitlogo"
        />
        <ul className="flex sm:flex-col flex-row gap-10 sm:hidden items-start justify-start ml-8 md:ml-[0] md:mt-0 my-7 w-auto sm:w-full common-row-list">
          <li>
            <Text
              className="text-base text-center text-green-900 tracking-[0.32px]"
              size="txtABeeZeeRegular16Green900"
            >
              Invest
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-center text-green-900 tracking-[0.32px]"
              size="txtABeeZeeRegular16Green900"
            >
              Sell Land
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-center text-green-900 tracking-[0.32px]"
              size="txtABeeZeeRegular16Green900"
            >
              Blog
            </Text>
          </li>
          <li>
            <div className="flex flex-row gap-1 items-start justify-start">
              <Text
                className="text-base text-green-900 tracking-[0.32px] w-auto"
                size="txtABeeZeeRegular16Green900"
              >
                Learning Center
              </Text>
              <Img
                className="h-6 w-6"
                src="defaultNoData.png"
                alt="iconarrowcaretd"
              />
            </div>
          </li>
        </ul>
        <Button
          className="flex h-10 items-center justify-center md:ml-[0] ml-[106px] md:mt-0 my-5 rounded-lg w-10"
          color="gray_50"
          size="xs"
          variant="fill"
        >
          <Img src="images/img_group.svg" alt="group" />
        </Button>
        <Button
          className="flex h-10 items-center justify-center ml-4 md:ml-[0] md:mt-0 my-5 rounded-lg w-10"
          color="gray_50"
          size="sm"
          variant="fill"
        >
          <Img src="images/img_google.png" alt="google" />
        </Button>
        <div className="flex flex-col items-center justify-end ml-4 md:ml-[0] md:mt-0 my-5 p-[9px]">
          <Text
            className="italic text-base text-center text-green-900 tracking-[0.48px]"
            size="txtABeeZeeItalic16"
          >
            Login
          </Text>
        </div>
        <Button
          className="cursor-pointer font-abeezee italic min-w-[117px] ml-4 md:ml-[0] md:mt-0 my-5 text-base text-center tracking-[0.48px]"
          shape="round"
          color="green_900"
          size="md"
          variant="fill"
        >
          Sign Up
        </Button>
        <div className="flex flex-row items-start justify-center md:ml-[0] ml-[26px] mr-[120px] md:mt-0 my-7 w-[4%] md:w-full">
          <Text
            className="italic text-[15px] text-center text-green-900 tracking-[0.30px]"
            size="txtABeeZeeItalic15"
          >
            EN
          </Text>
          <Img
            className="h-6 ml-0.5 w-6"
            src="defaultNoData.png"
            alt="iconarrowcaretd_One"
          />
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
