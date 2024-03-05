const fetchProductData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/products`);

    const data = await res.json();
    return data.item;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export default async function Product() {
  const productData = await fetchProductData();
  console.log(productData.slice(0, 3));
  return (
    <div>
      {productData.slice(0, 3).map((product: any) => {
        return (
          <div key={product._id}>
            <div>id: {product._id}</div>
            <div>price: {product.price}</div>
            <div>name: {product.name}</div>
          </div>
        );
      })}
    </div>
  );
}
