import { Meta, StoryObj } from "@storybook/react";
import SidebarMenu from "./SidebarMenu";
import { menuItems } from "./menu";

export default {
  title: "SidebarMenu",
  component: SidebarMenu,
  args: {
    menuItems: menuItems,
    initialActive: false,
    initialOpenItems: [],
  },
} as Meta<typeof SidebarMenu>;

type Story = StoryObj<typeof SidebarMenu>;

export const ClosedMenu: Story = {};

export const OpenedMenu: Story = {
  args: {
    initialActive: true,
  },
};
