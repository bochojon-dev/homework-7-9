// import React from "react";

// async function getData() {
//   const res = await fetch("https://dummyjson.com/");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
// const Products = async () => {
//   const data = await getData();
//   console.log(data);
//   return (
//     <div>
//       <h2>Products</h2>
//     </div>
//   );
// };
// export default Products;

"use client";
import React from "react";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Products = ({ data, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const data = await getData();
    console.log(data);
    return { props: { data } };
  } catch (error) {
    return { props: { error: error.message } };
  }
}

export default Products;
