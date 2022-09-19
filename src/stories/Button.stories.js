import { Button as ButtonComponent, Img } from "components";
export default {
  title: "ordermanagementportal/Buttons",
  component: ButtonComponent,
  argTypes: {
    children: { control: "text" },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      table: {
        disable: true,
      },
    },
  },
};
const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});

Button.args = {
  className: "flex items-center justify-center",
  shape: "RoundedBorder8",
  variant: "FillIndigoA200",
  size: "sm",
  children: "Button",
};

export const LeftIconButton = Template.bind({});

LeftIconButton.args = {
  className: "flex items-center justify-center",
  shape: "RoundedBorder8",
  variant: "FillIndigoA200",
  size: "sm",
  children: "Button",
  leftIcon: (
    <Img
      src="images/img_vector.svg"
      alt="img"
      className="w-[25px] float-left mr-[10px]"
    />
  ),
};

export const RightIconButton = Template.bind({});

RightIconButton.args = {
  className: "flex items-center justify-center",
  shape: "RoundedBorder8",
  variant: "FillIndigoA200",
  size: "sm",
  children: "Button",
  rightIcon: (
    <Img
      src="images/img_vector.svg"
      alt="img"
      className="w-[25px] float-right ml-[10px]"
    />
  ),
};
