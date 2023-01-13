import { localeOptions, defaultLocale } from '../constants/config'



export const mapOrder = (array, order, key) => {
  array.sort(function (a, b) {
    var A = a[key]
    var B = b[key]
    if (order.indexOf(A + '') > order.indexOf(B + '')) {
      return 1
    } else {
      return -1
    }
  })
  return array
}

export const getDateWithFormat = () => {
  const today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1 // January is 0!

  var yyyy = today.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  return dd + '.' + mm + '.' + yyyy
}

export const getCurrentTime = () => {
  const now = new Date()
  return now.getHours() + ':' + now.getMinutes()
}

export const getCurrentLanguage = () => {
  let locale = defaultLocale;
  try {
    if (localStorage.getItem('currentLanguage') && localeOptions.filter(x => x.id === localStorage.getItem('currentLanguage')).length > 0) { locale = localStorage.getItem('currentLanguage'); }
  } catch (error) {
    console.log(">>>> src/utils/index.js : getCurrentLanguage -> error", error)
    locale = defaultLocale;
  }
  return locale;
}

export const setCurrentLanguage = (lang) => {
  try {
    localStorage.setItem('currentLanguage', lang)
  } catch (error) {
    console.log(">>>> src/utils/index.js : setCurrentLanguage -> error", error)
  }
}
export const getCurrentUser = () => {
  let user = null;
  try {
    user = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null;
    
  } catch (error) {
    console.log(">>>> src/utils/index.js : getCurrentUser -> error", error)
    user = null;
  }
  return user;
}

export const setCurrentUser = (user) => {
  try {
    if (user) {
      
      localStorage.setItem('user', JSON.stringify(user))
      console.log("user_saved")
    } else {
      localStorage.removeItem('user');
    }
  } catch (error) {
    console.log(">>>> src/utils/index.js : setCurrentUser -> error", error)
  }
}
export const set_token = (token) => {
  try {
    
    if (token) {
      localStorage.setItem('token', token)
      console.log("token_saved")
    } else {
      localStorage.removeItem('token');
    }
  } catch (error) {
    console.log(">>>> src/utils/index.js : set_token -> error", error)
  }
}

export const get_token = () => {
  let token = null;
  try {
    token = localStorage.getItem('token') != null ? JSON.parse(localStorage.getItem('token')) : null;
  } catch (error) {
    console.log(">>>> src/utils/index.js : get_token -> error", error)
    token = null;
  }
  return token;
}