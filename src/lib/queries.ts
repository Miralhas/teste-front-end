import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./api";

export const useProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });
}