"use client";

import Image from "next/image";
import React, { useState } from "react";

const UserList = ({ item, setCurrentUserDetails }) => {
  const [SelectedUser, setSelectedUser] = useState(null)
  return (
      <div onClick={()=> setCurrentUserDetails(item.userId)} className="w-full  n bg-[#f0f8ff] flex justify-start items-center px-5 py-4 gap-5">
      <div className="bg-red-300 h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
        <Image
          className="rounded-full object-cover w-full h-full"
          src={item.profilePicture}
          height={64}
          width={64}
          alt={"Profile Picture"}
        />
      </div>
      <div>
        <div className="py-1 text-xl font-semibold">{`${item.firstName} ${item.lastName}`}</div>
        <div className="py-1 text-sm">{item.lastMessage}</div>
      </div>
      {item.status === "online" && <div className="h-3 w-3 bg-green-600 rounded-full"></div>}
    </div>
  );
};

export default UserList;
