import React, { Children, useState } from 'react'
import ButtonSmall from './buttons/ButtonSmall';


const TopNavigation = () => {

  // const [url, setUrl] = useState("auth-page");
  const [url, setUrl] = useState("login");

  return (
    <div className="flex justify-center fixed z-20 py-2 px-10 top-0 left-0 right-0 bg-surface-100">
      <div className="flex justify-between w-full screen-tablet:w-7/12 screen-dekstop:w-5/12">
        <div className="w-1/2">
          <img src="./assets/icons/dp-purple.svg" className="h-14" alt="" />
        </div>
        <div
          className={`w-1/2 flex justify-end gap-x-4 items-center ${
            url === "auth-page" && "hidden"
          }`}
        >
          {url === "not-login" && (
            <>
              <ButtonSmall
                className={
                  "text-primary-700 border-[1px] border-primary-300 bg-surface-100"
                }
              >
                Sign In
              </ButtonSmall>
              <ButtonSmall className={"text-neutral-100 bg-primary-500"}>
                Sign Up
              </ButtonSmall>
            </>
          )}
          {url === "login" && (
            <>
              <img className='w-[52px] block' src="./assets/icons/email-login.svg" alt="" />
              <img className='w-[52px] block' src="./assets/icons/user-login.svg" alt="" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopNavigation