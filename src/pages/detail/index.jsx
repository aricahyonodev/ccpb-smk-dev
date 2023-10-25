import React from 'react'
import TopNavigation from '../../components/TopNavigation'
import Paragraf2Bold from '../../components/paragrafs/Paragraf2Bold'
import Paragraf2Regular from "../../components/paragrafs/Paragraf2Regular";
import Headline2Bold from "../../components/headings/Headline2Bold";
import Label2Medium from "../../components/labels/Label2Medium";
import Label1Regular from "../../components/labels/Labe1Regular";
import Label1Medium from "../../components/labels/Label1Medium";
import SubHeading2Bold from "../../components/subheadings/SubHeading2Bold";
import ButtonSmall from "../../components/buttons/ButtonSmall";

const PopUp = () => {
  return(
    <div className="absolute top-16 left-0 right-0 flex justify-center shadow-md py-10 rounded-[20px] bg-surface-100">
      <div className="flex-row basis-8/12 w-full">
        {/* Header */}
        <div className="flex items-center gap-x-2">
          <div className="basis-4/12 text-center">
            <img
              src="./assets/icons/find.svg"
              className="inline-block"
              alt=""
            />
          </div>
          <div className="basis-full">
            <Paragraf2Bold className={`text-neutral-900`}>
              Want to see more details?
            </Paragraf2Bold>
            <Label1Regular className={`text-neutral-500`}>
              Login first to enter this page!
            </Label1Regular>
          </div>
        </div>

        {/* Button */}
        <div className="basis-8/12 flex gap-x-6 pl-12 mt-8">
          <ButtonSmall
            className={
              "bg-surface-100 text-primary-700 border-[1px] border-primary-300"
            }
          >
            Sign In
          </ButtonSmall>
          <ButtonSmall className={"bg-primary-500 text-neutral-100"}>
            Sign Up
          </ButtonSmall>
        </div>
      </div>
    </div>
  );
}
const index = () => {
  return (
    <>
      {/* Navigation */}
      <TopNavigation />

      <div className="px-6 pt-24 bg-surface-200">
        <img
          className="w-full"
          src="./assets/images/maher-zhein-banner.png"
          alt=""
        />

        <nav className="flex mt-10 justify-between text-center capitalize border-b-[1px] border-neutral-200 ">
          <Paragraf2Bold
            className={
              "cursor-pointer pb-4 border-b-[2px] border-primary-700 flex-1"
            }
          >
            <span className="text-primary-700">summary</span>
          </Paragraf2Bold>
          <Paragraf2Regular className={"cursor-pointer flex-1"}>
            <span className="text-neutral-300">highlighted</span>
          </Paragraf2Regular>
          <Paragraf2Regular className={"cursor-pointer flex-1"}>
            <span className="text-neutral-300">package</span>
          </Paragraf2Regular>
          <Paragraf2Regular className={"cursor-pointer flex-1"}>
            <span className="text-neutral-300">location</span>
          </Paragraf2Regular>
          <Paragraf2Regular className={"cursor-pointer flex-1"}>
            <span className="text-neutral-300">order</span>
          </Paragraf2Regular>
        </nav>

        <div>
          <header className="mt-6">
            <Label2Medium>
              <img
                src="./assets/icons/location.svg"
                className="inline-block"
                alt=""
              />
              <span className="text-neutral-500 uppercase ml-1 pr-3 mr-3 border-r-2 border-neutral-200">
                bandung
              </span>
              <span className="text-primary-500 uppercase">
                DAY, MON TANGGAL
              </span>
            </Label2Medium>
            <Headline2Bold className={"text-tertiary-900 mt-2"}>
              Konser Silaturahmi Maher Zain
            </Headline2Bold>
          </header>

          <div className="relative ">
            <div className='blur-sm pb-20'>
              <div className="flex mt-6">
                <div className="basis-3/5">
                  <Label1Regular style={"text-tertiary-500"}>
                    Lorem ipsum dolor sit amet consectetur. Nibh ultricies
                    facilisi faucibus euismod mauris lorem fermentum.
                  </Label1Regular>
                </div>
                <div className="basis-2/5 text-right">
                  <Label1Medium className="text-tertiary-500">
                    Starting From
                  </Label1Medium>
                  <SubHeading2Bold className="text-primary-500">
                    IDR 1.999.000
                  </SubHeading2Bold>
                </div>
              </div>

              <div className="mt-4 pb-20 ">
                <SubHeading2Bold className={"text-neutral-900"}>
                  Highlight
                </SubHeading2Bold>
                <ul className="list-disc pl-8 text-tertiary-500">
                  <li>
                    <Label1Regular>
                      Saksikan langsung penampilan memukau dari Maher Zain lewat
                      tur perdana mereka, “2023 LE SSERAFIM TOUR 'FLAME RISES'
                      IN JAKARTA”
                    </Label1Regular>
                  </li>
                  <li>
                    <Label1Regular>
                      Konser akan berlangsung pada tanggal 3 Oktober 2023 di
                      JIEXPO Hall B3, Jakarta Untuk cara penggunaan membership
                      code saat periode presale, harap kunjungi laman ini
                    </Label1Regular>
                  </li>
                </ul>
              </div>
            </div>
            <PopUp />
          </div>
        </div>
      </div>
    </>
  );
}

export default index