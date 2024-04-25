import type { Meta, StoryObj } from "@storybook/react";
import StoryGrid from "@/stories/components/StoryGrid";

import { Calendar } from "@/widgets/ui/calendar";
import React from "react";
import { Checkbox } from "@/widgets/ui/checkbox";
import { Combobox } from "@/widgets/ui/combobox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/widgets/ui/dropdown-menu";
import { Button } from "@/widgets/ui/button";
import { DatePicker } from "@/widgets/ui/date-picker";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/widgets/ui/form";
import { Input } from "@/widgets/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/widgets/ui/input-otp";
import { Label } from "@/widgets/ui/label";
import { RadioGroup, RadioGroupItem } from "@/widgets/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/widgets/ui/select";
import { Slider } from "@/widgets/ui/slider";
import { Switch } from "@/widgets/ui/switch";
import { Textarea } from "@/widgets/ui/textarea";

// 폼 스키마를 zod를 사용하여 정의
const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50, {
      message: "Username must be no more than 50 characters.",
    }),
});

const meta: Meta<typeof StoryGrid> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시",
  component: StoryGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "기본 UI Dashboard",
      },
    },
  },
  argTypes: {
    cols: {
      control: "number",
      description: "그리드의 column을 변경합니다.",
    },
  },
} satisfies Meta<typeof StoryGrid>;

export default meta;

export const All: StoryObj<typeof StoryGrid> = {
  args: {
    cols: 3,
  },
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date("2024-04-22"));

    // useForm 훅을 사용하여 폼을 설정
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    });

    // 폼 제출 핸들러 정의
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
    }
    return (
      <StoryGrid
        {...args}
        items={[
          <Calendar key="calendar" mode="single" selected={date} className="rounded-md border" onSelect={setDate} />,
          //
          <Checkbox key="checkbox" />,
          //
          <Combobox
            key="combobox"
            items={[
              {
                value: "nextjs",
                label: "Next.js",
              },
              {
                value: "nuxtjs",
                label: "nuxt.js",
              },
            ]}
          />,
          //
          <DatePicker key="datepicker" />,
          //
          <DropdownMenu key="dropdownMenu">
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>,
          //
          <Form {...form} key="form">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[20rem]">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>,
          //
          <Input key="input" />,
          //
          <InputOTP maxLength={6} key="inputOtp">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>,
          //
          <RadioGroup key="radioGroup">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>,
          //
          <Select key="select">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>,
          //
          <Slider key="slider" className="w-[10rem]" />,
          //
          <Switch key="switch" />,
          <Textarea key="textarea" />,
        ]}
      />
    );
  },
};
