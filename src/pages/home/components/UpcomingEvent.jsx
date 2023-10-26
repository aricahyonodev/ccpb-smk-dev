import React from "react";
import Label1Regular from "../../../components/labels/Labe1Regular";
import Label1Medium from "../../../components/labels/Label1Medium";
import Label2Medium from "../../../components/labels/Label2Medium";
import Paragraf2Medium from "../../../components/paragrafs/Paragraf2Medium";
import Paragraf1Bold from "../../../components/paragrafs/Paragraf1Bold";

const Card = () => {
  return (
    <div className="w-[308px] bg-surface-100 p-4 rounded-[20px] border-[1px] shadow-sm border-surface-100">
      <img
        src="./assets/images/maher-zhein-banner.png"
        className="mb-4 w-full"
        alt=""
      />
      <Label2Medium>
        <img
          src="./assets/icons/location.svg"
          className="inline-block"
          alt=""
        />
        <span className="text-neutral-500 uppercase ml-1 pr-3 mr-3 border-r-2 border-neutral-200">bandung</span>
        <span className="text-primary-500 uppercase">DAY, MON TANGGAL</span>
      </Label2Medium>
      <h1 className="font-bold text-lg my-1">Judul Blog</h1>
      <Label1Regular style={"text-tertiary-300"}>
        Lorem ipsum dolor sit amet consectet
      </Label1Regular>
      <div className="flex my-3">
        <Paragraf1Bold>
          <span className="text-primary-500">IDR 1.999.000</span>
        </Paragraf1Bold>
        <Paragraf2Medium>
          <span className="text-tertiary-500">/ 1 Person</span>
        </Paragraf2Medium>
      </div>

      <button className="py-[6px] w-full rounded-xl bg-[#EAF2E2]">
        <Label1Medium>
          <span className="text-success-900">Tersedia</span>
        </Label1Medium>
      </button>
    </div>
  );
};

const UpcomingEvent = () => {
  return (
    <div className="px-7 pt-10 bg-surface-200 h-[500px]">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-xl">Upcoming Event</h2>
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

export default UpcomingEvent;
