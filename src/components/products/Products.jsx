// // import React from "react";

// // async function getData() {
// //   const res = await fetch("https://dummyjson.com/");

// //   if (!res.ok) {
// //     throw new Error("Failed to fetch data");
// //   }

// //   return res.json();
// // }
// // const Products = async () => {
// //   const data = await getData();
// //   console.log(data);
// //   return (
// //     <div>
// //       <h2>Products</h2>
// //     </div>
// //   );
// // };
// // export default Products;

// "use client";
// import React from "react";

// async function getData() {
//   const res = await fetch("https://dummyjson.com/products");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// const Products = ({ data, error }) => {
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Products</h2>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   try {
//     const data = await getData();
//     console.log(data);
//     return { props: { data } };
//   } catch (error) {
//     return { props: { error: error.message } };
//   }
// }

// export default Products;

"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

const Products = ({ data, title }) => {
  const cardItems = data?.products?.map((item) => (
    <div key={item?.id} className="product">
      <div className="product__img">
        {item?.images.length <= 1 ? (
          <img src={item?.images[0]} alt={item?.title} className="img" />
        ) : (
          <>
            <img
              src={item?.images[0]}
              alt={item?.title}
              className="product__img-1 img"
            />
            <img
              src={item?.images[1]}
              alt={item?.title}
              className="product__img-2 img"
            />
          </>
        )}
        <div className="top">TOP</div>
      </div>
      <p title={item?.description} className="product__desc">
        {item?.description}
      </p>
      <div className="product__rating">
        <FaStar className="star" />
        <span>{item?.rating}</span>
        <span>{item?.stock} ta xarid</span>
      </div>
      <h4 className="product__price">
        {(item?.price * 12500).brm("int", 1)} UZS
      </h4>
    </div>
  ));
  return (
    <div className="container">
      <h2 style={{ marginTop: "50px" }}>{title}</h2>
      <div className="product__wrapper">{cardItems}</div>
    </div>
  );
};

export default Products;
