import { CheckBox } from "components";
export default {
  title: "ordermanagementportal/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  shape: "RoundedBorder2",
  variant: "OutlineBluegray50",
  size: "sm",
  inputClassName: "mr-1",
};
