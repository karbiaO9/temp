import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-md" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    gray_50: "bg-gray-50 text-black-900",
    red_200: "bg-red-200",
    gray_300: "bg-gray-300",
    green_900: "bg-green-900 text-gray-50",
  },
};
const sizes = {
  xs: "p-1",
  sm: "p-[7px]",
  md: "p-2.5",
  lg: "p-[13px]",
  xl: "p-[17px]",
  "2xl": "p-[34px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_50",
    "red_200",
    "gray_300",
    "green_900",
  ]),
};

export { Button };
