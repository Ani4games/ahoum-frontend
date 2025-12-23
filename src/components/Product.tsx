export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  isFavorite: boolean;
  quantity: number;
  unit?: string;
}
const Product: Product = {
  id: "1",
  image: "https://via.placeholder.com/150",
  name: "Sample Product",
  price: 10,
  isFavorite: false,
  quantity: 1
};
export default Product;