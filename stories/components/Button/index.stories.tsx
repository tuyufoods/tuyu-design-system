import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@tuyufoods/web-ui";

interface ButtonProps {}

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create account",
  },
  argTypes: {},
} as Meta<ButtonProps>;

/** VARIATIONS FROM OBJECT **/
export const Default: StoryObj<ButtonProps> = {};
