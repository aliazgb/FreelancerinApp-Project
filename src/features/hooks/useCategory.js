import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../service/categoryService";

export default function useCategory() {
  const { data, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  const { categories: rawCategories =[]} = data || {};

  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  console.log(categories);
  const transFormedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { categories, isPending };
}
