import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-screen bg-gray-800">
        <section className="w-full bg-red-400">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 my-10 lg:grid-cols-2">
              <div className="text-center text-white my-auto mx-4">
                <h1 className="font-GT-Pressura-Regular font-bold text-3xl">
                  WANT DISCOUNTS?
                </h1>
                <h2 className="font-GT-Pressura-Regular text-xl">
                  Join our mail list for news & coupons
                </h2>
              </div>
              <div className="py-2 mx-4 lg:py-10">
                    <div>
                        <img src="https://www.nicepng.com/png/full/20-206687_discount-sale-banners-png-lark-books-hemp-macrame.png" alt="" />
                    </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
