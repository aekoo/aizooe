

import 'whatwg-fetch';


function obj2params(obj) {
  var result = '';
  var item;
  for (item in obj) {
    result += '&' + item + '=' + encodeURIComponent(obj[item]);
  }
  return result ? result.slice(1) : result;
}

function fetch_(url, opts){
  let options = {
    method: opts.method || 'GET',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: opts.data &&obj2params(opts.data),
  }

  return fetch(url, options).then((response) => {
    return response.json()
  })


}


export let post = (url, data) => {
  return fetch_(url, {method: 'POST', data})
}

export let get = (url) => {
  return fetch_(url, {method: 'GET'})
}