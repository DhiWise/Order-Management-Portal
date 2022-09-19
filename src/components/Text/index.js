import React from "react";
const variantClasses = {
  h1: "font-medium lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px]",
  h2: "lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  h3: "font-medium lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  h4: "font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
