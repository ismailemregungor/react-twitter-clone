import React, { useState } from 'react';

import {
  BookmarksIcon,
  CommunitiesIcon,
  ExploreIcon,
  HomeIcon,
  Logo,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
} from '../assets/icons/Icon';
import SideLink from '../components/SideLink';

const sideLinks = [
  {
    name: 'Home',
    icon: HomeIcon,
  },
  {
    name: 'Explore',
    icon: ExploreIcon,
  },
  {
    name: 'Communities',
    icon: CommunitiesIcon,
  },
  {
    name: 'Notifications',
    icon: NotificationsIcon,
  },
  {
    name: 'Messages',
    icon: MessagesIcon,
  },
  {
    name: 'Bookmarks',
    icon: BookmarksIcon,
  },
  {
    name: 'Profile',
    icon: ProfileIcon,
  },
  {
    name: 'More',
    icon: MoreIcon,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState('Hello');

  const handleMenuItemClick = (name) => {
    setActive(name);
  };

  return (
    <div className="flex flex-col justify-between w-72 min-h-screen border px-2">
      <div>
        <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest transform transition-colors duration-200">
          <Logo />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark text-white rounded-full px-8 py-3 w-11/12 shadow-lg transform transition-colors duration-200">
          Tweet
        </button>
      </div>
      <div>ProfileMenu</div>
    </div>
  );
};

export default Sidebar;
