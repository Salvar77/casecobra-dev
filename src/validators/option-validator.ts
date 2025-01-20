// bg-blue-950 border-blue-950
// bg-zinc-950 border-zinc-950
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  {
    label: "Czarny",
    value: "black",
    tw: "zinc-950",
  },
  {
    label: "Niebieski",
    value: "blue",
    tw: "blue-950",
  },
  {
    label: "Czerwony",
    value: "rose",
    tw: "rose-950",
  },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone X",
      value: "iphonex",
    },
    {
      label: "iPhone 11",
      value: "iphone11",
    },
    {
      label: "iPhone 12",
      value: "iphone12",
    },
    {
      label: "iPhone 13",
      value: "iphone13",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      label: "iPhone 15",
      value: "iphone15",
    },
    {
      label: "iPhone 16",
      value: "iphone16",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silikon",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "miękki poliwęglan",
      value: "polycarbonate",
      description: "powłoka odporna na zarysowania",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Gładkie wykończenie",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Teksturowane wykończenie",
      value: "textured",
      description: "miękka, przyczepna konsystencja",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
