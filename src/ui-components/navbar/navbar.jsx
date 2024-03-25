import { useContext } from "react";
import BreadCrumb from "../breadcrumbs/breadcrumbs";
import { BreadCrumbContext } from "../../context/breadcrumbContext";
import { Show } from "../../components";
import NavbarDesktop from "./navbarDesktop";
import { useMobile } from "../../context/mobileContext";
import DropdownMenu from "./dropdownMenu";

const Navbar = () => {
  const { breadcrumbs } = useContext(BreadCrumbContext);
  const { isMobile } = useMobile();

  return (
    <nav className="d-flex justify-content-between align-items-center">
      <div className="">
        <BreadCrumb crumbs={breadcrumbs} />
      </div>
      {/* Condicional que muestre navMobile o navDesktop */}
      <Show>
        <Show.When isTrue={isMobile}>
          <DropdownMenu />
        </Show.When>
        <Show.Else>
          <NavbarDesktop />
        </Show.Else>
      </Show>
    </nav>
  );
};

export default Navbar;
