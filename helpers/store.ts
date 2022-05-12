import create from 'zustand';

interface AppStore {
  screenWidth: number;
  setScreenWidth: (screenWidth: number) => void;
}

const useStore = create<AppStore>((set) => ({
  screenWidth: 0, // Screen width so components know what the size of the display is so they can change accordingly
  setScreenWidth: (screenWidth: number) => set({ screenWidth }), // This is ran whenever the display size changes
}));

export default useStore;
