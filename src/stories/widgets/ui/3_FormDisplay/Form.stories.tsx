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

// 임시 돔 생성
type BlankDomProps = {
  [key: string]: any;
};
const BlankDom = ({ ...props }: BlankDomProps) => {
  return <></>;
};

const meta: Meta<typeof BlankDom> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/Form",
  component: BlankDom,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "여러 입력 필드를 그룹화합니다.<br>https://ui.shadcn.com/docs/components/form",
      },
    },
  },
  argTypes: {
    useForm: {
      control: "object",
      description:
        "폼을 검증하기 위한 강력한 커스텀 훅입니다. 최소한의 리렌더링으로 폼 검증을 수행합니다.<br>https://react-hook-form.com/docs/useform",
    },
    useController: {
      control: "object",
      description:
        "제어 컴포넌트를 위한 훅으로, useForm 메소드와의 인터페이스를 제공하며 개별 컴포넌트의 리렌더링을 격리합니다.<br>https://react-hook-form.com/docs/usecontroller",
    },
    useFormContext: {
      control: "object",
      description:
        "중첩된 컴포넌트에서 useForm 메소드와 속성에 접근할 수 있습니다. 큰 규모의 폼 및 공유 컴포넌트 구축에 적합합니다.<br>https://react-hook-form.com/docs/useformcontext",
    },
    useWatch: {
      control: "object",
      description:
        "폼 입력의 개별 변경 사항을 구독하며, 루트 컴포넌트의 렌더링에 영향을 주지 않습니다.<br>https://react-hook-form.com/docs/usewatch",
    },
    useFormState: {
      control: "object",
      description:
        "개별 폼 상태 업데이트를 구독하고 훅 수준에서 리렌더링을 격리합니다.<br>https://react-hook-form.com/docs/useformstate",
    },
    useFieldArray: {
      control: "object",
      description:
        "동적으로 생성된 필드를 즉시 관리하고, 필드를 셔플, 제거 및 추가할 수 있습니다. 복잡한 CRUD 데이터 입력 시나리오에 이상적입니다.<br>https://react-hook-form.com/docs/usefieldarray",
    },
  },
} satisfies Meta<typeof BlankDom>;

export default meta;

export const Default: StoryObj<typeof BlankDom> = {
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
