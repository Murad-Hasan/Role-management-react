import React, { Fragment, useState } from "react";
import UserSummaryCard from "./UserSummaryCard";

const UserSummary = ({
  userData,
  admin,
  users,
  moderator,
  maleUser,
  femaleUser,
}) => {
  const [cardInfo] = useState([
    {
      tittle: "Admin",
      count: admin.length,
      icon: "fas fa-user-shield",
      cls: "bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5",
    },
    {
      tittle: "Users",
      count: userData.length,
      icon: "fas fa-exchange-alt",
      cls: "bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5",
    },
    {
      tittle: "Moderator",
      count: moderator.length,
      icon: "fas fa-server",
      cls: "bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-600 rounded-lg shadow-xl p-5",
    },
    {
      tittle: "male user",
      count: maleUser.length,
      icon: "fas fa-tasks",
      cls: "bg-gradient-to-b from-orange-100 to-orange-200 border-b-4 border-blue-500 rounded-lg shadow-xl p-5",
    },
    {
      tittle: "female user",
      count: femaleUser.length,
      icon: "fas fa-inbox",
      cls: "bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5",
    },
    {
      tittle: "new user",
      count: users.length,
      icon: "fas fa-user-plus",
      cls: "bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5",
    },
  ]);
  return (
    <>
      <div className="flex flex-wrap">
        {cardInfo.map((card, index) => {
          const { tittle, count, icon, cls } = card;
          return (
            <UserSummaryCard
              tittle={tittle}
              count={count}
              icon={icon}
              cls={cls}
            />
          );
        })}
      </div>
    </>
  );
};

export default UserSummary;
