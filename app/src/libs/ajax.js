import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)

const isTest = location.href.indexOf('localhost') > 0

// function ajax ({
//   api,
//   type = 'get',
//   data,
//   success = function () {}
// }) {
//   if (isTest) {
//     let body = ''
//     for (let key in data) {
//       body += `&${key}=${data[key]}`
//     }
//     body = body.substr(1)
//     fetch(`http://www.shop.com/index.php/${api}`, {
//       method: type,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       },
//       credentials: 'include',
//       body
//     }).then(res => res.json())
//     .then(res => {
//       success(res)
//     })
//   } else {

//     axios[type](`index.php/${api}`, data)
//       .then(res => {
//         success(res)
//       })
//   }
// }

function ajax ({
  api,
  type = 'get',
  data = {},
  success = function () {}
}) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

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
          success(JSON.parse(xhr.responseText))
        }
      }
    }
  });
}


ajax.install = function (Vue, options) {
  Vue.prototype.$ajax = ajax;
}

export default ajax