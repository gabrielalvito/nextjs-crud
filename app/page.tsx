import AddProduct from "./components/addProduct";
import DeleteProduct from "./components/deleteProduct";
import UpdateProduct from "./components/updateProduct";

type Product = {
  id: number;
  title: string;
  price: number;
};

async function getProducts() {
  const response = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  return response.json();
}

export default async function ProductList() {
  const products: Product[] = await getProducts();
  return (
    <div className="px-20 py-20 overflow-x-auto">
      <h3 className="text-center text-base font-bold">Simple CRUD using Next.js</h3>
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table mt-5">
        <thead>
          <tr className="text-base text-center bg-base-200">
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="text-center">
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="flex justify-center gap-1">
                <UpdateProduct{...product} />
                <DeleteProduct{...product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
