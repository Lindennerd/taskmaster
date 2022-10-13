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
import { SearchBar } from "./SearchBar";
import { UserDropdownMenu } from "./UserDropdownMenu";

export function AuthenticatedNavbar() {
  return (
    <div className="flex gap-4 items-center box-border">
      <SearchBar />
      <UserDropdownMenu />
    </div>
  );
}
