import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-abeezee items-center justify-center mx-auto w-full">
        <div className="md:h-[720px] h-[783px] md:px-5 relative w-full">
          <Img
            className="absolute bottom-[0] h-[720px] inset-x-[0] mx-auto"
            src="images/img_subtract.svg"
            alt="subtract"
          />
          <div className="absolute h-[698px] inset-x-[0] mx-auto top-[0] w-full">
            <Img
              className="h-[698px] m-auto object-cover w-full"
              src="images/sld.jpg "
              alt="unsplash0agtpoa"
            />
            <div className="absolute bottom-[7%] flex flex-col inset-x-[0] items-center  mx-auto  w-[46%]">
              <Text
                className="italic md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700"
                size="txtABeeZeeItalic56"
              >
                Invest in Land in Minutes
              </Text>
              <NavLink to="/login">
              <Button
  className="common-pointer cursor-pointer min-w-[200px] mt-8 text-center text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:text-white"
  onClick={() => navigate("")}
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Join now
              </Button>
              </NavLink>

              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-[58px] w-full">
                <div className="flex flex-col gap-[31px] items-center justify-start">
                  <Text
                    className="italic sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[1.20px]"
                    size="txtABeeZeeItalic40"
                  >
                    13 %
                  </Text>
                  <Text
                    className="text-[15px] text-center text-white-A700 tracking-[0.15px]"
                    size="txtABeeZeeRegular15"
                  >
                    Total Return
                  </Text>
                </div>
                <div className="flex flex-col gap-[31px] items-center justify-start md:ml-[0] ml-[82px]">
                  <Text
                    className="italic sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[1.20px]"
                    size="txtABeeZeeItalic40"
                  >
                    € 96K
                  </Text>
                  <Text
                    className="text-[15px] text-center text-white-A700 tracking-[0.15px]"
                    size="txtABeeZeeRegular15"
                  >
                    Invested amount
                  </Text>
                </div>
                <div className="flex flex-col gap-[31px] items-center justify-start md:ml-[0] ml-[77px]">
                  <Text
                    className="italic sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[1.20px]"
                    size="txtABeeZeeItalic40"
                  >
                    15
                  </Text>
                  <Text
                    className="text-[15px] text-center text-white-A700 tracking-[0.15px]"
                    size="txtABeeZeeRegular15"
                  >
                    Total investors
                  </Text>
                </div>
                <div className="flex flex-col gap-8 items-center justify-start md:ml-[0] ml-[49px]">
                  <Text
                    className="italic sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[1.20px]"
                    size="txtABeeZeeItalic40"
                  >
                    40 ha
                  </Text>
                  <Text
                    className="text-[15px] text-center text-white-A700 tracking-[0.15px]"
                    size="txtABeeZeeRegular15"
                  >
                    Total land
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[46px] items-center justify-start max-w-[996px] mt-[42px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="italic text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
              size="txtABeeZeeItalic48"
            >
              Why Land
            </Text>
          </div>
          <div className="bg-gray-50 sm:h-[1609px] h-[496px] md:h-[626px] relative rounded-[40px] shadow-bs1 w-full">
            <div className="absolute h-[496px] inset-[0] justify-center m-auto w-full">
              <div className="absolute bottom-[13%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
                  <Line className="bg-gray-300 h-px w-full" />
                  <Line className="bg-gray-300 h-px w-full" />
                  <Line className="bg-gray-300 h-px w-full" />
                  <Line className="bg-gray-300 h-px w-full" />
                  <Line className="bg-gray-300 h-px w-full" />
                  <Line className="bg-gray-300 h-px w-full" />
                </div>
              </div>
              <div className="absolute flex flex-row sm:gap-10 h-full inset-y-[0] items-center justify-between my-auto right-[19%] w-[57%]">
                <Line className="bg-gray-300 h-[496px] w-px" />
                <Line className="bg-gray-300 h-[496px] w-px" />
                <Line className="bg-gray-300 h-[496px] w-px" />
                <Line className="bg-gray-300 h-[496px] w-px" />
              </div>
            </div>
            <List
              className="absolute bottom-[17%] sm:flex-col flex-row md:gap-10 gap-[163px] grid sm:grid-cols-1 grid-cols-4 right-[8%] w-3/5"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-10 items-center justify-start w-full">
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="gray_300"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon.svg"
                    alt="uikiticon"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="gray_300"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon.svg"
                    alt="uikiticon_One"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="gray_300"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon.svg"
                    alt="uikiticon_Two"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="gray_300"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon.svg"
                    alt="uikiticon_Three"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="gray_300"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon.svg"
                    alt="uikiticon_Four"
                  />
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-gray-500 h-1 w-full"></div>
                <Button
                  className="flex h-6 items-center justify-center mt-[50px] w-6"
                  shape="circle"
                  color="red_200"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon_red_900.svg"
                    alt="uikiticon"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center mt-10 w-6"
                  shape="circle"
                  color="red_200"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon_red_900.svg"
                    alt="uikiticon_One"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center mt-10 w-6"
                  shape="circle"
                  color="red_200"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon_red_900.svg"
                    alt="uikiticon_Two"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center mt-10 w-6"
                  shape="circle"
                  color="red_200"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon_red_900.svg"
                    alt="uikiticon_Three"
                  />
                </Button>
              </div>
              <div className="flex flex-col gap-10 items-center justify-start w-full">
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="gray_300"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon.svg"
                    alt="uikiticon"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="red_200"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon_red_900.svg"
                    alt="uikiticon_One"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="red_200"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon_red_900.svg"
                    alt="uikiticon_Two"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="gray_300"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon.svg"
                    alt="uikiticon_Three"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="gray_300"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon.svg"
                    alt="uikiticon_Four"
                  />
                </Button>
              </div>
              <div className="flex flex-col gap-10 items-center justify-start w-full">
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="red_200"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon_red_900.svg"
                    alt="uikiticon"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="red_200"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon_red_900.svg"
                    alt="uikiticon_One"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="gray_300"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon.svg"
                    alt="uikiticon_Two"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="gray_300"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon.svg"
                    alt="uikiticon_Three"
                  />
                </Button>
                <Button
                  className="flex h-6 items-center justify-center w-6"
                  shape="circle"
                  color="gray_300"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-4"
                    src="images/img_uikiticon.svg"
                    alt="uikiticon_Four"
                  />
                </Button>
              </div>
            </List>
            <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[93%]">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtABeeZeeRegular24"
                  >
                    Asset Class
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[155px] text-2xl md:text-[22px] text-center text-green-900 sm:text-xl"
                    size="txtABeeZeeRegular24Green900"
                  >
                    LAND
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[114px] text-2xl md:text-[22px] text-center text-green-900 sm:text-xl"
                    size="txtABeeZeeRegular24Green900"
                  >
                    STOCKS
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[72px] text-2xl md:text-[22px] text-center text-green-900 sm:text-xl"
                    size="txtABeeZeeRegular24Green900"
                  >
                    REAL ESTATE
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[85px] text-2xl md:text-[22px] text-center text-green-900 sm:text-xl"
                    size="txtABeeZeeRegular24Green900"
                  >
                    GOLD
                  </Text>
                </div>
                <Text
                  className="mt-14 text-blue_gray-900 text-lg"
                  size="txtABeeZeeRegular18"
                >
                  High Yield
                </Text>
                <Text
                  className="mt-[43px] text-blue_gray-900 text-lg"
                  size="txtABeeZeeRegular18"
                >
                  Low Volatility
                </Text>
                <Text
                  className="mt-[43px] text-blue_gray-900 text-lg"
                  size="txtABeeZeeRegular18"
                >
                  No Leverage
                </Text>
                <Text
                  className="mt-[42px] text-blue_gray-900 text-lg"
                  size="txtABeeZeeRegular18"
                >
                  Tangible Asset
                </Text>
                <Text
                  className="mt-[42px] text-blue_gray-900 text-lg"
                  size="txtABeeZeeRegular18"
                >
                  Inflation Hedge
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-9 w-full">
                  <Text
                    className="italic text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtABeeZeeItalic24"
                  >
                    Total Return
                  </Text>
                  <Text
                    className="italic sm:ml-[0] ml-[147px] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                    size="txtABeeZeeItalic24"
                  >
                    5-11%
                  </Text>
                  <Text
                    className="italic sm:ml-[0] ml-[111px] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                    size="txtABeeZeeItalic24"
                  >
                    7-10%
                  </Text>
                  <Text
                    className="italic sm:ml-[0] ml-[107px] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                    size="txtABeeZeeItalic24"
                  >
                    5-8%
                  </Text>
                  <Text
                    className="italic sm:ml-[0] ml-[131px] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                    size="txtABeeZeeItalic24"
                  >
                    3-6%
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light_green-800_42 flex flex-col items-center justify-start mt-[168px] p-[62px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1100px] mb-36 mx-auto w-full">
            <Text
              className="italic text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
              size="txtABeeZeeItalic48"
            >
              <span className="text-black-900 font-abeezee font-normal italic">
                How Land
              </span>
              <span className="text-green-900 font-abeezee font-normal italic">
                Ex{" "}
              </span>
              <span className="text-black-900 font-abeezee font-normal italic">
                Works
              </span>
            </Text>
            <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-between mt-[87px] w-full">
              <Img
                className="h-[216px] rounded-[100px]"
                src="images/img_investinland.svg"
                alt="investinland"
              />
              <Img
                className="h-[51px]"
                src="images/img_arrow.svg"
                alt="arrow"
              />
              <Img
                className="h-[216px] rounded-[100px]"
                src="images/img_investinland.svg"
                alt="growyourinvestm"
              />
              <Img
                className="h-[51px]"
                src="images/img_arrow.svg"
                alt="arrow_One"
              />
              <Img
                className="h-[216px] rounded-[100px]"
                src="images/img_investinland.svg"
                alt="receiveprofits"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-9 w-[99%] md:w-full">
              <Text
                className="italic mb-1 sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtABeeZeeItalic40Black900"
              >
                Invest in land
              </Text>
              <Text
                className="italic md:mt-0 mt-1 sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtABeeZeeItalic40Black900"
              >
                Grow your investment
              </Text>
              <Text
                className="italic md:mt-0 mt-1 sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtABeeZeeItalic40Black900"
              >
                Reveive profits
              </Text>
            </div>
          </div>
        </div>
        <div className="h-[583px] md:h-[599px] sm:h-[621px] max-w-[996px] mt-[47px] mx-auto md:px-5 relative w-full">
          <Img
            className="absolute bottom-[0] h-[464px] object-cover right-[0] rounded-[16px] w-[49%]"
            src="images/img_image8.png"
            alt="imageEight"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[62px] h-full inset-y-[0] justify-start left-[0] my-auto w-[64%]">
            <Text
              className="italic md:ml-[0] ml-[360px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
              size="txtABeeZeeItalic48"
            >
              <span className="text-black-900 font-abeezee font-normal italic">
                Why Land
              </span>
              <span className="text-green-900 font-abeezee font-normal italic">
                Ex
              </span>
            </Text>
            <div className="flex flex-col gap-10 items-center justify-start mr-[149px] w-[77%] md:w-full">
              <div className="bg-gray-50 flex flex-col gap-[7px] items-start justify-start p-[19px] rounded-[16px] shadow-bs2 w-full">
                <Text
                  className="italic ml-1 md:ml-[0] text-2xl md:text-[22px] text-green-900 sm:text-xl tracking-[0.72px]"
                  size="txtABeeZeeItalic24Green900"
                >
                  Easy to Use
                </Text>
                <Text
                  className="leading-[130.00%] mb-[5px] ml-1 md:ml-[0] text-blue_gray-900 text-lg tracking-[0.54px] w-[98%] sm:w-full"
                  size="txtABeeZeeRegular18"
                >
                  Effortless access and predictive analytics with secondary
                  market for liquidity
                </Text>
              </div>
              <div className="bg-gray-50 flex flex-col gap-2.5 items-start justify-start p-4 rounded-[16px] shadow-bs2 w-full">
                <Text
                  className="italic ml-1.5 md:ml-[0] text-2xl md:text-[22px] text-green-900 sm:text-xl tracking-[0.72px]"
                  size="txtABeeZeeItalic24Green900"
                >
                  Asset-Backed Investment
                </Text>
                <Text
                  className="leading-[130.00%] mb-2 md:ml-[0] ml-[7px] text-blue_gray-900 text-lg tracking-[0.54px] w-[97%] sm:w-full"
                  size="txtABeeZeeRegular18"
                >
                  Your investments are backed by the land with extra security
                  layer provided by collateral agent
                </Text>
              </div>
              <div className="bg-gray-50 flex flex-col gap-[7px] items-start justify-start p-[19px] rounded-[16px] shadow-bs2 w-full">
                <Text
                  className="italic ml-1 md:ml-[0] text-2xl md:text-[22px] text-green-900 sm:text-xl tracking-[0.72px]"
                  size="txtABeeZeeItalic24Green900"
                >
                  Easy to Use
                </Text>
                <Text
                  className="leading-[130.00%] mb-[5px] ml-1 md:ml-[0] text-blue_gray-900 text-lg tracking-[0.54px] w-[98%] sm:w-full"
                  size="txtABeeZeeRegular18"
                >
                  We provide direct access to Carbon projects, Organic farming
                  and Sustainable forestry
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light_green-800_42 flex flex-col items-center justify-start mt-16 p-[184px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start max-w-[996px] mb-3 mx-auto w-full">
            <Text
              className="italic text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
              size="txtABeeZeeItalic48"
            >
              <span className="text-black-900 font-abeezee font-normal italic">
                How Land
              </span>
              <span className="text-green-900 font-abeezee font-normal italic">
                Ex
              </span>
              <span className="text-black-900 font-abeezee font-normal italic">
                {" "}
                works
              </span>
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col gap-12 items-center justify-start">
                <div className="flex flex-col gap-12 items-center justify-start w-full">
                  <div className="bg-gray-50 flex flex-col items-center justify-start p-[11px] rounded-[24px] shadow-bs3 w-full">
                    <Text
                      className="leading-[130.00%] text-black-900_01 text-xl w-[94%] sm:w-full"
                      size="txtABeeZeeRegular20"
                    >
                      LandEx analyzes all available land investments and finds
                      the best opportunities.
                    </Text>
                  </div>
                  <div className="bg-gray-50 flex flex-col items-center justify-start p-6 sm:px-5 rounded-[24px] shadow-bs3 w-full">
                    <Text
                      className="leading-[130.00%] text-black-900_01 text-xl w-full"
                      size="txtABeeZeeRegular20"
                    >
                      LandEx negotiates the pricing with Land Sellers and lists
                      the lands. 
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-col items-center justify-center p-6 sm:px-5 rounded-[24px] shadow-bs3 w-full">
                  <Text
                    className="leading-[130.00%] text-black-900_01 text-xl w-full"
                    size="txtABeeZeeRegular20"
                  >
                    Retail and institutional investors can start investing in the listed lands.
                  </Text>
                </div>
              </div>
              <Img
                className="h-[396px] md:h-auto object-cover rounded-[16px]"
                src="images/img_unsplashvdhbkvg1hq.png"
                alt="unsplashvdhbkvg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-5xl mt-[113px] mx-auto md:px-5 w-full">
          <Text
            className="italic text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
            size="txtABeeZeeItalic48"
          >
            Asset-Backed Investment
          </Text>
          <Text
            className="italic leading-[32.00px] mt-[27px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.24px] w-[95%] sm:w-full"
            size="txtABeeZeeItalic24Black900"
          >
            Investors own fractional investments that refer to the specific land
            plot via a loan agreement with interest dependent on asset value.
          </Text>
          <Text
            className="mt-6 text-black-900 text-lg tracking-[0.18px]"
            size="txtABeeZeeRegular18Black900"
          >
            <>
              LandEx’s goal is to get our investors as close as possible to
              owning land. However, since “fractionalization of land” is legally
              not possible, it is not possible to offer our investors ownership
              in the company that owns the land, as the regulatory costs would
              then go into millions of euros.
              <br />
              <br />
              We found a solution using the typical crowdfunding playbook, where
              a loan contract is used for investing. LandEx lands loan contract
              is with variable interests, so that the value depends on the price
              of the asset and the investors benefit from the full increase of
              the asset value. As the land has no other loans, there is no
              chance of bankruptcy. The loan investment is backed by a mortgage
              set for that specific land which is held by a collateral agent.
            </>
          </Text>
          <div className="flex flex-col items-center justify-end mt-2 pt-[13px] px-[13px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <div className="h-[362px] md:h-[452px] sm:h-[688px] relative w-[62%] md:w-full">
                <div className="absolute h-[355px] md:h-[452px] sm:h-[688px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                        <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start w-[39%] sm:w-full">
                          <div className="bg-gray-50 border border-blue_gray-200 border-solid flex flex-col items-center justify-end p-[11px] rounded-[9px] shadow-bs4 w-full">
                            <Text
                              className="italic mt-0.5 text-[14.96px] text-black-900 text-center tracking-[0.15px]"
                              size="txtABeeZeeItalic1496"
                            >
                              Land Exchange Lands OU
                            </Text>
                            <Text
                              className="leading-[19.00px] mt-[3px] text-[13.3px] text-blue_gray-900 text-center tracking-[0.27px] w-[90%] sm:w-full"
                              size="txtABeeZeeRegular133"
                            >
                              Special-licensed company for buying land
                            </Text>
                          </div>
                          <div className="bg-gray-50 border border-blue_gray-200 border-solid flex flex-col items-center justify-end p-[11px] rounded-[9px] shadow-bs4">
                            <Text
                              className="italic text-[13.3px] text-black-900 tracking-[0.27px]"
                              size="txtABeeZeeItalic133"
                            >
                              1st land plot
                            </Text>
                          </div>
                          <div className="bg-gray-50 border border-blue_gray-200 border-solid flex flex-col items-end justify-end p-[11px] rounded-[9px] shadow-bs4">
                            <Text
                              className="italic mr-0.5 text-[13.3px] text-black-900 tracking-[0.27px]"
                              size="txtABeeZeeItalic133"
                            >
                              2nd land plot
                            </Text>
                          </div>
                          <div className="bg-gray-50 border border-blue_gray-200 border-solid flex flex-col items-center justify-end p-[11px] rounded-[9px] shadow-bs4">
                            <Text
                              className="italic text-[13.3px] text-black-900 tracking-[0.27px]"
                              size="txtABeeZeeItalic133"
                            >
                              3rd land plot
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-[5px] items-center justify-start sm:mt-0 mt-4 w-1/5 sm:w-full">
                          <Text
                            className="italic text-[13.3px] text-blue_gray-900 text-center tracking-[0.27px]"
                            size="txtABeeZeeItalic133Bluegray900"
                          >
                            Funding
                          </Text>
                          <Img
                            className="h-[9px]"
                            src="images/img_union.svg"
                            alt="union"
                          />
                        </div>
                        <div className="bg-gray-50 border border-blue_gray-200 border-solid flex flex-col items-center justify-start mb-[159px] p-8 sm:px-5 rounded-[9px] shadow-bs4">
                          <Text
                            className="italic text-[14.96px] text-black-900 text-center tracking-[0.15px]"
                            size="txtABeeZeeItalic1496"
                          >
                            LandEx Marketplace OU
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <div className="bg-gray-50 border border-blue_gray-200 border-solid flex flex-col items-center justify-end mb-[46px] md:mt-0 mt-[7px] p-[11px] rounded-[9px] shadow-bs4">
                          <Text
                            className="italic text-[13.3px] text-black-900 tracking-[0.27px]"
                            size="txtABeeZeeItalic133"
                          >
                            4th land plot
                          </Text>
                        </div>
                        <Text
                          className="italic md:ml-[0] ml-[135px] text-[13.3px] text-blue_gray-900 text-center tracking-[0.27px]"
                          size="txtABeeZeeItalic133Bluegray900"
                        >
                          Mortgages
                        </Text>
                        <div className="bg-gray-50 border border-blue_gray-200 border-solid md:h-[60px] h-[86px] md:ml-[0] ml-[55px] md:mt-0 mt-[7px] relative rounded-[9px] shadow-bs4 w-[39%] md:w-full">
                          <Text
                            className="absolute inset-x-[0] italic mx-auto text-[14.96px] text-black-900 text-center top-[14%] tracking-[0.15px] w-max"
                            size="txtABeeZeeItalic1496"
                          >
                            Collateral agent
                          </Text>
                          <Text
                            className="absolute bottom-[0] inset-x-[0] leading-[19.00px] mx-auto text-[13.3px] text-blue_gray-900 text-center tracking-[0.27px] w-full"
                            size="txtABeeZeeRegular133"
                          >
                            holds mortgage, 3rd party / separate entity with
                            separate board
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[273px] left-[12%]"
                    src="images/img_arrow6.svg"
                    alt="arrowSix"
                  />
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[220px] items-center justify-end left-[14%] pl-2.5 pt-2.5 w-[47%]"
                  style={{ backgroundImage: "url('images/img_arrow6.svg')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[191px] items-center justify-end mt-[18px] pl-2.5 pt-2.5 w-full"
                    style={{ backgroundImage: "url('images/img_arrow6.svg')" }}
                  >
                    <Img
                      className="h-[163px] mt-[18px]"
                      src="images/img_arrow9.svg"
                      alt="arrowNine"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-1.5 items-center justify-start w-[39%] md:w-full">
                <div className="flex flex-row gap-[13px] items-start justify-between w-[98%] md:w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start mt-4">
                    <Text
                      className="italic text-[13.3px] text-blue_gray-900 text-center tracking-[0.27px]"
                      size="txtABeeZeeItalic133Bluegray900"
                    >
                      Funding
                    </Text>
                    <Img
                      className="h-[9px]"
                      src="images/img_union_green_900.svg"
                      alt="union_One"
                    />
                  </div>
                  <Button
                    className="border border-blue_gray-200 border-solid cursor-pointer italic min-w-[234px] rounded-[9px] shadow-bs4 text-[14.96px] text-center tracking-[0.15px]"
                    color="gray_50"
                    size="2xl"
                    variant="fill"
                  >
                    Users
                  </Button>
                </div>
                <div className="flex h-[270px] justify-end relative w-[97%]">
                  <Text
                    className="italic mb-[66px] ml-[42px] mt-auto text-[13.3px] text-blue_gray-900 text-center tracking-[0.27px]"
                    size="txtABeeZeeItalic133Bluegray900"
                  >
                    Collateral agent contract
                  </Text>
                  <Img
                    className="absolute h-[270px] inset-[0] justify-center m-auto"
                    src="images/img_arrow10.svg"
                    alt="arrowTen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light_green-800_42 flex flex-col items-center justify-end mt-[334px] p-20 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start mt-[3px] w-[63%] md:w-full">
            <Text
              className="italic text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
              size="txtABeeZeeItalic48"
            >
              Get the App
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[59px] w-[96%] md:w-full">
              <Img
                className="h-56 md:h-auto object-cover w-56"
                src="images/img_applestore.png"
                alt="applestore"
              />
              <Img
                className="h-56 md:h-auto object-cover w-56"
                src="images/img_gplaymarket.png"
                alt="gplaymarket"
              />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-10 w-full">
              <Img
                className="h-[88px]"
                src="images/img_availableapple.svg"
                alt="availableapple"
              />
              <Img
                className="h-[88px]"
                src="images/img_getongplay.svg"
                alt="getongplay"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-[102px] md:px-5 w-[37%] md:w-full">
          <Text
            className="italic text-5xl sm:text-[38px] md:text-[44px] text-black-900_01"
            size="txtABeeZeeItalic48Black90001"
          >
            Contact us
          </Text>
          <Text
            className="italic mt-[43px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[0.72px]"
            size="txtABeeZeeItalic24Black90001"
          >
            Epi, Sousse, Tunisia
          </Text>
          <div className="flex flex-row sm:gap-10 items-center justify-between mt-[39px] w-full">
            <Img
              className="h-[104px] w-[104px]"
              src="images/img_uikiticon_blue_gray_900.svg"
              alt="uikiticon"
            />
            <Img
              className="h-[104px] w-[104px]"
              src="images/img_uikiticon_blue_gray_900_104x104.svg"
              alt="uikiticon_One"
            />
            <Img
              className="h-[105px] w-[105px]"
              src="images/img_uikiticon_blue_gray_900_105x105.svg"
              alt="uikiticon_Two"
            />
          </div>
        </div>
        <div className="h-[375px] md:h-[479px] mt-[104px] md:px-5 relative w-full">
          <Img
            className="h-[375px] m-auto object-cover w-full"
            src="images/img_rectangle24.png"
            alt="rectangleTwentyFour"
          />
          <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-[68%]">
            
          <Text
              className="leading-[140.00%] md:ml-[0] ml-[137px] mt-[33px] text-4xl md:text-[22px] text-center text-gray-50 sm:text-xl tracking-[0.72px] w-[77%] sm:w-full"
              size="txtMontserratRegular24"
            >
              <span className="text-gray-50 font-abeezee font-bold">
              Interested in selling a land? Let us know!
              </span>
              
            </Text>
            <Text
              className="leading-[140.00%] md:ml-[0] ml-[137px] mt-[33px] text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl tracking-[0.72px] w-[77%] sm:w-full"
              size="txtMontserratRegular24"
            >
              <span className="text-gray-50 font-abeezee font-normal">
                Let’s get to know each other. Please tell us about yourself more
                by emailing to{" "}
              </span>
              <span className="text-gray-50 font-abeezee font-normal italic">
                listings@landex.ai
              </span>
            </Text>
            <Button
              className="cursor-pointer font-abeezee min-w-[200px] md:ml-[0] ml-[407px] mr-[365px] mt-12 text-center text-lg"
              shape="round"
              color="gray_50"
              size="lg"
              variant="fill"
            >
              Contact Us
            </Button>
          </div>
        </div>
        <Footer className="bg-gray-50 flex items-center justify-center mt-[109px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default Home;