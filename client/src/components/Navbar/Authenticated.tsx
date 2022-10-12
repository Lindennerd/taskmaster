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
          <button className="hover:bg-secondary_light dark:hover:bg-secondary_dark p-1 rounded-full">
            <UserBusiness className="text-xl" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem>
            Theme <ThemeSwitcher />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
