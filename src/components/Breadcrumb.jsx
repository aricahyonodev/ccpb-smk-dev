import React from 'react'
import Paragraf2Medium from './paragrafs/Paragraf2Medium';
import Paragraf2Regular from './paragrafs/Paragraf2Regular';

const ItemNotActive = ({name}) => {
    return(
        <>
            <Paragraf2Regular className={"text-neutral-500"}>{name}</Paragraf2Regular>
            <img src="./assets/icons/arrow-right-neutral.svg" alt="" />
        </>
    );
}

const ItemActive = ({ name }) => {
  return (
    <Paragraf2Medium className={"text-primary-500"}>{name}</Paragraf2Medium>
  );
};

const Breadcrumb = ({ items }) => {
  return (
    <div className="flex gap-x-3 mb-7">
      {[...items].splice(0, items.length-1).map((item) => (
        <ItemNotActive key={item} name={item} />
      ))}
      <ItemActive name={[...items].pop()} />
    </div>
  );
}

export default Breadcrumb