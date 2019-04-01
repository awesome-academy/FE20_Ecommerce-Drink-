import Home from './../components/home/Home';
import Product from './../components/product/Product';
import DetailProduct from './../components/detailProduct/DetailProduct';
import ListProduct from './../components/product/ListProduct';

const routes = {
    route: [
        {
            path: '/', exact: true, component: Home
        },
        {
            path: '/product', exact: true, component: Product
        },
        {
            path: '/detailproduct', exact: true, component: DetailProduct
        },
        {
            path: '/productlist', exact: true, component: ListProduct
        }
    ]
}
export default routes;