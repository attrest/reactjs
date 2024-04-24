import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/widgets/ui/card";

export const CardSample = ({ ...args }) => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
CardSample.displayName = "Card";
