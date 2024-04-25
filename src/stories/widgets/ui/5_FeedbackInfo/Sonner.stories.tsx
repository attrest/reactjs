import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@/widgets/ui/sonner";
import { Button } from "@/widgets/ui/button";
import { toast } from "sonner";

const meta: Meta<typeof Toaster> = {
  title: "Widgets/UI/5. 피드백 및 정보/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story:
          "Toast와 비슷하지만, 메시지를 조금 더 부드럽게 표현합니다.<br>https://ui.shadcn.com/docs/components/sonner",
      },
    },
  },
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark", "system"],
      description: '토스트의 테마를 설정합니다. "light", "dark", "system" 중에서 선택할 수 있습니다.',
    },
    richColors: {
      control: "boolean",
      description: "에러와 성공 상태를 더 다채롭게 표현할지 여부를 결정합니다. 기본값은 false입니다.",
    },
    expand: {
      control: "boolean",
      description: "토스트가 기본적으로 확장된 상태로 표시될지 여부를 설정합니다. 기본값은 false입니다.",
    },
    visibleToasts: {
      control: "number",
      description: "화면에 동시에 표시될 수 있는 토스트의 최대 개수를 설정합니다. 기본값은 3입니다.",
    },
    position: {
      control: "select",
      options: ["bottom-right", "bottom-left", "top-right", "top-left"],
      description: '토스트가 화면의 어느 위치에 표시될지를 설정합니다. 기본값은 "bottom-right"입니다.',
    },
    closeButton: {
      control: "boolean",
      description: "모든 토스트에 닫기 버튼을 추가할지 여부를 설정합니다. 기본값은 false입니다.",
    },
    offset: {
      control: "text",
      description: '화면 가장자리로부터 토스트의 오프셋을 설정합니다. 기본값은 "32px"입니다.',
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description: '토스트 텍스트의 방향성을 설정합니다. "ltr"은 왼쪽에서 오른쪽, "rtl"은 오른쪽에서 왼쪽입니다.',
    },
    invert: {
      control: "boolean",
      description: "라이트 모드에서 다크 토스트를 사용하거나 그 반대의 경우도 적용합니다. 기본값은 false입니다.",
    },
    toastOptions: {
      control: "object",
      description:
        "모든 토스트에 적용될 기본 옵션을 설정합니다. 각 옵션에 대한 자세한 내용은 toast() 함수를 참조하세요.",
    },
    gap: {
      control: "number",
      description: "확장된 토스트 사이의 간격을 설정합니다. 기본값은 14입니다.",
    },
    pauseWhenPageIsHidden: {
      control: "boolean",
      description:
        "페이지가 숨겨진 경우, 예를 들어 탭이 백그라운드에 있거나 브라우저가 최소화되었을 때 토스트 타이머를 일시 중지합니다. 기본값은 false입니다.",
    },
  },
} satisfies Meta<typeof Toaster>;

export default meta;

export const Default: StoryObj<typeof Toaster> = {
  args: {},
  render: (args) => {
    return (
      <>
        <Button variant="outline" onClick={() => toast("Event has been created.")}>
          Show Toast
        </Button>
        <Toaster {...args} />
      </>
    );
  },
};
