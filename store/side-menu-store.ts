import { create } from "zustand";

interface SideMenuStoreState {
  showSideMenu: boolean;
  setShowSideMenu: () => void;
}

export const useSideMenu = create<SideMenuStoreState>((set) => ({
  showSideMenu: false,
  setShowSideMenu: () =>
    set((state) => ({ showSideMenu: !state.showSideMenu })),
}));
