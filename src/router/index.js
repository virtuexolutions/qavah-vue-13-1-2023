/* eslint-disable */
import Vue from "vue";
import VueRouter, { RouterLink } from "vue-router";
import HomeView from "../views/Home.vue";
const isAuthGuardActive = true;
import {getCurrentUser,setCurrentUser} from "@/utils/index";
import {apiUrl} from '@/constants/config';
import axios from 'axios';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/device_restriction",
    name: "device_restriction",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/device_restriction.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/dashboard"),
    redirect: `dashboard/discover`,
    meta: { loginRequired: true },
    /*
    define with Authorization :
    meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
    */
    children: [
      {
        path: "discover",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "Discover" */ "@/views/dashboard/Discover"
          ),
      },
      {
        path: "favored",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "Favoured" */ "@/views/dashboard/Favoured"
          ),
      },
      {
        path: "beloved",
        meta: { loginRequired: true },
        component: () =>
          import(/* webpackChunkName: "Beloved" */ "@/views/dashboard/Beloved"),
      },
      {
        path: "beloved/:uid",
        meta: { loginRequired: true },
        component: () =>
          import(/* webpackChunkName: "Beloved" */ "@/views/dashboard/Beloved/callFriend"),
      },
      {
        path: "seeking",
        meta: { loginRequired: true },
        component: () =>
          import(/* webpackChunkName: "Seeking" */ "@/views/dashboard/Seeking"),
      },
      {
        path: "mutual-seeking",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "mutualSeeking" */ "@/views/dashboard/Seeking/mutualSeeking.vue"
          ),
      },
      {
        path: "reversed-seeking",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "reversedSeeking" */ "@/views/dashboard/Seeking/reversedSeeking.vue"
          ),
      },
      {
        path: "saved-seeking",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "savedSeeking" */ "@/views/dashboard/Seeking/savedSeeking.vue"
          ),
      },
      {
        path: "saved-seeking/:id",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "savedSeeking" */ "@/views/dashboard/Seeking/savedSearchPage.vue"
          ),
      },
      {
        path: "notifications",
        meta: { loginRequired: true },
        component: () =>
          import(/* webpackChunkName: "Events" */ "@/views/dashboard/Notifications"),
      },
      {
        path: "events",
        meta: { loginRequired: true },
        component: () =>
          import(/* webpackChunkName: "Events" */ "@/views/dashboard/Events"),
      },
      {
        path: "views",
        meta: { loginRequired: true },
        component: () =>
          import(/* webpackChunkName: "Viewed" */ "@/views/dashboard/Viewed"),
      },
      {
        path: "lovenotes",
        meta: { loginRequired: true },
        component: () =>
          import(/* webpackChunkName: "Viewed" */ "@/views/dashboard/Lovenotes"),
      },
      {
        path: "powerups",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "Spotlight" */ "@/views/dashboard/Spotlight"
          ),
      },
      {
        path: "payment",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "Spotlight" */ "@/views/dashboard/Spotlight/payment"
          ),
      },
      {
        path: "subscribeaddons",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "Spotlight" */ "@/views/dashboard/Spotlight/subscribeAddOns"
          ),
      },
      {
        path: "payment-success",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "Spotlight" */ "@/views/dashboard/Spotlight/payment-success"
          ),
      },
      {
        path: "payment-cancel",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "Spotlight" */ "@/views/dashboard/Spotlight/payment-cancel"
          ),
      },
      {
        path: "profile",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "Profile" */ "@/views/dashboard/Profile/"
          ),
      },
      {
        path: "profile/:id",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "Profile" */ "@/views/dashboard/Profile/otherUserProfile"
          ),
      },
      {
        path: "phone-verification",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "Profile" */ "@/views/dashboard/Verify/phoneVerify"
          ),
      },
      {
        path: "settings",
        meta: { loginRequired: true },
        component: () =>
          import(
            /* webpackChunkName: "Settings" */ "@/views/dashboard/Settings"
          ),
      },
      {
        path: "help",
        component: () =>
          import(/* webpackChunkName: "Help" */ "@/views/dashboard/Help"),
      },
      // Phone Verification
      {
        path: "phone-verification",
        component: () =>
          import(/* webpackChunkName: "Help" */ "@/views/dashboard/Verify/phoneVerify"),
      },
    ],
  },
  {
    path: "/phone-verification",
    component: () =>
      import(/* webpackChunkName: "Help" */ "@/views/dashboard/Verify/phoneVerify"),
      meta: { loginRequired: true , verificationNeeded: true},
  },
  {
    path: "/premium-features",
    component: () =>
      import(
        /* webpackChunkName: "Premium_features" */ "@/views/Premium_features.vue"
      ),
  },
  {
    path: "/pricing-plus",
    component: () =>
      import(/* webpackChunkName: "Pricing_plus" */ "@/views/Pricing_plus.vue"),
  },
  {
    path: "/pricing-gold",
    component: () =>
      import(/* webpackChunkName: "Pricing_gold" */ "@/views/Pricing_gold.vue"),
  },
  {
    path: "/pricing-platinum",
    component: () =>
      import(
        /* webpackChunkName: "Pricing_platinum" */ "@/views/Pricing_platinum.vue"
      ),
  },
  {
    path: "/privacy-policy",
    component: () =>
      import(/* webpackChunkName: "Privacy" */ "@/views/Privacy.vue"),
  },
  {
    path: "/help",
    component: () =>
      import(/* webpackChunkName: "Privacy" */ "@/views/Help.vue"),
  },
  {
    path: "/troubleshoot",
    component: () =>
      import(/* webpackChunkName: "Privacy" */ "@/views/Troubleshooting.vue"),
  },
  {
    path: "/cookie-policy",
    component: () =>
      import(
        /* webpackChunkName: "Cookie_policy" */ "@/views/Cookie_policy.vue"
      ),
  },
  {
    path: "/cookie-settings",
    component: () =>
      import(
        /* webpackChunkName: "Cookie_settings" */ "@/views/Cookie_settings.vue"
      ),
  },
  {
    path: "/success-stories",
    component: () =>
      import(
        /* webpackChunkName: "Success_stories" */ "@/views/Success_stories.vue"
      ),
  },
  {
    path: "/guide-to-qavah",
    component: () =>
      import(/* webpackChunkName: "Guide" */ "@/views/Guide.vue"),
  },
  {
    path: "/support",
    component: () =>
      import(/* webpackChunkName: "Support" */ "@/views/Support.vue"),
  },
  {
    path: "/qavah-live",
    component: () =>
      import(/* webpackChunkName: "Support" */ "@/views/QavahLive.vue"),
  },
  {
    path: "/qavah-court",
    component: () =>
      import(/* webpackChunkName: "Support" */ "@/views/QavahCourt.vue"),
  },
  {
    path: "/contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "@/views/Contact.vue"),
  },
  {
    path: "/terms-and-conditions",
    component: () =>
      import(/* webpackChunkName: "Terms" */ "@/views/Terms.vue"),
  },
  {
    path: "/advertise",
    component: () =>
      import(/* webpackChunkName: "advertise" */ "@/views/Advertise.vue"),
  },
  {
    path: "/careers",
    component: () =>
      import(/* webpackChunkName: "Careers" */ "@/views/Careers.vue"),
  },
  {
    path: "/media-room",
    component: () =>
      import(/* webpackChunkName: "Media_room" */ "@/views/Media_room.vue"),
  },
  {
    path: "/safety",
    component: () =>
      import(/* webpackChunkName: "Safety" */ "@/views/Safety.vue"),
  },
  {
    path: "/learn",
    component: () =>
      import(/* webpackChunkName: "Learn" */ "@/views/Learn.vue"),
  },
  {
    path: "/error",
    component: () => import(/* webpackChunkName: "Error" */ "@/views/Error"),
  },
  {
    path: "/unauthorized",
    component: () =>
      import(/* webpackChunkName: "Unauthorized" */ "@/views/Unauthorized"),
  },
  {
    path: "/blog",
    component: () => import(/* webpackChunkName: "Blog" */ "@/views/blog"),
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "user" */ "@/views/user"),
    redirect: "/user/login",
    meta: { loginRequired: false },
    children: [
      {
        path: "login",
        meta: { loginRequired: false },
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/user/Login"),
      },
      {
        path: "register",
        meta: { loginRequired: false },
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/user/Register_Step_1"),
      },
      {
        path: "forgot-password",
        meta: { loginRequired: false },
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/user/ForgotPassword"),
      },
      {
        path: "reset-password/:token",
        meta: { loginRequired: false },
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/user/ResetPassword"),
      },
    ],
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error" */ "@/views/Error"),
  },
];
const router = new VueRouter({
  mode: "history",
  routes:routes,
}); 

