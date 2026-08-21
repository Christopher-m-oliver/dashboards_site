import type { CategoryKey } from "@/data/overview-mock";

interface CategoryStyle {
  dot: string;
  text: string;
}

export const categoryStyles: Record<CategoryKey, CategoryStyle> = {
  fitness: {
    dot: "bg-category-fitness",
    text: "text-category-fitness",
  },
  financas: {
    dot: "bg-category-financas",
    text: "text-category-financas",
  },
  produtividade: {
    dot: "bg-category-produtividade",
    text: "text-category-produtividade",
  },
  estudos: {
    dot: "bg-category-estudos",
    text: "text-category-estudos",
  },
};