import React from 'react'

const FooterItemNav = () => {
    return (
            <p className='text-sm my-2'>lorem ipsum</p>
    );
}
const FooterIcon = () => {
    return (
            <div className='rounded-full bg-primary-700 p-2'>
                <img src="./assets/icons/instagram.svg" alt="" />
            </div>
    );
}
const Footer = () => {
  return (
    <div className="px-7 pt-12 bg-primary-900 text-neutral-100 ">
      <div className="flex mb-8">
        <div className="flex-1">
          <img src="./assets/icons/depublic-white.svg" alt="" />
          <p className="my-6 text-sm">"tagline company"</p>
          <div className="flex gap-x-2">
            <FooterIcon />
            <FooterIcon />
            <FooterIcon />
          </div>
        </div>
        <div className="flex-1 flex">
          <nav className="flex-1">
            <FooterItemNav />
            <FooterItemNav />
            <FooterItemNav />
            <FooterItemNav />
            <FooterItemNav />
          </nav>
          <nav className="flex-1">
            <FooterItemNav />
            <FooterItemNav />
            <FooterItemNav />
            <FooterItemNav />
            <FooterItemNav />
          </nav>
        </div>
      </div>
      <hr className="border border-primary-700" />
      <p className="text-xs text-center pt-4 pb-10">
        copyright 2023 Depublic. All Rights Reserved
      </p>
    </div>
  );
}

export default Footer