// router.beforeResolve((to, from, next) => {
//   // If this isn't an initial page load.
//   if (to.name) {
//     // Start the route progress bar.
//     NProgress.start()
//   }
//   next()
// })

// router.afterEach((to, from) => {
//   // Complete the animation of the route progress bar.
//   NProgress.done()
// })


router.beforeEach((to, from, next) => {
  //localStorage.clear();
    let device_screen = screen.width ;
    if(device_screen < 1024 && to.name !="device_restriction") 
    { 
      debugger
      next('/device_restriction');
    }
  if (to.matched.some(record => record.meta.loginRequired)) {
      let user = JSON.parse(localStorage.getItem("user"))
      
      if (user) 
      {
          next();
          return;
      } else {
         next('/user/login')
      }
  } else {
      next();
  }
});


// router.beforeEach(async (to, from, next) => {
//   // if(to.matched.some(record => record.meta.loginRequired && record.meta.verificationNeeded)) {
//   //    console.log('verification needed')
//   // }
  
//   if (to.matched.some(record => record.meta.loginRequired)) {
//     console.log("meta record check",record.meta.loginRequired);
//     if(JSON.parse(localStorage.getItem("user"))) 
//     {
//       const user = localStorage.getItem("user");
//       if (user) {
//         next()
//       } 
//       else {
//         //setCurrentUser(null);
//         window.scrollTo(0, 0);
//         next('/user/login')
//       }
//     } 
//     else {
//       window.scrollTo(0, 0);
//       next();
//     }
//   }
//   else {
//     window.scrollTo(0, 0);
//     next()
//   }
// });





export default router;
