import axios from "axios";
import { ProductsResponse } from "../types/product";

const PRODUCTS_URL = "/products.json";

export const fetchProducts = async (): Promise<ProductsResponse> => {
  const response = await axios.get(PRODUCTS_URL);
  return response.data;
}