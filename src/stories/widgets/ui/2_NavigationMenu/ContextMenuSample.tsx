import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/widgets/ui/context-menu";

export const ContextMenuSample = ({ ...args }) => {
  return (
    <ContextMenu {...args}>
      <ContextMenuTrigger>
        <div className="flex items-center justify-center flex-col w-[20rem] h-[10rem] border">
          Right click<small className="block mt-2 text-gray-400">마우스 오른쪽 버튼을 눌러주세요.</small>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
ContextMenuSample.displayName = "ContextMenu";
