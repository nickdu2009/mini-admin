import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface MenuState {
  isCollapse: boolean;
  menuList: Menu.MenuOptions[];

  // Actions
  setIsCollapse: (isCollapse: boolean) => void;
  setMenuList: (menuList: Menu.MenuOptions[]) => void;
}

export const useMenuStore = create<MenuState>()(
  persist(
    (set) => ({
      // 初始状态
      isCollapse: false,
      menuList: [],



      // Actions
      setIsCollapse: (isCollapse) => set({ isCollapse }),
      setMenuList: (menuList) => set({ menuList }),
    }),
    {
      name: "global-storage", // 存储的键名
    }
  )
);