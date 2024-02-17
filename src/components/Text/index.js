import React from "react";

const sizeClasses = {
  txtABeeZeeRegular16Green900: "font-abeezee font-normal",
  txtABeeZeeItalic24Black90001: "font-abeezee font-normal italic",
  txtABeeZeeRegular18Black900: "font-abeezee font-normal",
  txtABeeZeeItalic56: "font-abeezee font-normal italic",
  txtABeeZeeItalic15: "font-abeezee font-normal italic",
  txtABeeZeeItalic16: "font-abeezee font-normal italic",
  txtABeeZeeItalic48Black90001: "font-abeezee font-normal italic",
  txtABeeZeeRegular133: "font-abeezee font-normal",
  txtABeeZeeRegular20Green900: "font-abeezee font-normal",
  txtABeeZeeRegular24: "font-abeezee font-normal",
  txtABeeZeeRegular20: "font-abeezee font-normal",
  txtABeeZeeItalic1496: "font-abeezee font-normal italic",
  txtABeeZeeItalic40Black900: "font-abeezee font-normal italic",
  txtABeeZeeItalic40: "font-abeezee font-normal italic",
  txtABeeZeeItalic24: "font-abeezee font-normal italic",
  txtABeeZeeItalic133Bluegray900: "font-abeezee font-normal italic",
  txtABeeZeeItalic48: "font-abeezee font-normal italic",
  txtABeeZeeRegular18: "font-abeezee font-normal",
  txtABeeZeeItalic133: "font-abeezee font-normal italic",
  txtABeeZeeItalic48Gray50: "font-abeezee font-normal italic",
  txtABeeZeeRegular16: "font-abeezee font-normal",
  txtABeeZeeItalic24Green900: "font-abeezee font-normal italic",
  txtMontserratRegular24: "font-montserrat font-normal",
  txtABeeZeeRegular15: "font-abeezee font-normal",
  txtABeeZeeRegular24Green900: "font-abeezee font-normal",
  txtABeeZeeItalic24Black900: "font-abeezee font-normal italic",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
