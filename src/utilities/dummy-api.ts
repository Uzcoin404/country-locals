import { PrimaryNav, StatesType } from './types';

// Importing Icons
import CameraIcon from '../../public/icons/camera.svg';
import BullhornIcon from '../../public/icons/bullhorn.svg';
import PaletsIcon from '../../public/icons/palets.svg';
import BriefcaseIcon from '../../public/icons/briefcase.svg';
import DollarIcon from '../../public/icons/dollar.svg';
import LeafIcon from '../../public/icons/leaf.svg';
import CodeIcon from '../../public/icons/code.svg';
import BarberIcon from '../../public/icons/barber.svg';
import MusicIcon from '../../public/icons/music.svg';
import User2Icon from '../../public/icons/profile-2user.svg';
import RoomDoor from '../../public/icons/roomDoor.svg';
import Bed from '../../public/icons/bed.svg';
import Bath from '../../public/icons/bath.svg';
import Rope from '../../public/icons/rope.png';
import Camping from '../../public/icons/camping.png';
import Stargazing from '../../public/icons/stargazing.png';
import Campfire from '../../public/icons/campfire.png';
import Camping2 from '../../public/icons/camping2.png';
import Lock from '../../public/icons/lock.png';
import Kit from '../../public/icons/kit.png';
import House from '../../public/icons/house.png';
import Crowd from '../../public/icons/crowd.png';
import Wifi from '../../public/icons/wifi.svg';
import Tv from '../../public/icons/tv.svg';
import Hair from '../../public/icons/hair.svg';
import CheckCalender from '../../public/icons/check-calender.svg';
import Pool from '../../public/icons/pool.svg';
import AirCondition from '../../public/icons/air-condition.svg';
import Cup from '../../public/icons/cup.svg';

