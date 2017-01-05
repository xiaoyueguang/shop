export default {
  login (user) {
    localStorage.user = JSON.stringify(user)
  },
  logout () {
    localStorage.user = ''
    delete localStorage.user
  },
  isLogin () {
    return !!localStorage && !!localStorage.user && !!JSON.parse(localStorage.user).appuid
  }
}