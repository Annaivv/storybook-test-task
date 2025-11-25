import { Meta, StoryObj } from "@storybook/react";
import Toast, { ToastProps } from "./Toast";

export default {
  title: "Toast",
  component: Toast,
} as Meta<typeof Toast>;

type Story = StoryObj<typeof Toast>;

export const InfoToast: Story = {
  render: (args: ToastProps) => <Toast {...args} />,
  args: {
    message: "We have some info for you",
  },
};

export const InfoToastClosing: Story = {
  render: (args: ToastProps) => <Toast {...args} />,
  args: {
    message: "We have info for you",
    duration: 5000,
    showCloseButton: true,
  },
};

export const SuccessToast: Story = {
  render: (args: ToastProps) => <Toast {...args} />,
  args: {
    message: "Completed successfully!",
    type: "success",
  },
};

export const SuccessToastClosing: Story = {
  render: (args: ToastProps) => <Toast {...args} />,
  args: {
    message: "Completed successfully!",
    type: "success",
    showCloseButton: true,
  },
};

export const WarningToast: Story = {
  render: (args: ToastProps) => <Toast {...args} />,
  args: {
    message: "Watch out for this!",
    type: "warning",
  },
};

export const WarningToastLonger: Story = {
  render: (args: ToastProps) => <Toast {...args} />,
  args: {
    message: "Watch out for this!",
    type: "warning",
    duration: 5000,
  },
};

export const ErrorToast: Story = {
  render: (args: ToastProps) => <Toast {...args} />,
  args: {
    message: "An error occured",
    type: "error",
  },
};

export const ErrorToastLonger: Story = {
  render: (args: ToastProps) => <Toast {...args} />,
  args: {
    message: "An error occured",
    type: "error",
    duration: 6000,
  },
};
