"use client";

import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Input, { InputProps } from "./Input";

export default {
  title: "Input",
  component: Input,
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

const ControlledInput = (args: InputProps) => {
  const [value, setValue] = useState(args.value || "");
  return <Input {...args} value={value} onChange={setValue} />;
};

export const Text: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    type: "text",
    placeholder: "Enter text",
    clearable: false,
  },
};

export const TextClearable: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    type: "text",
    placeholder: "Clearable text",
    clearable: true,
  },
};

export const Password: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    type: "password",
    placeholder: "Enter password",
    clearable: false,
  },
};

export const Number: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    type: "number",
    placeholder: "Enter number",
    clearable: false,
  },
};
