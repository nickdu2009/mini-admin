import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LoginUserInfo } from "@/api/admin/sys/sys-user";
import { RouteObjectType } from "@/api/admin/sys/sys-menu";

interface ThemeConfig {
  primary: string;
  isDark: boolean;
  breadcrumb: boolean;
  tabs: boolean;
  footer: boolean;
}

interface GlobalState {
  token: string;
  userInfo: LoginUserInfo | null;
  routeList: RouteObjectType[] | null;
  assemblySize: string;
  language: string;
  themeConfig: ThemeConfig;

  // Actions
  setToken: (token: string) => void;
  setUserInfo: (userInfo: LoginUserInfo | null) => void;
  setRouteList: (routeList: RouteObjectType[] | null) => void;
  setAssemblySize: (assemblySize: string) => void;
  setLanguage: (language: string) => void;
  setThemeConfig: (themeConfig: ThemeConfig) => void;
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      // 初始状态
      token: "",
      userInfo: null,
      routeList: null,
      assemblySize: "middle",
      language: "zh",
      themeConfig: {
        primary: "#1890ff",
        isDark: false,
        breadcrumb: true,
        tabs: true,
        footer: true
      },

      // Actions
      setToken: (token) => set({ token }),
      setUserInfo: (userInfo) => set({ userInfo }),
      setRouteList: (routeList) => set({ routeList }),
      setAssemblySize: (assemblySize) => set({ assemblySize }),
      setLanguage: (language) => set({ language }),
      setThemeConfig: (themeConfig) => set({ themeConfig }),
    }),
    {
      name: "global-storage", // 存储的键名
    }
  )
);