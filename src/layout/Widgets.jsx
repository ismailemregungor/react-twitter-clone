import React from 'react';
import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  LikeIcon,
  LocationIcon,
  PollIcon,
  PopulerIcon,
  ReplyIcon,
  RetweetIcon,
  ScheduleIcon,
  ShareIcon,
} from '../assets/icons/Icon';

const Widgets = () => {
  return (
    <div className="flex-1 min-h-screen border">
      <h1>Main</h1>
      <PopulerIcon />
      <ImageIcon />
      <GIFIcon />
      <PollIcon />
      <EmojiIcon />
      <ScheduleIcon />
      <LocationIcon />
      <ReplyIcon />
      <RetweetIcon />
      <LikeIcon />
      <ShareIcon />
    </div>
  );
};

export default Widgets;
