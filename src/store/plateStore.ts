import { create } from 'zustand';

interface PlateState {
  text: string;
  backgroundColor: string;
  textColor: string;
  material: string;
  size: string;
  price: number;
  updateText: (text: string) => void;
  updateBackgroundColor: (color: string) => void;
  updateTextColor: (color: string) => void;
  updateMaterial: (material: string) => void;
  updateSize: (size: string) => void;
}

export const usePlateStore = create<PlateState>((set) => ({
  text: '',
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
  material: 'aluminum',
  size: 'standard',
  price: 15000,
  
  updateText: (text) => set({ text }),
  updateBackgroundColor: (color) => set({ backgroundColor: color }),
  updateTextColor: (color) => set({ textColor: color }),
  updateMaterial: (material) => set({ material }),
  updateSize: (size) => set({ size }),
}));