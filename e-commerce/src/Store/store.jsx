import { create } from "zustand";

const useStore = create((set) => ({
  items: [],
  
  addCart: (item) => set((state) => ({items:[...state.items, item]})),

  removeItems: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),

}));

export default useStore;
