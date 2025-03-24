import {Navigation} from '@toolpad/core/AppProvider';
import UserRoutes from '@routes/UserRoutes';
const navigation : Navigation = [
    {kind:'header', title: "CargoPay"},
    {segment:"register", title: "Register"},
    {segment:"login", title: "Login"},
    {segment:"profile", children: UserRoutes}
];

export default navigation;