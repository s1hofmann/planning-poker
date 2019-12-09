import { get, set } from "idb-keyval";

export const loadThemeData = async () => {
  try {
    return get("currentTheme");
  } catch (e) {
    console.error(e);
  }
};

export const saveThemeData = async currentTheme => {
  try {
    await set("currentTheme", currentTheme);
  } catch (e) {
    console.error(e);
  }
};