/* eslint import/prefer-default-export: "off" */
export const categoryMenuItems: PrimaryNav[] = [
  {
    id: 1,
    title: 'Photography',
    icon: CameraIcon,
    active: true,
    imgUrl: '/category/photography.jpg',
    submenuItems: [
      {
        id: 1,
        title: 'Photography',
        imgUrl: '/category/photography.jpg',
        totalGraduates: 1234,
      },
      {
        id: 2,
        title: 'iPhone & Android Photography',
        imgUrl: '/category/mobile-photography.jpg',
        totalGraduates: 34,
      },
      {
        id: 3,
        title: 'Video Production',
        imgUrl: '/category/video-production.jpg',
        totalGraduates: 34,
      },
      {
        id: 4,
        title: 'Weeding Photography',
        imgUrl: '/category/weeding-photography.jpg',
        totalGraduates: 34,
      },
      {
        id: 5,
        title: 'Adobe Lightroom',
        imgUrl: '/category/adobe-lightroom.jpg',
        totalGraduates: 34,
      },
      {
        id: 6,
        title: 'Online Photoshop',
        imgUrl: '/category/photoshop.jpg',
        totalGraduates: 34,
      },
      {
        id: 7,
        title: 'Video Editing',
        imgUrl: '/category/video-editing.jpg',
        totalGraduates: 34,
      },
    ],
  },
  {
    id: 2,
    title: 'Marketing',
    icon: BullhornIcon,
    active: false,
    imgUrl: '/category/weeding-photography.jpg',
    submenuItems: [
      {
        id: 4,
        title: 'Weeding Photography',
        imgUrl: '/category/weeding-photography.jpg',
        totalGraduates: 34,
      },
      {
        id: 5,
        title: 'Adobe Lightroom',
        imgUrl: '/category/adobe-lightroom.jpg',
        totalGraduates: 34,
      },
      {
        id: 6,
        title: 'Online Photoshop',
        imgUrl: '/category/photoshop.jpg',
        totalGraduates: 34,
      },
      {
        id: 7,
        title: 'Video Editing',
        imgUrl: '/category/video-editing.jpg',
        totalGraduates: 34,
      },
    ],
  },
  {
    id: 3,
    title: 'Design',
    icon: PaletsIcon,
    active: false,
    imgUrl: '/category/video-production.jpg',
    submenuItems: [
      {
        id: 3,
        title: 'Video Production',
        imgUrl: '/category/video-production.jpg',
        totalGraduates: 34,
      },
      {
        id: 4,
        title: 'Weeding Photography',
        imgUrl: '/category/weeding-photography.jpg',
        totalGraduates: 34,
      },
      {
        id: 5,
        title: 'Adobe Lightroom',
        imgUrl: '/category/adobe-lightroom.jpg',
        totalGraduates: 34,
      },
    ],
  },
  {
    id: 4,
    title: 'Business & Analytics',
    icon: BriefcaseIcon,
    active: false,
    imgUrl: '/category/photography.jpg',
    submenuItems: [
      {
        id: 1,
        title: 'Photography',
        imgUrl: '/category/photography.jpg',
        totalGraduates: 1234,
      },
      {
        id: 2,
        title: 'iPhone & Android Photography',
        imgUrl: '/category/mobile-photography.jpg',
        totalGraduates: 34,
      },
      {
        id: 3,
        title: 'Video Production',
        imgUrl: '/category/video-production.jpg',
        totalGraduates: 34,
      },
      {
        id: 4,
        title: 'Weeding Photography',
        imgUrl: '/category/weeding-photography.jpg',
        totalGraduates: 34,
      },
    ],
  },
  {
    id: 5,
    title: 'Finance',
    icon: DollarIcon,
    imgUrl: '/category/mobile-photography.jpg',
    active: false,
    submenuItems: [
      {
        id: 2,
        title: 'iPhone & Android Photography',
        imgUrl: '/category/mobile-photography.jpg',
        totalGraduates: 34,
      },

      {
        id: 4,
        title: 'Weeding Photography',
        imgUrl: '/category/weeding-photography.jpg',
        totalGraduates: 34,
      },
    ],
  },
  {
    id: 6,
    title: 'Health Wellness',
    icon: LeafIcon,
    imgUrl: '/category/mobile-photography.jpg',
    active: false,
    submenuItems: [
      {
        id: 1,
        title: 'Photography',
        imgUrl: '/category/photography.jpg',
        totalGraduates: 1234,
      },
      {
        id: 2,
        title: 'iPhone & Android Photography',
        imgUrl: '/category/mobile-photography.jpg',
        totalGraduates: 34,
      },
      {
        id: 3,
        title: 'Video Production',
        imgUrl: '/category/video-production.jpg',
        totalGraduates: 34,
      },
      {
        id: 4,
        title: 'Weeding Photography',
        imgUrl: '/category/weeding-photography.jpg',
        totalGraduates: 34,
      },
    ],
  },
  {
    id: 7,
    title: 'Technology',
    imgUrl: '/category/photography.jpg',
    icon: CodeIcon,
    active: false,
    submenuItems: [
      {
        id: 1,
        title: 'Photography',
        imgUrl: '/category/photography.jpg',
        totalGraduates: 1234,
      },
      {
        id: 2,
        title: 'iPhone & Android Photography',
        imgUrl: '/category/mobile-photography.jpg',
        totalGraduates: 34,
      },
      {
        id: 3,
        title: 'Video Production',
        imgUrl: '/category/video-production.jpg',
        totalGraduates: 34,
      },
      {
        id: 4,
        title: 'Weeding Photography',
        imgUrl: '/category/weeding-photography.jpg',
        totalGraduates: 34,
      },
      {
        id: 5,
        title: 'Adobe Lightroom',
        imgUrl: '/category/adobe-lightroom.jpg',
        totalGraduates: 34,
      },
      {
        id: 6,
        title: 'Online Photoshop',
        imgUrl: '/category/photoshop.jpg',
        totalGraduates: 34,
      },
      {
        id: 7,
        title: 'Video Editing',
        imgUrl: '/category/video-editing.jpg',
        totalGraduates: 34,
      },
    ],
  },
  {
    id: 8,
    title: 'Arts & Hobbies',
    icon: PaletsIcon,
    imgUrl: '/category/photography.jpg',
    active: false,
    submenuItems: [
      {
        id: 1,
        title: 'Photography',
        imgUrl: '/category/photography.jpg',
        totalGraduates: 1234,
      },
      {
        id: 2,
        title: 'iPhone & Android Photography',
        imgUrl: '/category/mobile-photography.jpg',
        totalGraduates: 34,
      },
      {
        id: 3,
        title: 'Video Production',
        imgUrl: '/category/video-production.jpg',
        totalGraduates: 34,
      },
      {
        id: 4,
        title: 'Weeding Photography',
        imgUrl: '/category/weeding-photography.jpg',
        totalGraduates: 34,
      },
      {
        id: 5,
        title: 'Adobe Lightroom',
        imgUrl: '/category/adobe-lightroom.jpg',
        totalGraduates: 34,
      },
      {
        id: 6,
        title: 'Online Photoshop',
        imgUrl: '/category/photoshop.jpg',
        totalGraduates: 34,
      },
      {
        id: 7,
        title: 'Video Editing',
        imgUrl: '/category/video-editing.jpg',
        totalGraduates: 34,
      },
      {
        id: 8,
        title: 'Online Photoshop',
        imgUrl: '/category/photoshop.jpg',
        totalGraduates: 34,
      },
      {
        id: 9,
        title: 'Video Editing',
        imgUrl: '/category/video-editing.jpg',
        totalGraduates: 34,
      },
    ],
  },
  {
    id: 9,
    title: 'Beauty',
    icon: BarberIcon,
    imgUrl: '/category/photoshop.jpg',
    active: false,
    submenuItems: [
      {
        id: 6,
        title: 'Online Photoshop',
        imgUrl: '/category/photoshop.jpg',
        totalGraduates: 34,
      },
      {
        id: 7,
        title: 'Video Editing',
        imgUrl: '/category/video-editing.jpg',
        totalGraduates: 34,
      },
    ],
  },
  {
    id: 10,
    title: 'Music',
    icon: MusicIcon,
    active: false,
    imgUrl: '/category/weeding-photography.jpg',
    submenuItems: [
      {
        id: 4,
        title: 'Weeding Photography',
        imgUrl: '/category/weeding-photography.jpg',
        totalGraduates: 34,
      },
      {
        id: 5,
        title: 'Adobe Lightroom',
        imgUrl: '/category/adobe-lightroom.jpg',
        totalGraduates: 34,
      },
      {
        id: 6,
        title: 'Online Photoshop',
        imgUrl: '/category/photoshop.jpg',
        totalGraduates: 34,
      },
    ],
  },
];

