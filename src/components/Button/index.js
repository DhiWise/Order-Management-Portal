import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder8: "rounded-radius8" };
const variants = { FillIndigoA200: "bg-indigo_A200 text-white_A700" };
const sizes = {
  sm: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  md: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["FillIndigoA200"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder8",
  variant: "FillIndigoA200",
  size: "sm",
};

export { Button };
