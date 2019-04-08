import Home from './../components/home/Home';
import About from './../components/about/About';
import Blog from './../components/blog/Blog';
import Product from './../components/product/Product';
import Cart from './../components/cart/Cart';
import Order from './../components/order/Order';
import Login from './..//components/login/Login';
import Register from './../components/register/Register';
import Contact from './../components/contact/Contact';
import DetailProduct from './../components/detailProduct/DetailProduct';
import DetailBlog from './../components/blog/DetailBlog';
import ListProduct from './../components/product/ListProduct';
import Admin from '../components/admin/Admin';
import Errors from './../components/error/Error';
import CategoryList from '../components/admin/categories/CategoryList';
import UserList from '../components/admin/user/UserList';
import ProductList from '../components/admin/product/ProductList';
import Orders from './../components/admin/order/Oders';

const routes = {
    route: [
        {
            path: '/', exact: true, component: Home
        },
        {
            path: '/about', exact: true, component: About
        },
        {
            path: '/blog', exact: true, component: Blog
        },
        {
            path: '/login', exact: true, component: Login
        },
        {
            path: '/order', exact: true, component: Order
        },
        {
            path: '/register', exact: true, component: Register
        },
        {
            path: '/contact', exact: true, component: Contact
        },
        {
            path: '/cart', exact: true, component: Cart
        },
        {
            path: '/product', exact: true, component: Product
        },
        {
            path: '/product/:id', component: DetailProduct
        },
        {
            path: '/detailblog', exact: true, component: DetailBlog
        },
        {
            path: '/listproduct', exact: true, component: ListProduct
        },
        {
            path: '/admin', exact: true, component: Admin
        },
        {
            path: '/error', exact: true, component: Errors
        },
        {
            path: '/userlist', exact: true, component: UserList
        },
        {
            path: '/categorylist', exact: true, component: CategoryList
        },
        {
            path: '/productlist', exact: true, component: ProductList
        },
        {
            path: '/orders', exact: true, component: Orders
        }
    ]
}
export default routes;