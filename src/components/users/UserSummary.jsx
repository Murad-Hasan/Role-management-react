import React from "react";
import UserSummaryCard from "./UserSummaryCard";
import getUserSummaryData from "./UserSummaryData";

const UserSummary = () => {
  const cardInfo = getUserSummaryData();
  return (
    <>
      <div className="flex flex-wrap">
        {cardInfo.map((card, index) => {
          const { tittle, count, icon, cls } = card;
          return (
            <UserSummaryCard
              key={index}
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
