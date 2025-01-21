import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PLN",
  });

  return formatter.format(price);
};

export function constructMetadata({
  title = "CaseCobra - spersonalizowane, wysokiej jakości etui na telefon",
  description = "Stwórz swoje spersonalizowane, wysokiej jakości etui na telefon w chwilę!",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@CaseCobra",
    },
    icons,
    metadataBase: new URL("https://casecobra-dev-lovat.vercel.app/"),
  };
}