export const states: StatesType[] = [
  {
    id: 1,
    title: 'Andhra Pradesh',
    active: true,
    cities: [
      'Anantapur',
      'Chittoor',
      'East Godavari',
      'Guntur',
      'Krishna',
      'Kurnool',
      'Prakasam',
      'Srikakulam',
      'Visakhapatnam',
      'YSR',
    ],
  },
  {
    id: 2,
    title: 'Amaravati',
    active: false,
    cities: [
      'East Godavari',
      'Guntur',
      'Krishna',
      'Kurnool',
      'Prakasam',
      'Srikakulam',
      'Visakhapatnam',
      'YSR',
    ],
  },
  {
    id: 3,
    title: 'Itanagar',
    active: false,
    cities: [
      'Anantapur',
      'Chittoor',
      'East Godavari',

      'Krishna',
      'Kurnool',
      'Prakasam',
      'Srikakulam',
      'Visakhapatnam',
      'YSR',
    ],
  },
  {
    id: 4,
    title: 'Assam',
    active: false,
    cities: [
      'Anantapur',
      'Chittoor',
      'East Godavari',
      'Guntur',
      'Krishna',
      'Kurnool',
      'Prakasam',
      'Srikakulam',
    ],
  },
  {
    id: 5,
    title: 'Bihar',
    active: false,
    cities: [
      'East Godavari',
      'Guntur',
      'Krishna',
      'Kurnool',
      'Prakasam',
      'Srikakulam',
      'Visakhapatnam',
      'YSR',
    ],
  },
  {
    id: 6,
    title: 'Raipur',
    active: false,
    cities: [
      'Anantapur',
      'Chittoor',
      'East Godavari',
      'Guntur',
      'Krishna',
      'Kurnool',
      'Prakasam',
      'Srikakulam',
      'Visakhapatnam',
      'YSR',
    ],
  },
  {
    id: 7,
    title: 'Haryana',
    active: false,
    cities: [
      'Anantapur',
      'Chittoor',
      'East Godavari',
      'Guntur',
      'Krishna',
      'Kurnool',
      'Prakasam',
      'Srikakulam',
    ],
  },
  {
    id: 8,
    title: 'Andhra Pradesh',
    active: false,
    cities: [
      'Anantapur',

      'Guntur',
      'Krishna',
      'Kurnool',
      'Prakasam',
      'Srikakulam',
      'Visakhapatnam',
      'YSR',
    ],
  },
  {
    id: 9,
    title: 'Amaravati',
    active: false,
    cities: [
      'Anantapur',
      'Chittoor',
      'East Godavari',

      'Prakasam',
      'Srikakulam',
      'Visakhapatnam',
      'YSR',
    ],
  },
  {
    id: 10,
    title: 'Itanagar',
    active: false,
    cities: [
      'Guntur',
      'Krishna',
      'Kurnool',
      'Prakasam',
      'Srikakulam',
      'Visakhapatnam',
      'YSR',
    ],
  },
];

