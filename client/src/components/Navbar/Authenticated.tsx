import { UserBusiness } from "@icon-park/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "../UI/ThemeSwitcher";
import { LogoutButton } from "./LogoutButton";

export function AuthenticatedNavbar() {
  return (
    <div className="flex gap-4 items-center box-border">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="hover:bg-secondary_light dark:hover:bg-secondary_dark p-1 
          rounded-full outline-none"
          >
            <UserBusiness className="text-xl" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="rounded-md bg-secondary_light dark:bg-secondary_dark 
        shadow-md p-2"
        >
          <DropdownMenuItem>
            <ThemeSwitcher displayThemeName={true} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
