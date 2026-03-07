"use client";

import { useSideMenu } from "@/store/side-menu-store";

const SideMenu = () => {
  const { showSideMenu, setShowSideMenu } = useSideMenu();
  if (!showSideMenu) return null;

  return (
    <aside
      className="fixed inset-0 z-50 w-full h-full bg-red-500 opacity-100 lg:hidden px-4 py-3"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full flex justify-end">
        <div className="h-14 w-14 lg:w-16 lg:h-16 bg-red-400" onClick={() => setShowSideMenu()}>
          Close
        </div>
      </div>
    </aside>
  )
}

export default SideMenu