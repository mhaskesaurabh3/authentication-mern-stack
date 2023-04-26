import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';

export const sideBarData = [
  {
    title: 'Home',
    icon: <HomeOutlinedIcon />,
    id: 1,
  },
  {
    title: 'Members',
    icon: <PeopleOutlineIcon />,
    id: 2,
  },
  {
    title: 'Organization',
    icon: <CorporateFareOutlinedIcon />,
    id: 3,
    submenu: true,
    subMenuItems: [
      { title: 'Company detail', id: 1 },
      { title: 'Company policy', id: 2 },
      { title: 'Team members', id: 3 },
    ],
  },
];
