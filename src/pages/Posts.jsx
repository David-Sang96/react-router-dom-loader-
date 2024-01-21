/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Link, json, useLoaderData } from "react-router-dom";
import User from "../components/User";

const Product = () => {
  const Products = useLoaderData();
  return (
    <div className="space-y-6">
      <div className="text-2xl text-center font-bold ">Posts</div>
      <div className="space-y-3">
        {Products.map((item) => (
          <div
            className="border shadow-lg p-3 text-black bg-white"
            key={item.id}
          >
            <Link to={`/product/${item.id}`}>
              <User userId={item.userId} />
              <p>{item.body}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw json({ message: "Can't get posts now." }, { status: 500 });
  }
  const data = await response.json();
  return data;
};
