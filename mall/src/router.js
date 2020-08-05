import Vue from "vue";
import Router from "vue-router"
import Home from "./pages/home"
import Index from "./pages/index"
import Product from "./pages/product"
import Detail from "./pages/detail"
import Cart from "./pages/cart"
import Order from "./pages/order"
import OrderConfirm from "./pages/orderConfirm"
import OrderPay from "./pages/orderPay"
import OrderList from "./pages/orderList"
import Login from "./pages/login"
import AliPay from "./pages/aliPay"

Vue.use(Router);

export default new Router({
    routes: [
        // 登录
        {
            path: "/login",
            name: "login",
            component: Login
        },
        // 首页
        {
            path: "/",
            name: "home",
            component: Home,
            redirect: { path: "/index" },
            children: [
                {
                    path: "/index",
                    name: "index",
                    component: Index
                },
                {
                    path: "/product/:id",
                    name: "product",
                    component: Product
                },
                {
                    path: "/detail/:id",
                    name: "detail",
                    component: Detail
                }
            ]
        },
        // 购物车
        {
            path: "/cart",
            name: "cart",
            component: Cart,
        },
        // 订单
        {
            path: "/order",
            name: "order",
            component: Order,
            children: [
                {
                    path: "confirm",
                    name: "order-confirm",
                    component: OrderConfirm,
                },
                {
                    path: "pay",
                    name: "order-pay",
                    component: OrderPay,
                },
                {
                    path: "list",
                    name: "order-list",
                    component: OrderList,
                }
            ]
        },
        // 支付跳转页
        {
            path: "/aliPay",
            name: "aliPay",
            component: AliPay,
        },
    ]
})