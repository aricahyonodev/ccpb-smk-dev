import React from "react";

const Card = () => {
  return (
    <div className="w-[308px] bg-surface-100 p-4 rounded-[20px] border-2 shadow-sm border-surface-100">
      <img src="./assets/images/card-popular-blog.png" className="mb-4 w-full" alt="" />
      <p className="font-medium text-xs text-primary-500">DAY, MON TANGGAL</p>
      <h1 className="font-bold text-lg my-1">Judul Blog</h1>
      <p className="text-sm text-tertiary-300">
        Lorem ipsum dolor sit amet consectetur. Porta morbi tincidunt phasellus
        ornare maecenas fringilla arcu non.
      </p>
    </div>
  );
};

const PopularBlog = () => {
  return (
    <div className="px-7 mt-2 pt-10 bg-surface-200 h-[500px]">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-xl">Popular Blog</h2>
        </div>
        <div>
          <p className="text-sm font-medium">See All</p>
        </div>
      </div>

      <div className="relative w-[105%] top-6 overflow-x-clip">
        <div className="absolute z-0 top-0 flex gap-5">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default PopularBlog;
