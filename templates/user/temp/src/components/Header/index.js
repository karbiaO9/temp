import React from "react";

import { Button, Img, Text } from "components";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
      <NavLink to='/'>
        <Img
          className="h-[72px] md:ml-[0] ml-[13px] md:mt-0 my-1"
          src="images/img_uikitlogo.svg"
          alt="uikitlogo"
        />
        </NavLink>
        <div className="flex flex-row gap-10 items-start justify-start md:ml-[0] ml-[57px] md:mt-0 my-[27px] w-auto">
          <Text
            className="text-center text-green-900 text-xl tracking-[0.40px] w-auto"
            size="txtABeeZeeRegular20Green900"
          >
            Invest
          </Text>
          <Text
            className="text-center text-green-900 text-xl tracking-[0.40px] w-auto"
            size="txtABeeZeeRegular20Green900"
          >
            Secondary Market
          </Text>
          <Text
            className="text-center text-green-900 text-xl tracking-[0.40px] w-auto"
            size="txtABeeZeeRegular20Green900"
          >
            Portfolio
          </Text>
        </div>
        <Button
          className="flex h-10 items-center justify-center md:ml-[0] ml-[455px] md:mt-0 my-5 rounded-lg w-10"
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
          <NavLink to="/login">
            <Text
              className="italic text-base text-center text-green-900 tracking-[0.48px]"
              size="txtABeeZeeItalic16"
            >
              Login
            </Text>
          </NavLink>
        </div>
        <NavLink to="/signup">
          <Button
            className="cursor-pointer font-abeezee italic min-w-[117px] ml-4 md:ml-[0] mr-[71px] md:mt-0 my-5 text-base text-center tracking-[0.48px]"
            shape="round"
            color="green_900"
            size="md"
            variant="fill"
          >
            Sign Up
          </Button>
        </NavLink>
        
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;