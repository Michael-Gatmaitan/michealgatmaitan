"use client";

import { useSideMenu } from "@/store/side-menu-store";

const Menu = () => {
  const { showSideMenu, setShowSideMenu } = useSideMenu();

  return (
    <div className="h-14 w-14 lg:w-16 lg:h-16 bg-red-300 opacity-100 lg:opacity-0 pointer-events-auto lg:pointer-events-none" onClick={() => setShowSideMenu()}>
      {showSideMenu ? 'true' : 'false'}
    </div>
  )
}

export default Menu