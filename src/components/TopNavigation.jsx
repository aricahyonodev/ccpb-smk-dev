import React from 'react'

const ButtonTopNav = ({style, children}) => {
  return (
    <div>
      <button
        className={`rounded-xl font-bold text-base text-center py-[10px] px-[30px] ${style}`}
      >
        {children}
      </button>
    </div>
  );
} 

const TopNavigation = () => {
  return (
    <div className="flex justify-center fixed z-20 py-2 px-10 top-0 left-0 right-0 bg-surface-100">
      <div className="flex justify-between w-full screen-tablet:w-7/12 screen-dekstop:w-5/12">
        <div className="w-1/2">
          <img src="./assets/icons/dp-purple.svg" className="h-14" alt="" />
        </div>
        <div className="w-1/2 flex justixfy-end gap-x-4 items-center">
          <ButtonTopNav
            style={"text-primary-700 border-[1px] border-primary-300"}
          >
            Sign In
          </ButtonTopNav>
          <ButtonTopNav style={"text-neutral-100 bg-primary-500"}>
            Sign Up
          </ButtonTopNav>
        </div>
      </div>
    </div>
  );
}

export default TopNavigation