import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Profile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 text-sm">
          <Avatar className="w-7 h-7">
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <span className="flex flex-col items-start leading-tight">
            <span className="text-sm font-bold">Hello, Ashish</span>
            <span className="text-xs text-neutral-500">My Account</span>
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-sm">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Orders</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;