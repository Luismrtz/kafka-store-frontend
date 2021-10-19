import HomePage from '../../views/Home'
import DetailsPage from '../../views/Details'
import ShippingPage from '../../views/ShippingPage'
import OrderPage from '../../views/OrderPage';
import PlaceOrderPage from '../../views/PlaceOrderPage';


export interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}


export const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        exact: true
    },
    {
        path: '/details',
        name: 'Details',
        component: DetailsPage,
        exact: false
    },
    {
        path: '/shipping',
        name: 'Shipping',
        component: ShippingPage,
        exact: false
    },
    {
        path: '/placeOrder',
        name: 'PlaceOrder',
        component: PlaceOrderPage,
        exact: false
    },
    {
        path: '/order/:id',
        name: 'Order',
        component: OrderPage,
        // exact: change to true later when adding a ID to params
        exact: true
    },
 
]


