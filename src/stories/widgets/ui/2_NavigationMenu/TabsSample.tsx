import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/widgets/ui/tabs";

export const TabsSample = ({ ...args }) => {
  return (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};
TabsSample.displayName = "Tabs";
