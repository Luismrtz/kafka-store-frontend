import HomePage from '../../views/Home'
import DetailsPage from '../../views/Details'


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
 
]


