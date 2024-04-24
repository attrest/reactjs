import { Avatar, AvatarFallback, AvatarImage } from "@/widgets/ui/avatar";

export const AvatarSample = ({ ...args }) => {
  return (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
AvatarSample.displayName = "Avatar";
