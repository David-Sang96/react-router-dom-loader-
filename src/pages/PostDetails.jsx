/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { Link, json, useLoaderData } from "react-router-dom";
import User from "../components/User";

const ProductDetails = () => {
  const post = useLoaderData();
  const { userId, title, body } = post;

  return (
    <div>
      <h2 className="text-xl mb-5 font-bold text-center">Post Details</h2>
      <div>
        <User userId={userId} />
        <div className="mt-3">
          <span className="text-lg">Title : </span>
          {title}
        </div>
        <div>
          <span className="text-lg">Body : </span> {body}
        </div>
      </div>
      <div className="mt-5 text-center">
        <Link to={"/products"} className="border-2 px-2 py-1">
          go back
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;

export const loader = async ({ req, params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  if (!res.ok) {
    throw json({ message: "Can't find your post" }, { status: 404 });
  }
  const post = await res.json();
  return post;
};
