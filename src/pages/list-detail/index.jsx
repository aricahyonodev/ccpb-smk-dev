import React from "react";
import Footer from "../../components/Footer";
import Paragraf2Medium from "../../components/paragrafs/Paragraf2Medium";
import Label1Regular from "../../components/labels/Labe1Regular";
import Label1Medium from "../../components/labels/Label1Medium";
import SubHeading2Bold from "../../components/subheadings/SubHeading2Bold";
import TopNavigation from "../../components/TopNavigation";
import CardEventSmall from "../../components/cards/CardEventSmall";
import Breadcrumb from "../../components/Breadcrumb";

const ButtonPill = ({children, img}) => {
    return (
      <div className="flex items-center gap-x-1 py-[10px] px-[20px] rounded-[40px] border-[1px] border-neutral-100">
        <img src={`./assets/icons/${img}.svg`} alt="" />
        <Label1Medium className={"text-neutral-700"}>{children}</Label1Medium>
      </div>
    );
}
const ListDetail = () => {
  return (
    <div>
      <TopNavigation />
      <main className="px-7 bg-surface-100 pt-28">
        {/* Breadcrumb */}
        <Breadcrumb items={["Home", "Ticket"]}/>

        {/* Search */}
        <div className="flex gap-3 mb-4">
          <div className="relative w-full">
            <input
              placeholder="Search Activities"
              type="text"
              className="w-full outline-none border-[1px] border-neutral-200 bg-surface-100 rounded-xl p-2 pl-12"
            />
            <div className="absolute top-3 left-4">
              <img src="./assets/icons/find-neutral.svg" alt="" />
            </div>
          </div>
          <div className="cursor-pointer rounded-xl bg-secondary-100 border-[1px] border-secondary-50 px-10 py-2 flex justify-around gap-2 basis-1/3">
            <img src="./assets/icons/location-yellow.svg" alt="" />
            <Paragraf2Medium className={"text-neutral-700"}>
              Location
            </Paragraf2Medium>
            <img src="./assets/icons/arrow-bottom-yellow.svg" alt="" />
          </div>
        </div>

        {/* Menu */}
        <div className="flex items-center border-b-[1px] border-neutral-200 py-4">
          <div className="basis-4/12">
            <SubHeading2Bold className={"text-neutral-900"}>
              All Event
            </SubHeading2Bold>
          </div>
          <div className="flex justify-end gap-x-2 basis-8/12 ">
            <ButtonPill img={"filter"}>Filter</ButtonPill>
            <ButtonPill img={"date"}>Date</ButtonPill>
            <ButtonPill img={"price"}>Price</ButtonPill>
          </div>
        </div>

        <Label1Regular className="text-tertiary-500 py-6">
          60 Event on result
        </Label1Regular>
        {/* List Card */}
        <div className="pb-16 grid grid-cols-2 gap-5 ">
          <CardEventSmall />
          <CardEventSmall />
          <CardEventSmall />
          <CardEventSmall />
          <CardEventSmall />
          <CardEventSmall />
          <CardEventSmall />
          <CardEventSmall />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ListDetail;
