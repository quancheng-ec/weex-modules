// const network = weex.requireModule('network')
const network = weex.requireModule('network')
// const origin = "http://10.100.0.195:3000";
const origin = 'http://fk.dev.quancheng-ec.com'

export const sendRequest = (path, params, method, success, failure) => {
  path = origin + path
  if (weex.config.platform === 'Web') {
    var request = new XMLHttpRequest()
    request.open('POST', path, true)
    request.setRequestHeader('Content-type', 'application/json')
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        success(JSON.parse(request.responseText))
      }
    }
    request.send(JSON.stringify(params))
  } else {
    network.sendRequest(path, params, method, success, failure)
  }
}

export const uploadWithPaths = (path, success, failure) => {
  if (weex.config.platform === 'web') {

  } else {
    network.uploadWithPaths(path, success, failure)
  }
}

export const getOSSImageUrls = (imageObjects, success, failure) => {
  if (weex.config.platform === 'web') {

  } else {
    network.getOSSImageUrls(imageObjects, success, failure)
  }
}
