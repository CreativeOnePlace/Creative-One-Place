
export type PackageCategory = "web" | "graphic" | "social";

export interface PackageItem {
  title: string;
  included: boolean;
}

export interface Package {
  id: string;
  title: string;
  description: string;
  price: string;
  features: PackageItem[];
  popular?: boolean;
  category: PackageCategory;
  image?: string;
}
