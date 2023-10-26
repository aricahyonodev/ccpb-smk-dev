import React from "react";
import TopNavigation from "../../components/TopNavigation";
import Paragraf2Bold from "../../components/paragrafs/Paragraf2Bold";
import Paragraf2Regular from "../../components/paragrafs/Paragraf2Regular";
import Headline2Bold from "../../components/headings/Headline2Bold";
import Label2Medium from "../../components/labels/Label2Medium";
import Label1Regular from "../../components/labels/Labe1Regular";
import Label1Bold from "../../components/labels/Label1Bold";
import Label1Medium from "../../components/labels/Label1Medium";
import SubHeading2Bold from "../../components/subheadings/SubHeading2Bold";
import ButtonExtraSmall from "../../components/buttons/ButtonExtraSmall";
import Footer from "../../components/Footer";
import UpcomingEvent from "../home/components/UpcomingEvent";
import Breadcrumb from "../../components/Breadcrumb";

const PopUp = () => {
  return (
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
};

const MoreInfoItem = ( {title} ) => {
  return (
    <li className="flex justify-between rounded-lg p-[10px] bg-surface-100 shadow-sm">
      <Label1Medium className={"text-neutral-900"}>
        {title}
      </Label1Medium>
      <img src="./assets/icons/arrow-bottom.svg" alt="" />
    </li>
  );
}

const CardPackage = () => {
  return (
    <div className="p-4 rounded-xl bg-surface-100 shadow-sm">
      <header>
        <Label1Bold className={"text-neutral-900 flex justify-between"}>
          <span>CAT 2A (STANDING)</span>
          <span>Detail</span>
        </Label1Bold>
      </header>
      <main className="border-b-[1px] border-dashed border-neutral-300 py-3 mt-1">
        <Label1Regular className={"text-neutral-500"}>
          Lorem ipsum dolor sit amet consectetur. Nibh ultricies facilisi
          faucibus
        </Label1Regular>
      </main>
      <footer className="flex justify-between items-center mt-3">
        <Paragraf2Bold className={"text-primary-700"}>
          IDR 1.999.000
        </Paragraf2Bold>
        <ButtonExtraSmall>Select Package</ButtonExtraSmall>
      </footer>
    </div>
  );
}

const CardDate = ({ day, date, active }) => {
  return (
    <div>
      <div
        className={`text-center py-6 border-[1px] rounded-md border-neutral-300 text-neutral-300 capitalize ${
          active && "border-secondary-300"
        }`}
      >
        <Label1Regular>{day}</Label1Regular>
        <Label1Medium className={`${active && "text-secondary-700"}`}>
          {date}
        </Label1Medium>
      </div>
    </div>
  );
};

const DetailDescription = ({ children, title, className }) => {
  return (
    <div className={` bg-surface-200  px-7 py-10 ${className}`}>
      <SubHeading2Bold className={"text-neutral-900"}>{title}</SubHeading2Bold>
      <div className="text-neutral-500 mt-2 text-justify ">{children}</div>
    </div>
  );
};

const index = () => {
  return (
    <>
      {/* Navigation */}
      <TopNavigation />

      <div className="px-6 pt-28 bg-surface-200">
        {/* Breadcrumb */}
        <Breadcrumb items={["Home", "Ticket", "Detail Ticket"]} />

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
            <div className="">
              {/* <div className='blur-sm pb-20'> */}
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

              <div className="mt-8 ">
                <DetailDescription className={"px-0 py-0"} title={"Highlight"}>
                  <ul className="list-disc pl-6 text-tertiary-500">
                    <li>
                      <Label1Regular>
                        Saksikan langsung penampilan memukau dari Maher Zain
                        lewat tur perdana mereka, “2023 LE SSERAFIM TOUR 'FLAME
                        RISES' IN JAKARTA”
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
                </DetailDescription>
              </div>
            </div>
            {/* <PopUp /> */}
          </div>
        </div>
      </div>

      <main>
        <section>
          <DetailDescription className={"mb-2"}>
            <div className="rounded-xl bg-[#FBF6EC]  p-6">
              <div className="flex justify-between items-center">
                <Paragraf2Bold className={"text-neutral-900"}>
                  Info Penting
                </Paragraf2Bold>
                <Label1Medium className={"text-secondary-900"}>
                  See More
                </Label1Medium>
              </div>
              <Label2Medium className={"text-neutral-500"}>
                <ul className="list-disc pl-4 mt-4">
                  <li>
                    FEARNOT MEMBERSHIP PRESALE dimulai pada hari Kamis, 3
                    Agustus 2023 pukul 12.00 - 22.00 WIB.
                  </li>
                  <li>
                    General Sales dimulai pada hari Jumat, 4 Agustus 2023 pukul
                    12.00 WIB.
                  </li>
                  <li>
                    Untuk Presale, 1 (satu) akun hanya dapat membeli maks. 4
                    (empat) tiket.
                  </li>
                </ul>
              </Label2Medium>
            </div>
          </DetailDescription>
        </section>

        <section>
          <div className={` bg-surface-200 px-7 py-10`}>
            <div className="flex justify-between">
              <SubHeading2Bold className={"text-neutral-900"}>
                Choose Package
              </SubHeading2Bold>
              <Label1Medium className={"text-primary-700 text"}>
                View Calendar
              </Label1Medium>
            </div>
            <div className="text-neutral-500 mt-4 text-justify  ">
              <div className="grid grid-cols-7 gap-x-3 cursor-pointer">
                <CardDate active={true} date={"30 Aug"} day={"sun"} />
                <CardDate date={"30 Aug"} day={"mon"} />
                <CardDate date={"30 Aug"} day={"tue"} />
                <CardDate date={"30 Aug"} day={"wed"} />
                <CardDate date={"30 Aug"} day={"true"} />
                <CardDate date={"30 Aug"} day={"fre"} />
                <CardDate date={"30 Aug"} day={"sad"} />
              </div>
            </div>
          </div>

          {/* List */}
          <div className="bg-[#ECCDF61A] px-7 pt-8 pb-14 flex flex-col gap-y-3">
            <CardPackage />
            <CardPackage />
            <CardPackage />
            <CardPackage />
          </div>
        </section>

        {/* Location */}
        <section>
          <DetailDescription title={"Location"}>
            <img src="./assets/images/location.png" alt="" />
          </DetailDescription>

          <div className="px-7 bg-surface-200">
            <div className="flex items-center justify-between rounded-lg p-3 bg-surface-100 shadow-sm">
              <div className="flex gap-x-3 items-center">
                <img src="./assets/icons/direction.svg" alt="" />
                <Paragraf2Bold className={"text-neutral-500"}>
                  Directions
                </Paragraf2Bold>
              </div>
              <img src="./assets/icons/arrow-right.svg" alt="" />
            </div>
          </div>

          <DetailDescription title={"More Info"}>
            <ul className="flex flex-col gap-y-3 mt-2 text-neutral-900">
              <MoreInfoItem title={"Ticket Exchange"} />
              <MoreInfoItem title={"Terms & conditions"} />
              <MoreInfoItem title={"Additional information"} />
            </ul>
          </DetailDescription>
        </section>
        <section>
          <DetailDescription className={"mt-2"} title={"Tickets Entered"}>
            <Paragraf2Regular>
              <ul className="list-disc pl-6">
                <li> Ticket Not Entered</li>
              </ul>
            </Paragraf2Regular>
          </DetailDescription>
        </section>
        <section>
          <DetailDescription className={"my-2"} title={"Description"}>
            <Label1Regular>
              Lorem ipsum dolor sit amet consectetur. Nibh ultricies facilisi
              faucibus euismod mauris lorem fermentum. Non feugiat urna arcu
              lacus bibendum mauris vitae viverra gravida. Lorem ipsum dolor sit
              amet consectetur. Nibh ultricies facilisi faucibus euismod mauris
              lorem fermentum. Non feugiat urna arcu lacus bibendum mauris vitae
              viverra gravida.
            </Label1Regular>
          </DetailDescription>
        </section>

        <section>
          <UpcomingEvent />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default index;
