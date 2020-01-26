/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Icons from "views/examples/Icons.jsx";

var routes = [
  {
    path: "/index",
    name: "AI Dashboard",
    icon: "ni ni-chart-bar-32 text-green",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Notifications",
    icon: "ni ni-notification-70 text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Database",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  }
];
export default routes;
