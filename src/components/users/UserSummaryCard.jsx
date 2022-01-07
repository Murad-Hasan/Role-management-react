import React from "react";

const UserSummaryCard = ({ tittle, count, icon, cls }) => {
  console.log(cls);
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <div className={`${cls}`}>
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className="rounded-full p-5 bg-green-600">
              {/* <i className="fas fa-user-shield fa-2x fa-inverse" /> */}
              <i className={`${icon} fa-2x fa-inverse`} />
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h2 className="font-bold uppercase text-gray-800">{tittle}</h2>
            <p className="font-bold text-3xl">{count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSummaryCard;
