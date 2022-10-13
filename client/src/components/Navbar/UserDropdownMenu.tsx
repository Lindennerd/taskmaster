import { UserBusiness } from "@icon-park/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useTransition } from "react-spring";
import { ThemeSwitcher } from "../UI/ThemeSwitcher";
import { LogoutButton } from "./LogoutButton";

export function UserDropdownMenu() {
  // TODO Implement transitions
  // const transitions = useTransition();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="hover:bg-secondary_light dark:hover:bg-secondary_dark p-1 
      rounded-full outline-none flex flex-col gap-2"
        >
          <UserBusiness className="text-xl" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="rounded-md bg-secondary_light dark:bg-secondary_dark 
    shadow-md p-2"
      >
        <DropdownMenuItem className="hover:border-b-2 ">
          <ThemeSwitcher displayThemeName={true} />
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:border-b-2 p-1">
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
