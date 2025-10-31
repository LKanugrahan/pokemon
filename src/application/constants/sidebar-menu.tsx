import {
  Category,
  Profile,
  Profile2User,
  Shapes,
  TaskSquare,
  UsdCoin,
  VolumeHigh,
} from "iconsax-react";

interface SubMenuItem {
  name: string;
  path: string;
}
interface MenuItem {
  name: string;
  path: string;
  logo: React.ReactNode;
  child?: SubMenuItem[];
  expand?: boolean;
}

const menuItems: MenuItem[] = [
  { name: "Pokemon List", path: "/pokemon-list", logo: <Category size={24} /> },
  {
    name: "Control Panel",
    path: "#",
    logo: <Profile size={24} />,
    child: [
      { name: "Role", path: "/control-panel/role" },
      { name: "Control Panel", path: "/control-panel/control-panel" },
    ],
  },
 
  {
    name: "Ads Banner",
    path: "/ads-banner",
    logo: <VolumeHigh size={24} />,
  },
  {
    name: "Widget",
    path: "/widget",
    logo: <Shapes size={24} />,
  },
];

export { menuItems };
export type { MenuItem };
