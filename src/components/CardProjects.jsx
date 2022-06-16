import React from "react";

const CardProjects = ({tecnology, classname,title,miniature}) => {
  return (
    <>
      <div className="w-10/12 ml-6   mt-2 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img
          className="h-40 object-contain rounded-xl"
          src={miniature}
          alt=""
        />
        <div className="">
          <h2 className="font-bold text-lg mb-2 text-center ">{title}</h2>
        </div>

        <div className="m-2">
          <h2 className={classname}>
            {tecnology}
          </h2>
        </div>
      </div>
    </>
  );
};

export default CardProjects;
