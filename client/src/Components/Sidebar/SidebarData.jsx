import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';

export const sideBarData = [
  {
    title: 'Home',
    icon: <HomeOutlinedIcon />,
    id: 1,
    route: 'home',
  },
  {
    title: 'Members',
    icon: <PeopleOutlineIcon />,
    id: 2,
    route: 'members',
  },
  {
    title: 'Organization',
    icon: <CorporateFareOutlinedIcon />,
    id: 3,
    route: 'organization',
    submenu: true,
    subMenuItems: [
      { title: 'Company detail', id: 1 },
      { title: 'Company policy', id: 2 },
      { title: 'Team members', id: 3 },
    ],
  },
];
