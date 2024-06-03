import { useEffect, useRef, useState } from "react";

import { GrMenu } from "react-icons/gr";
import { Link } from "react-scroll";

import styles from "./Navbar.module.css";

type NavbarComponentProps = {
  handleRestOfViewport: (value: number) => void;
};

const NavbarComponent = ({ handleRestOfViewport }: NavbarComponentProps) => {
  const navbarComponentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleRestOfViewport(navbarComponentRef.current?.clientHeight || 0);
  }, []);

  const routes = [
    { path: "user-information", name: "Home" },
    { path: "about-me", name: "About us" },
    { path: "our-services", name: "Our Services" },
    { path: "contact-us", name: "Contact us" },
    { path: "faq", name: "FAQ" },
  ];

  const [activeRoute, setActiveRoute] = useState(routes[0].path);
  const [showNav, setShowNav] = useState(false);

  const handleActiveRoute = (path: string) => {
    setActiveRoute(path);
  };

  const handleShowNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className={styles.navbar} ref={navbarComponentRef}>
      <div className={styles.container}>
        <div className={styles.menuIcon} onClick={handleShowNavbar}>
          <GrMenu />
        </div>
        <div
          className={`${styles.navElements} ${showNav ? styles.active : ""}`}
        >
          <ul>
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  smooth={true}
                  offset={-60}
                  duration={500}
                  to={route.path}
                  onClick={() => {
                    handleActiveRoute(route.path);
                    handleShowNavbar();
                  }}
                  className={activeRoute === route.path ? styles.active : ""}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
