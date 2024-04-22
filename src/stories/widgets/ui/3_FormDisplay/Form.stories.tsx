import type { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/widgets/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/widgets/ui/form";
import { Input } from "@/widgets/ui/input";

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

const meta: Meta<typeof Form> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/form",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;

export const Default: StoryObj<typeof Form> = {
  args: {},
  render: (args) => {
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
      <Form {...form}>
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
      </Form>
    );
  },
};
