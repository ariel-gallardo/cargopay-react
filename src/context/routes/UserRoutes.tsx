import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {Navigation} from '@toolpad/core/AppProvider';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const navigation : Navigation = [
    {kind: 'header', title: 'Perfil'},
    {segment:"", title: "Perfil"},
    {segment:"cards", title: "Tarjetas"},
];

export const userDashboardNavigation = [
            {kind: 'header', title: 'Panel de Usuario'},
            {kind: 'page', segment: 'profile', title: 'Perfil', icon: <AccountBoxIcon color="secondary"/>},
            {kind: 'page', segment: 'profile/cards', title: 'Tarjetas', icon: <CreditCardIcon />}
] as Navigation;

export default navigation;