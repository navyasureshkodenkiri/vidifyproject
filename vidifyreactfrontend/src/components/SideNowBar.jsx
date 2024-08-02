import React from "react";
import { IoHome } from "react-icons/io5";
import { GiFire, GiMusicSpell, GiFilmProjector } from "react-icons/gi";
import { FaGamepad, FaRegLaugh } from "react-icons/fa";

export default function SideNowBar() {
  const menuItems = [
    {
      icon: <IoHome size={20} />,
      name: "Home",
      link: "/",
    },
    {
      icon: <GiFire size={20} />,
      name: "Trending",
      link: "/trending",
    },
    {
      icon: <GiFire size={20} />,
      name: "Trending",
      link: "/trending",
    },
  ];

  const categoryItem = [
    {
      icon: <GiMusicSpell size={20} />,
      name: "Music",
      link: "/category/music",
    },
    {
      icon: <GiFilmProjector size={20} />,
      name: "Movies",
      link: "/category/movies",
    },
    {
      icon: <FaGamepad size={20} />,
      name: "Gaming",
      link: "/category/gaming",
    },
    {
      icon: <FaRegLaugh size={20} />,
      name: "Comedy",
      link: "/category/comedy",
    },
   

  ];

  function NavItem({ icon, name, link }) {
    return (
      <div className="nav-icon-content">
        <span className="nav-icon">{icon}</span>
        <span className="nav-icon-name">{name}</span>
      </div>
    );
  }

  return (
    <aside className="side-now-bar">
      {menuItems.map((item, index) => (
        <NavItem key={index} icon={item.icon} name={item.name} link={item.link} />
      ))}

      <hr />

      {categoryItem.map((item, index) => (
        <NavItem key={index} icon={item.icon} name={item.name} link={item.link} />
      ))}
    </aside>
  );
}
