import React from 'react'
import Headline2Bold from '../../../components/headings/Headline2Bold';
import TopNavigation from '../../../components/TopNavigation';

const HeaderItemNav = ({title, img}) => {
  return (
    <div>
      <img
        className="inline-block h-[58px] mb-4 cursor-pointer"
        src={`./assets/images/${img}.png`}
        alt=""
      />
      <p>{title}</p>
    </div>
  );
}

const HeaderItemArrowNav = ({img, position}) => {
  return (
    <div
      className={`absolute bottom-[-10px] rounded-full py-3 px-4 ${
        position === "right" ? "right-[-20px]" : "left-[-20px]"
      } shadow-sm bg-white`}
    >
      <img src={`./assets/icons/${img}.svg`} alt="" />
    </div>
  );
}


const Header = () => {
  return (
    <div className="relative bg-surface-200 pb-24 pt-[70px]">
      {/* Navigation */}
      <TopNavigation />

      <div className="bg-surface-500 px-7 relative">
        <div className="relative z-10">
          <input
            className="text-base font-medium rounded-xl mb-14 mt-10 pl-8 py-2 w-full home-search"
            type="text"
            placeholder="Search Activities"
          />
          <Headline2Bold>
            Tagline Hero <br /> Section
          </Headline2Bold>
          <button className="mt-4 mb-44 text-center py-[10px] px-[30px] rounded-xl bg-primary-500">
            <p className="text-base font-bold text-neutral-100">
              Donwload Application
            </p>
          </button>

          {/* Card */}
          <div className="relative">
            <div className="absolute left-0 right-0 bottom-[-56px] shadow-lg font-medium font-base py-6 px-4 bg-white text-center rounded-[20px] grid grid-cols-4 gap-x-[10px]">
              <HeaderItemNav img="home-ticket" title={"Ticket"} />
              <HeaderItemNav img="home-phone" title={"Registration"} />
              <HeaderItemNav img="home-booking" title={"Booking"} />
              <HeaderItemNav img="home-store" title={"Store"} />
            </div>
            <HeaderItemArrowNav img={"arrow-left"} position={"left"} />
            <HeaderItemArrowNav img={"arrow-right"} position={"right"} />
          </div>
        </div>

        <img
          className="absolute z-0 top-0 right-0 h-full"
          src="./assets/images/buble-home.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header