import { IconType } from "react-icons/lib";

export default interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}