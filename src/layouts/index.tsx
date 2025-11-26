import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="relative">
      {isOpen ? (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed w-screen h-screen z-999 bg-[#21273f79] flex justify-center pt-40"
        >
          <div className="p-4 h-fit rounded-lg bg-[#21273f] text-white min-w-[360px]">
            <h3 className="text-lg font-medium mb-4">Pages</h3>
            <NavLink to="/" className="p-2 rounded bg-[#3047a3] w-full block">
              1. Navistride
            </NavLink>
          </div>
        </div>
      ) : null}
      <button
        className="fixed bg-[#21273f] cursor-pointer animate-pulse text-white p-4 rounded-full z-50 top-4 right-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={20} />
      </button>
      <Outlet />
    </main>
  );
};

export default RootLayout;
