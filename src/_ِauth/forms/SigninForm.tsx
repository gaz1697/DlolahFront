import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SigninForm = () => {
  return (
    <div>
      <div>hello</div>
      <NavigationMenu></NavigationMenu>
      <Label htmlFor="email">Your email address</Label>
    </div>
  );
};

export default SigninForm;
