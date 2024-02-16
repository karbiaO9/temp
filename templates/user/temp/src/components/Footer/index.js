import React from "react";

import { Button, Img, Input, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[52px] mt-10 mx-auto w-[84%]">
          <div className="flex flex-col gap-2.5 items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[3px] p-[21px] sm:px-5 w-[15%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-[78px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        className="h-[21px]"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Img
                        className="h-[22px]"
                        src="images/img_vector.svg"
                        alt="vector"
                      />
                      <Img
                        className="h-[23px]"
                        src="images/img_user_gray_500.svg"
                        alt="user_One"
                      />
                      <Img
                        className="h-[21px]"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                      <Img
                        className="h-[21px]"
                        src="images/img_megaphone.svg"
                        alt="megaphone"
                      />
                      <Img
                        className="h-[21px]"
                        src="images/img_megaphone.svg"
                        alt="megaphone_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[88px] w-[13%] md:w-full">
                <Text
                  className="italic text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.72px]"
                  size="txtABeeZeeItalic24Black900"
                >
                  LandEx
                </Text>
                <ul className="flex flex-col gap-2 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-gray-500 tracking-[0.32px]"
                      size="txtABeeZeeRegular16"
                    >
                      About Us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-500 tracking-[0.32px]"
                      size="txtABeeZeeRegular16"
                    >
                      Sustainability
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-500 tracking-[0.32px]"
                      size="txtABeeZeeRegular16"
                    >
                      FAQ
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-500 tracking-[0.32px]"
                      size="txtABeeZeeRegular16"
                    >
                      Referral Program
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-500 tracking-[0.32px]"
                      size="txtABeeZeeRegular16"
                    >
                      Become an Affiliate
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[37px] w-[12%] md:w-full">
                <Text
                  className="italic text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.72px]"
                  size="txtABeeZeeItalic24Black900"
                >
                  Services
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-500 tracking-[0.32px] w-auto"
                    size="txtABeeZeeRegular16"
                  >
                    Invest
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[0.32px] w-auto"
                    size="txtABeeZeeRegular16"
                  >
                    Sell Land
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[0.32px] w-auto"
                    size="txtABeeZeeRegular16"
                  >
                    Primary Market
                  </Text>
                  <Text
                    className="leading-[130.00%] max-w-[136px] md:max-w-full text-base text-gray-500 tracking-[0.32px]"
                    size="txtABeeZeeRegular16"
                  >
                    Secondary Market
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[33px] items-center justify-start ml-12 md:ml-[0] w-[47%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start sm:mt-0 mt-0.5 w-1/4 sm:w-full">
                    <Text
                      className="italic text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.72px]"
                      size="txtABeeZeeItalic24Black900"
                    >
                      Legal
                    </Text>
                    <ul className="flex flex-col gap-2 items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <Text
                          className="text-base text-gray-500 tracking-[0.32px]"
                          size="txtABeeZeeRegular16"
                        >
                          User Terms
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-base text-gray-500 tracking-[0.32px]"
                          size="txtABeeZeeRegular16"
                        >
                          Privacy Policy
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-base text-gray-500 tracking-[0.32px]"
                          size="txtABeeZeeRegular16"
                        >
                          Whitepaper
                        </Text>
                      </li>
                    </ul>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-start justify-start w-[59%] sm:w-full">
                    <Text
                      className="italic text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.72px]"
                      size="txtABeeZeeItalic24Black900"
                    >
                      Subscribe
                    </Text>
                    <Input
                      name="appuikittext"
                      placeholder="Email"
                      className="font-abeezee p-0 placeholder:text-gray-500 text-[15px] text-left tracking-[-0.24px] w-full"
                      wrapClassName="border border-green-900 border-solid mt-2.5 w-full"
                      shape="round"
                      color="gray_50"
                      size="sm"
                      variant="fill"
                    ></Input>
                    <Button
                      className="cursor-pointer font-abeezee italic min-w-[117px] mt-4 text-base text-center tracking-[0.48px]"
                      shape="round"
                      color="green_900"
                      size="md"
                      variant="fill"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
                <Text
                  className="italic text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.72px]"
                  size="txtABeeZeeItalic24Black900"
                >
                  Follow us
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between md:ml-[0] ml-[3px] w-[95%] md:w-full">
              <Text
                className="sm:mt-0 mt-[30px] text-black-900 text-lg tracking-[0.36px]"
                size="txtABeeZeeRegular18Black900"
              >
                © LandEx. 2021. We love land!
              </Text>
              <div className="flex flex-row gap-2 items-center justify-between w-[24%] sm:w-full">
                <Img
                  className="h-[52px] w-[52px]"
                  src="images/img_facebookicon.svg"
                  alt="facebookicon"
                />
                <Img
                  className="h-[52px]"
                  src="images/img_twitterlogo.svg"
                  alt="twitterlogo"
                />
                <Img
                  className="h-[51px] w-[52px]"
                  src="images/img_linkedinicon.svg"
                  alt="linkedinicon"
                />
                <Img
                  className="h-[52px]"
                  src="images/img_mediumicon.svg"
                  alt="mediumicon"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
