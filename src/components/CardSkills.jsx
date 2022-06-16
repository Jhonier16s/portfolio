import React from "react";

const CardSkills = ({logo, className, name }) => {
  return (
    <>
      <div className={className}>
        <div className="flex justify-center flex-col">
          <h1 className="text-white py-2 text-2xl font-semibold text-center bg-transparent">{name}</h1>
          <img src={logo} className="cover" alt="js" />
        </div>
      </div>
    </>
  );
};

export default CardSkills;
