import React from 'react'
import Label2Medium from '../labels/Label2Medium';
import Paragraf1Bold from '../paragrafs/Paragraf1Bold';
import Label1Regular from '../labels/Labe1Regular';
import Label1Medium from '../labels/Label1Medium';
import Paragraf2Medium from '../paragrafs/Paragraf2Medium';

const CardEventSmall = () => {
  return (
    <div className=" bg-surface-100 rounded-[20px] border-[1px] shadow-lg border-surface-100">
      <img
        src="./assets/images/maher-zhein-banner.png"
        className="mb-4 w-full"
        alt=""
      />
      <div className="p-2">
        <Label2Medium>
          <img
            src="./assets/icons/location.svg"
            className="inline-block"
            alt=""
          />
          <span className="text-neutral-500 uppercase ml-1 pr-3 mr-3 border-r-2 border-neutral-200">
            bandung
          </span>
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
    </div>
  );
}

export default CardEventSmall