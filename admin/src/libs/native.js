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
  }
}