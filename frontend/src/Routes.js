import {CreateAccount} from "./pages/CreateAccount";
import { DistributorListing } from "./pages/DistributorListings";
import { Home } from "./pages/Home.jsx";
import { ItemDetails } from "./pages/ItemDetails";
import {Login} from "./pages/Login";
import { OrderHistory } from "./pages/OrderHistory";
import SearchPage from "./pages/SearchPage";
import { UserProfile} from "./pages/UserProfile";
import { EditProfile } from './pages/EditProfile';

export const ROUTES = [
    { path:'/search', component: SearchPage},
    { path: '/distDetails', component: DistributorListing},
    { path: '/create', component: CreateAccount },
    { path: '/orders', component: OrderHistory},
    { path: '/userP', component: UserProfile},
    { path: '/home', component: Home},
    { path: '/edit', component: EditProfile},
    { path: '/', component: Login}
]