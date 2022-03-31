import PackDetails from "../pages/PackDetails.page";
import Collection from "../pages/Collection.page";
import Dappies from "../pages/Dappies.page";
import Packs from "../pages/Packs.page";
import Home from "../pages/Home.page";

export const ROUTES = [
  { name: "Home", path: "/", component: Home, nav: true },
  { name: "Pieces", path: "/dappies", component: Dappies, nav: true },
  { name: "Showcase", path: "/collection", component: Collection, nav: true },
  { name: "Collections", path: "/packs", component: Packs, nav: true },
  {
    name: "PackDetails",
    path: "/packs/:packID",
    component: PackDetails,
    nav: false,
  },
];

export const NAV_ROUTES = ROUTES.filter((r) => r.nav);
