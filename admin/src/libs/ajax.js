const isTest = location.href.indexOf('localhost') > 0

function ajax ({
  api,
  type = 'get',
  data = {},
  success = function () {}
}) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    if (!data.appuid && sessionStorage && sessionStorage.user && JSON.parse(sessionStorage.user).appuid) {
      data.appuid = JSON.parse(sessionStorage.user).appuid;
    }

    let params = '';
    for (let key in data) {
      params += `&${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    }
    params = params.substr(1);

    if (type === 'get') {
      xhr.open('GET', `http://www.shop.com/index.php/${api}?${params}`, true);
      xhr.send();
    }
    if (type === 'post') {
      xhr.open('POST', `http://www.shop.com/index.php/${api}`, true);
      xhr.setRequestHeader ("Content-Type" , "application/x-www-form-urlencoded");
      xhr.send(params);
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        let {status} = xhr
        if (status >= 200 && status < 300) {
          // success(JSON.parse(xhr.responseText))
          resolve(JSON.parse(xhr.responseText))
        }
      }
    }
  });
}


ajax.install = function (Vue, options) {
  Vue.prototype.$ajax = ajax;
}

export default ajax