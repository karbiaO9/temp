import React from "react";
import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";
import { SelectBox } from "components";


const Signup = () => {
  
  
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-abeezee sm:gap-10 md:gap-10 gap-[158px] items-center justify-start mx-auto pb-[158px] w-full">
        <Header className="bg-gray-50 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
        <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 gap-[95px] items-center justify-center max-w-[996px] mx-auto pl-[85px] md:px-5 rounded-[40px] shadow-bs1 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[36%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Input
                name="appuikittext"
                placeholder="Email"
                className="p-0 placeholder:text-gray-500 text-[15px] text-left tracking-[-0.24px] w-full"
                wrapClassName="border border-green-900 border-solid w-full"
                type="email"
                shape="round"
                color="gray_50"
                size="sm"
                variant="fill"
              ></Input>
              <Input
                name="appuikittext_One"
                placeholder="Password"
                className="p-0 placeholder:text-gray-500 text-[15px] text-left tracking-[-0.24px] w-full"
                wrapClassName="border border-green-900 border-solid flex mt-6 w-full"
                type="password"
                suffix={
                  <Img
                    className="h-6 ml-[35px] my-auto"
                    src="images/img_ui_kit_icon_edit_show.svg"
                    alt="UI Kit / Icon / edit / show"
                  />
                }
                shape="round"
                color="gray_50"
                size="xs"
                variant="fill"
              ></Input>
              <Input
                name="appuikittext_Two"
                placeholder="Confirm Password"
                className="p-0 placeholder:text-gray-500 text-[15px] text-left tracking-[-0.24px] w-full"
                wrapClassName="border border-green-900 border-solid flex mt-6 w-full"
                type="password"
                suffix={
                  <Img
                    className="h-6 ml-[35px] my-auto"
                    src="images/img_ui_kit_icon_edit_show.svg"
                    alt="UI Kit / Icon / edit / show"
                  />
                }
                shape="round"
                color="gray_50"
                size="xs"
                variant="fill"
              ></Input>
              <div className="flex flex-row gap-[21px] items-center justify-between mt-6 w-full">
                <SelectBox
                  className="border border-green-900 border-solid sm:flex-1 text-[15px] text-left tracking-[-0.24px] w-[36%] sm:w-full"
                  placeholderClassName="text-blue_gray-900"
                  indicator={
                    <Img
                      className="h-4 mr-[0] w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isSearchable={false}
                  placeholder="+216"
                  getOptionLabel={(e) => (
                    <div className="flex items-center">
                      <Img
                        className="h-4 mr-2.5"
                        src="images/img_flag_tn.svg"
                        alt="flag/TN"
                      />
                      <span>{e.label}</span>
                    </div>
                  )}
                  name="countrycode"
                  isMulti={false}
                 
                  shape="round"
                  color="gray_50"
                  size="xs"
                  variant="fill"
                />
                <Input
                  name="appuikittext_Three"
                  placeholder="Phone Number"
                  className="p-0 placeholder:text-gray-500 text-[15px] text-left tracking-[-0.24px] w-full"
                  wrapClassName="border border-green-900 border-solid"
                  type="number"
                  shape="round"
                  color="gray_50"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <Button
                className="cursor-pointer italic min-w-[327px] mt-11 text-base text-center tracking-[0.48px]"
                shape="round"
                color="green_900"
                size="sm"
                variant="fill"
              >
                Sign up
              </Button>
              <Text
                className="italic mt-[25px] text-blue_gray-200 text-center text-xs tracking-[0.36px]"
                size="txtABeeZeeItalic12"
              >
                <span className="text-blue_gray-200 font-abeezee font-normal italic">
                  Already have an account?{" "}
                </span>
                <span className="text-green-900 font-abeezee font-normal italic">
                  Login
                </span>
              </Text>
            </div>
          </div>
          <Img
            className="md:flex-1 h-[628px] sm:h-auto object-cover rounded-br-[40px] rounded-tr-[40px] w-[54%] md:w-full"
            src="images/img_rectangle31_628x489.png"
            alt="rectangleThirtyOne"
          />
        </div>
      </div>
    </>
  );

};

export default Signup;
