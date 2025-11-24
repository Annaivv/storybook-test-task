import { Meta, StoryObj } from "@storybook/react";
import Toast, { ToastProps } from "./Toast";

export default {
  title: "Toast",
  component: Toast,
} as Meta<typeof Toast>;

type Story = StoryObj<typeof Toast>;

// export interface ToastProps {
//   message: string;
//   type?: ToastType;
//   duration?: number;
//   onClose?: () => void;
//   showCloseButton?: boolean;
// }

export const InfoToast: Story = {
  render: (args: ToastProps) => <Toast {...args} />,
  args: {
    message: "We have some info for you",
  },
};
