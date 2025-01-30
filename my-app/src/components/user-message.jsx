"use client"

import React from 'react'

const UserMessage = ({users, currentUserDetails}) => {
  return (
    <div>
      <div>{currentUserDetails}</div>
    </div>
  )
}

export default UserMessage