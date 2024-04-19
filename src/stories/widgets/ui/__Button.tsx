// import type { Meta, StoryObj } from "@storybook/react";
// import { Button } from "@/widgets/ui/button";
// // If your directory structure is different, adjust the import path accordingly

// const meta: Meta<typeof Button> = {
//   title: "Widgets/UI/Button",
//   component: Button,
//   tags: ["autodocs"],
//   parameters: {
//     layout: "centered", // Changed from "fullscreen" to "centered" for better button display
//   },
//   // Add argTypes if you want to control the arguments of your story in a more detailed manner
//   argTypes: {
//     variant: {
//       control: "select",
//       options: ["default", "color", "border", "fill", "underline", "file"],
//       description: "버튼의 스타일을 선택합니다.",
//     },
//     size: {
//       control: "select",
//       options: ["default", "sm", "lg", "icon", "page", "underline", "file"],
//       description: "버튼의 크기를 선택합니다.",
//     },
//     disabled: {
//       control: "boolean",
//       description: "버튼의 활성화 여부를 선택합니다.",
//     },
//     asChild: {
//       control: "boolean",
//       description: "버튼을 자식 요소로 포함할지 여부를 선택합니다.",
//     },
//     // 다른 props에 대한 설정을 여기에 추가할 수 있습니다.
//   },
// } satisfies Meta<typeof Button>;

// export default meta;

// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {
//     children: "Click me",
//     variant: "default",
//     size: "default",
//     disabled: false,
//     asChild: false,
//   },
// };

// export const ColorVariant: Story = {
//   args: {
//     ...Default.args,
//     // variant: "color",
//   },
// };

// export const BorderVariant: Story = {
//   args: {
//     ...Default.args,
//     // variant: "border",
//   },
// };

// export const FillVariant: Story = {
//   args: {
//     ...Default.args,
//     // variant: "fill",
//   },
// };

// export const UnderlineVariant: Story = {
//   args: {
//     ...Default.args,
//     // variant: "underline",
//   },
// };

// export const FileVariant: Story = {
//   args: {
//     ...Default.args,
//     // variant: "file",
//   },
// };

// // Add more variants as needed