export const serviceData = [
  {
    id: 1,
    type: 'mentor',
    isAvailable: true,
    isNew: true,
    mentorName: 'Dalvik Loger',
    price: 420,
    title: 'Photography Masterclass: A Complete Guide to Photography',
    authors: 'Nate Taylor, Toby and Smith',
    rating: 4,
    offer: 30,
    imgUrl: '/popular-mentor-1.jpg',
  },
  {
    id: 2,
    type: 'live-class',
    title: 'Photography Masterclass: A Complete Guide to Photography',
    price: 130,
    author: 'Nate Taylor, Toby and Smith',
    new: false,
    star: 4,
    offer: 30,
    imgUrl: 'popular-mentor-2.jpg',
  },
  {
    id: 3,
    type: 'workshop',
    title: 'Photography Masterclass: A Complete Guide to Photography',
    price: 522,
    author: 'Nate Taylor, Toby and Smith',
    new: true,
    star: 4,
    offer: 30,
    imgUrl: 'popular-mentor-1.jpg',
  },
  {
    id: 4,
    type: 'prime-pack',
    title: 'Photography Masterclass: A Complete Guide to Photography',
    price: 156,
    author: 'Nate Taylor, Toby and Smith',
    new: false,
    star: 4,
    offer: 30,
    imgUrl: 'popular-mentor-2.jpg',
  },
  {
    id: 5,
    type: 'mentor',
    isAvailable: true,
    isNew: true,
    mentorName: 'Dalvik Loger',
    price: 420,
    title: 'Photography Masterclass: A Complete Guide to Photography',
    authors: 'Nate Taylor, Toby and Smith',
    rating: 4,
    offer: 30,
    imgUrl: '/popular-mentor-2.jpg',
  },
  {
    id: 6,
    type: 'prime-pack',
    title: 'Photography Masterclass: A Complete Guide to Photography',
    price: 897,
    author: 'Nate Taylor, Toby and Smith',
    new: true,
    star: 4,
    offer: 30,
    imgUrl: 'popular-mentor-2.jpg',
  },
];
export const bookOffersData = [
  {
    id: 1,
    type: 'favourite',
    isAvailable: true,
    isNew: true,
    mentorName: 'Dalvik Loger',
    price: 420,
    title: 'Photography Masterclass: A Complete Guide to Photography',
    authors: 'Nate Taylor, Toby and Smith',
    rating: 4,
    offer: 30,
    imgUrl: '/popular-mentor-1.jpg',
  },
  {
    id: 2,
    type: 'favourite',
    title: 'Photography Masterclass: A Complete Guide to Photography',
    price: 130,
    author: 'Nate Taylor, Toby and Smith',
    new: false,
    star: 4,
    offer: 30,
    imgUrl: 'popular-mentor-2.jpg',
  },
  {
    id: 3,
    type: 'local',
    title: 'Photography Masterclass: A Complete Guide to Photography',
    price: 522,
    author: 'Nate Taylor, Toby and Smith',
    new: true,
    star: 4,
    offer: 30,
    imgUrl: 'popular-mentor-1.jpg',
  },
  {
    id: 4,
    type: 'local',
    title: 'Photography Masterclass: A Complete Guide to Photography',
    price: 156,
    author: 'Nate Taylor, Toby and Smith',
    new: false,
    star: 4,
    offer: 30,
    imgUrl: 'popular-mentor-2.jpg',
  },
  {
    id: 5,
    type: 'favourite',
    isAvailable: true,
    isNew: true,
    mentorName: 'Dalvik Loger',
    price: 420,
    title: 'Photography Masterclass: A Complete Guide to Photography',
    authors: 'Nate Taylor, Toby and Smith',
    rating: 4,
    offer: 30,
    imgUrl: '/popular-mentor-2.jpg',
  },
  {
    id: 6,
    type: 'local',
    title: 'Photography Masterclass: A Complete Guide to Photography',
    price: 897,
    author: 'Nate Taylor, Toby and Smith',
    new: true,
    star: 4,
    offer: 30,
    imgUrl: 'popular-mentor-2.jpg',
  },
];

