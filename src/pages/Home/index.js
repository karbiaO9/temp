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
                className="common-pointer cursor-pointer min-w-[200px] mt-8 text-center text-lg"
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
          <div className="absolute flex flex-col md:gap-10 gap-[62px] h-full inset-y-[0] justify-start left-[0] my-auto w-[64%] mr-4">
            <Text
              className="italic md:ml-[0] ml-[360px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
              size="txtABeeZeeItalic48"
            >
              <span className="text-black-900 font-abeezee font-normal italic">
                Why coding
              </span>
            </Text>
            <div className="flex flex-col gap-10 items-center justify-start mr-[149px] w-[77%] md:w-full">
              <div className="bg-gray-50 flex flex-col gap-[7px] items-start justify-start p-[19px] rounded-[16px] shadow-2xl w-full">
                <Text
                  className="italic ml-1 md:ml-[0] text-2xl md:text-[22px] text-green-900 sm:text-xl tracking-[0.72px]"
                  size="txtABeeZeeItalic24Green900"
                >
                  Easy to Use
                </Text>
                <Text
                  className="leading-[130.00%] mb-[5px] ml-1 md:ml-[0] text-blue_gray-900 text-lg tracking-[0.54px] w-[98%]  sm:w-full"
                  size="txtABeeZeeRegular18"
                >
                  Effortless access and predictive analytics with secondary
                  market for liquidity
                </Text>
              </div>
              <div className="bg-gray-50 flex flex-col gap-2.5 items-start justify-start p-4 rounded-[16px] shadow-2xl w-full">
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
              <div className="bg-gray-50 flex flex-col gap-[7px] items-start justify-start p-[19px] rounded-[16px] shadow-2xl w-full   ">
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
                How coding works
              </span>
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col gap-12 items-center mr-4 justify-start">
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
