export default {
  login (user) {
    sessionStorage.user = JSON.stringify(user)
  },
  logout () {
    sessionStorage.user = ''
    delete sessionStorage.user
  },
  isLogin () {
    return !!sessionStorage && !!sessionStorage.user && !!JSON.parse(sessionStorage.user).appuid
  },
  saveURL (route) {
    sessionStorage.returnURL = JSON.stringify({
      name: route.name,
      // path: route.path,
      query: route.query
    })
  },
  restoreURL ({replace}) {
    if (!!sessionStorage && !!sessionStorage.returnURL) {
      replace(JSON.parse(sessionStorage.returnURL))
    }
  }
}