export const mentorSliderData = [
  {
    id: 1,
    type: 'mentor',
    isAvailable: true,
    isNew: true,
    mentorName: 'Dalvik Loger',
    price: 420,
    title: 'Photography Masterclass: A Complete Guide to Photography',
    authors: 'Nate Taylor, Toby and Smith',
    rating: 4,
    offer: 30,
    imgUrl: '/popular-mentor-1.jpg',
  },
  {
    id: 2,
    type: 'mentor',
    isAvailable: true,
    isNew: true,
    mentorName: 'Dalvik Loger',
    price: 420,
    title: 'Photography Masterclass: A Complete Guide to Photography',
    authors: 'Nate Taylor, Toby and Smith',
    rating: 4,
    offer: 30,
    imgUrl: '/popular-mentor-2.jpg',
  },
  {
    id: 3,
    type: 'mentor',
    isAvailable: true,
    isNew: true,
    mentorName: 'Dalvik Loger',
    price: 420,
    title: 'Photography Masterclass: A Complete Guide to Photography',
    authors: 'Nate Taylor, Toby and Smith',
    rating: 4,
    offer: 30,
    imgUrl: '/popular-mentor-1.jpg',
  },
  {
    id: 4,
    type: 'mentor',
    isAvailable: true,
    isNew: true,
    mentorName: 'Dalvik Loger',
    price: 420,
    title: 'Photography Masterclass: A Complete Guide to Photography',
    authors: 'Nate Taylor, Toby and Smith',
    rating: 4,
    offer: 30,
    imgUrl: '/popular-mentor-2.jpg',
  },
  {
    id: 5,
    type: 'mentor',
    isAvailable: true,
    isNew: true,
    mentorName: 'Dalvik Loger',
    price: 420,
    title: 'Photography Masterclass: A Complete Guide to Photography',
    authors: 'Nate Taylor, Toby and Smith',
    rating: 4,
    offer: 30,
    imgUrl: '/popular-mentor-1.jpg',
  },
];

export const highlightData = [
  { icon: User2Icon, title: '5 Guest' },
  { icon: RoomDoor, title: 'Bedrooms' },
  { icon: Bed, title: '4 Beds' },
  { icon: Bath, title: '3 Baths' },
  { icon: User2Icon, title: '5 Guest' },
  { icon: RoomDoor, title: 'Bedrooms' },
  { icon: Bed, title: '4 Beds' },
  { icon: Bath, title: '3 Baths' },
];

export const activitiesData = [
  { icon: Campfire, title: 'Campfire' },
  { icon: Rope, title: 'Rope Activites ' },
  { icon: Camping, title: 'Camping near Bangalore ' },
  { icon: Stargazing, title: 'Stargazing' },
  { icon: Camping2, title: 'Camping near Chennai' },
];
export const safetyFeaturesData = [
  { icon: Lock, title: 'Gated Private' },
  { icon: Kit, title: 'First Aid Kit' },
  { icon: House, title: 'Backup Cottage ' },
  { icon: Crowd, title: 'Crowd Free' },
];

export const offersData = [
  { icon: Wifi, title: 'Wifi' },
  { icon: Tv, title: 'Tv' },
  { icon: Hair, title: 'Hair dryer' },
  { icon: CheckCalender, title: 'Long-term stays allowed' },
  { icon: Pool, title: 'Pool' },
  { icon: AirCondition, title: 'Air Conditioning' },
  { icon: Cup, title: 'Breakfast' },
];
