import React from 'react';
import {
  BookmarksIcon,
  CommunitiesIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  Logo,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
} from '../assets/icons/icon';

const Sidebar = () => {
  return (
    <div className="w-72 min-h-screen border">
      <h1>Sidebar</h1>
      <Logo />
      <HomeIcon />
      <ExploreIcon />
      <CommunitiesIcon />
      <NotificationsIcon />
      <MessagesIcon />
      <BookmarksIcon />
      <ProfileIcon />
      <MoreIcon />
    </div>
  );
};

export default Sidebar;
