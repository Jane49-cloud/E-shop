import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import SubLinks from "../Data/Links";
import { LibraryAddCheckSharp, Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface Props {}

const Navbar: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [submenuLocation, setSubmenuLocation] = useState<{
    center: number;
    bottom: number;
  }>({ center: 0, bottom: 0 });

  const openSubmenu = (
    page: string,
    coordinates: { center: number; bottom: number }
  ) => {
    setSubmenuLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const handleSubmenu = (e: React.MouseEvent) => {
    if (!(e.target as HTMLButtonElement).classList.contains("link-btn"))
      closeSubmenu();
  };

  const displaySubmenu = (e: React.MouseEvent) => {
    const page = (e.target as HTMLButtonElement).textContent || "";
    const tempBtn = (e.target as HTMLButtonElement).getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  function openSidebar(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    throw new Error("Function not implemented.");
  }

  return (
    <nav className="nav h-20 shadow" onMouseOver={handleSubmenu}>
      <div className="flex justify-around items-center p-4">
        <div className="flex items-center space-x-4">
          <img
            src={Logo}
            className="cursor-pointer object-cover"
            height={"50px"}
            width={"50px"}
            alt="logo"
            onClick={() => navigate("/")}
          />
          {isSubmenuOpen && (
            <button className="btn toggle-btn" onClick={openSidebar}>
              <Menu />
            </button>
          )}
        </div>
        <ul className="flex space-x-4">
          {SubLinks.map((item, index) => {
            const { links, page } = item;
            return (
              <li key={index} className="relative group ">
                <button
                  className="dp-btn  capitalize"
                  onMouseOver={(e) => displaySubmenu(e)}
                >
                  {page}
                </button>
                <ul
                  className={`${
                    isSubmenuOpen ? "block" : "hidden"
                  } absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 space-y-2 rounded-md shadow-lg transition duration-300`}
                  style={{
                    transform: `translate(${submenuLocation.center}px, ${submenuLocation.bottom}px)`,
                  }}
                >
                  {links.map((link, index) => {
                    const { url, label } = link;
                    return (
                      <li key={index}>
                        <a href={url} className="block px-2 py-1 capitalize">
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        {/* <div className="flex space-x-2">
          <button
            className="btn signin-btn"
            onClick={() => navigate("/newcar/stepone")}
          >
            <LibraryAddCheckSharp />
            new car
          </button>
          <button className="btn signin-btn" onClick={() => navigate("/login")}>
            Sign in
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
