"use client"
import UserList from "@/components/user-list";
import UserMessage from "@/components/user-message";
import React, { useState } from "react";

const Chats = () => {
    const [currentUserDetails, setCurrentUserDetails] = useState(null)
    const user = [
        {
          "userId": "1",
          "firstName": "Ram",
          "lastName": "Thapa",
          "username":   "ramthapa",
          "profilePicture": "https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg?auto=compress&cs=tinysrgb&w=600",
          "status": "online",
          "lastSeen": "2024-10-27T10:00:00Z",
          "lastMessage": "Hey, how are you?"
        },
        {
          "userId": "2",
          "firstName": "Sita",
          "lastName": "Shrestha",
          "username": "sitashrestha",
          "profilePicture": "https://images.pexels.com/photos/18885576/pexels-photo-18885576/free-photo-of-gmy-wear-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=600",
          "status": "offline",
          "lastSeen": "2024-10-26T18:30:00Z",
          "lastMessage": "Call me when you’re free."
        },
        {
          "userId": "3",
          "firstName": "Bikash",
          "lastName": "Gurung",
          "username": "bikashgurung",
          "profilePicture": "https://images.pexels.com/photos/2868044/pexels-photo-2868044.jpeg?auto=compress&cs=tinysrgb&w=400",
          "status": "online",
          "lastSeen": "2024-10-27T10:15:00Z",
          "lastMessage": "Let's meet tomorrow."
        },
        {
          "userId": "4",
          "firstName": "Anjali",
          "lastName": "Rai",
          "username": "anjalirai",
          "profilePicture": "https://images.pexels.com/photos/999248/pexels-photo-999248.png?auto=compress&cs=tinysrgb&w=400",
          "status": "away",
          "lastSeen": "2024-10-27T09:45:00Z",
          "lastMessage": "I’ll be there soon."
        },
        {
          "userId": "5",
          "firstName": "Prakash",
          "lastName": "Magar",
          "username": "prakashmagar",
          "profilePicture": "https://images.pexels.com/photos/14982422/pexels-photo-14982422/free-photo-of-picture-of-man-with-dreadlocks.jpeg?auto=compress&cs=tinysrgb&w=400",
          "status": "offline",
          "lastSeen": "2024-10-25T12:00:00Z",
          "lastMessage": "See you later!"
        },
        {
          "userId": "6",
          "firstName": "Sarita",
          "lastName": "Tamang",
          "username": "saritatamang",
          "profilePicture": "https://images.pexels.com/photos/3747452/pexels-photo-3747452.jpeg?auto=compress&cs=tinysrgb&w=400",
          "status": "online",
          "lastSeen": "2024-10-27T11:00:00Z",
          "lastMessage": "How’s your day going?"
        },
        {
          "userId": "7",
          "firstName": "Ramesh",
          "lastName": "Karki",
          "username": "rameshkarki",
          "profilePicture": "https://images.pexels.com/photos/18269632/pexels-photo-18269632/free-photo-of-man-wearing-casual-outfit-with-camera.jpeg?auto=compress&cs=tinysrgb&w=400",
          "status": "offline",
          "lastSeen": "2024-10-26T16:45:00Z",
          "lastMessage": "I’ll check and let you know."
        },
        {
          "userId": "8",
          "firstName": "Kabita",
          "lastName": "Lama",
          "username": "kabitalama",
          "profilePicture": "https://images.pexels.com/photos/19955870/pexels-photo-19955870/free-photo-of-portrait-of-smiling-woman-taking-pictures.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          "status": "away",
          "lastSeen": "2024-10-27T08:30:00Z",
          "lastMessage": "Okay, got it!"
        },
        {
          "userId": "9",
          "firstName": "Krishna",
          "lastName": "Dahal",
          "username": "krishnadahal",
          "profilePicture": "https://images.pexels.com/photos/2128819/pexels-photo-2128819.jpeg?auto=compress&cs=tinysrgb&w=400",
          "status": "online",
          "lastSeen": "2024-10-27T10:20:00Z",
          "lastMessage": "Good morning!"
        },
        {
          "userId": "10",
          "firstName": "Pooja",
          "lastName": "Maharjan",
          "username": "poojamaharjan",
          "profilePicture": "https://images.pexels.com/photos/29413648/pexels-photo-29413648/free-photo-of-elegant-pakistani-fashion-shoot-in-lahore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          "status": "offline",
          "lastSeen": "2024-10-25T22:10:00Z",
          "lastMessage": "Thanks for your help!"
        },
        {
          "userId": "11",
          "firstName": "Suraj",
          "lastName": "Bista",
          "username": "surajbista",
          "profilePicture": "https://images.pexels.com/photos/28624917/pexels-photo-28624917/free-photo-of-portrait-of-a-confident-photographer-in-black-attire.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          "status": "online",
          "lastSeen": "2024-10-27T09:55:00Z",
          "lastMessage": "Did you receive the files?"
        },
        {
          "userId": "12",
          "firstName": "Anisha",
          "lastName": "Ghale",
          "username": "anishaghale",
          "profilePicture": "https://images.pexels.com/photos/18885583/pexels-photo-18885583/free-photo-of-gmy-wear-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          "status": "away",
          "lastSeen": "2024-10-27T07:45:00Z",
          "lastMessage": "I’ll text you later."
        },
        {
          "userId": "13",
          "firstName": "Dipendra",
          "lastName": "Basnet",
          "username": "dipendrabasnet",
          "profilePicture": "https://images.pexels.com/photos/19272317/pexels-photo-19272317/free-photo-of-smiling-man-with-a-stubble-taking-a-mirror-selfie-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          "status": "offline",
          "lastSeen": "2024-10-24T20:30:00Z",
          "lastMessage": "Yes, I’m on my way."
        },
        {
          "userId": "14",
          "firstName": "Rita",
          "lastName": "Bhujel",
          "username": "ritabhujel",
          "profilePicture": "https://images.pexels.com/photos/17155432/pexels-photo-17155432/free-photo-of-black-and-white-studio-portrait-of-a-young-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          "status": "online",
          "lastSeen": "2024-10-27T10:50:00Z",
          "lastMessage": "Nice to meet you!"
        },
        {
          "userId": "15",
          "firstName": "Santosh",
          "lastName": "KC",
          "username": "santoshkc",
          "profilePicture": "https://images.pexels.com/photos/17899469/pexels-photo-17899469/free-photo-of-portrait-of-a-man-with-a-mustache.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          "status": "offline",
          "lastSeen": "2024-10-23T15:20:00Z",
          "lastMessage": "Let’s catch up soon!"
        }
      ]
      
  return (
      <div className="grid w-full grid-cols-12 h-screen overflow-hidden">
        <div className="col-span-3 overflow-y-auto">
          {user.map((item) => {
            return (
                <div className="border-blue-400 border-r-2 ">
                    <UserList item={item} setCurrentUserDetails={setCurrentUserDetails}/>
                </div>
            )
          })}
        </div>
        <div className="col-span-9 bg-[#fafdff]">
          <UserMessage currentUserDetails={currentUserDetails} users={user}/>
        </div>
      </div>
  );
};

export default Chats;
