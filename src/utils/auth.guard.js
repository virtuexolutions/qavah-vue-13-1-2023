import { isAuthGuardActive } from '../constants/config'
import { setCurrentUser, getCurrentUser } from '.'
export default (to, from, next) => {
  if (to.matched.some(record => record.meta.loginRequired)) {
    debugger
    if (isAuthGuardActive) {
      debugger
      const user = getCurrentUser();
      if (user) {
        const roleArrayHierarchic = to.matched.filter(x => x.meta.roles).map(x => x.meta.roles);
        if (roleArrayHierarchic.every(x => x.includes(user.role))) {
          window.scrollTo(0, 0);
          next();
        } else 
        {
          window.scrollTo(0, 0);
          next('/unauthorized')
        }
      } else {
        setCurrentUser(null);
        window.scrollTo(0, 0);
        next('/user/login')
      }
    } else {
      window.scrollTo(0, 0);
      next();
    }
  } else {
    window.scrollTo(0, 0);
    next()
  }
}
