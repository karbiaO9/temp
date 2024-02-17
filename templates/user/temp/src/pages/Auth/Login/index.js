
import Header from "components/Header";
import React from "react";
import { Button, Img, Input, Line, List, Text } from "components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-abeezee sm:gap-10 md:gap-10 gap-[158px] items-center justify-start mx-auto pb-[158px] w-full">
        <Header className="bg-gray-50 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
        <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 gap-[90px] items-stretch justify-center max-w-[996px] mx-auto pl-[90px] md:px-5 rounded-[40px] shadow-bs1 w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[158px] w-[37%] md:w-full">
            <Input
              style={{outline : 'none' , borderColor: 'transparent', boxShadow: 'none' }}
              name="appuikittext"
              placeholder="Email"
              className="p-0 placeholder:text-gray-500 text-[15px] text-left tracking-[-0.24px] w-full"
              wrapClassName="border border-green-900 border-solid w-full"
              type="email"
              size="sm"
              shape="round"
              color="gray_50"
              variant="fill"
            ></Input>
            <Input
              style={{outline : 'none' , borderColor: 'transparent', boxShadow: 'none' }}
              name="appuikittext_One"
              placeholder="Password"
              className="p-0 placeholder:text-gray-500 text-[15px] text-left tracking-[-0.24px] w-full"
              wrapClassName="border border-green-900 border-solid flex mt-6 w-full"
              type={passwordVisible ? 'text' : 'password'}
              size="sm"
              shape="round"
              color="gray_50"
              variant="fill"
              suffix={
                <Img
                  style={{cursor: 'pointer'}}
                  className="h-6 ml-[35px] my-auto"
                  src="images/img_ui_kit_icon_edit_show.svg"
                  alt="UI Kit / Icon / edit / show"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
              }
            ></Input>
            <a
              href="javascript:"
              className="italic md:ml-[0] ml-[216px] mt-[17px] text-blue_gray-200 text-xs tracking-[0.36px]"
            >
              <Text size="txtABeeZeeItalic12">Forgot password?</Text>
            </a>
            <Button
              className="cursor-pointer italic min-w-[327px] mt-[23px] text-base text-center tracking-[0.48px]"
              shape="round"
              color="green_900"
              size="sm"
              variant="fill"
            >
              Login
            </Button>
            <Text
              className="italic md:ml-[0] ml-[66px] mt-[17px] text-blue_gray-200 text-center text-xs tracking-[0.36px]"
              size="txtABeeZeeItalic12"
            >
            <NavLink to="/signup">
              <span className="text-blue_gray-200 font-abeezee font-normal italic">
                <>Don&#39;t have an account? </>
              </span>
              <span className="text-green-900 font-abeezee font-normal italic">
                Sign Up
              </span>
            </NavLink>
            </Text>
          </div>
          <Img
            className="md:flex-1 grid sm:grid-cols-1 h-[628px] sm:h-auto object-cover rounded-br-[40px] rounded-tr-[40px] w-[54%] md:w-full"
            src="images/loginphoto.jpg"
            alt="rectangleThirtyOne"
          />
        </div>
      </div>
    </>
  );
};

export default Login;

