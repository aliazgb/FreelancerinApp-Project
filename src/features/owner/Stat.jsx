import React from "react";


const colors ={
    primary:"bg-primary-100 text-primary-700",
    yellow:"bg-yellow-100 text-yellow-700",
    green:"bg-green-100 text-green-700"
}


function Stat({ title, icon, value, color }) {
  return (
    <div
      className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] 
     bg-secondary-0 p-4 rounded-lg gap-x-4 mr-8 mt-8"
    >
      <div
        className={`row-span-2 flex items-center justify-center
     p-2 aspect-square rounded-full ${colors[color]}`}
      >
        {icon}
      </div>
      <h5 className="font-bold text-secondary-500 text-lg self-center">
         {title}
      </h5>
      <p className="text-3xl font-bold text-secondary-900">4</p>
    </div>
  );
}

export default Stat;
