import SidebarMenu from "react-bootstrap-sidebar-menu";
import "../assets/styles/layout.css";
import { menu_list } from "../utils/SidebarMenu.json";
import { Col } from "react-bootstrap";

const Sidebar = () => {
  const activeMenuClass = (menuLink) => {
    if (window.location.pathname === "/") {
      if (menuLink === "/") {
        return "active";
      }
      return "";
    }
    if (menuLink.includes(window.location.pathname)) {
      return "active";
    }
    return "";
  };

  return (
    <SidebarMenu>
      <SidebarMenu.Header>
        <SidebarMenu.Brand>{/* Your brand icon */}</SidebarMenu.Brand>
      </SidebarMenu.Header>
      <SidebarMenu.Body>
        {menu_list.map((menu) => (
          <SidebarMenu.Nav.Link href={menu.menu_link}>
            <SidebarMenu.Nav
              key={menu.menu_id}
              className={activeMenuClass(menu.menu_link)}
            >
              <SidebarMenu.Nav.Icon>{menu.menu_icon}</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>{menu.menu_name}</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav>
          </SidebarMenu.Nav.Link>
        ))}
      </SidebarMenu.Body>
      <p className="copyright">Copyright 2023 © Bangkok University</p>
    </SidebarMenu>
  );
};

export default Sidebar;
