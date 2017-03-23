const navigator = weex.requireModule('navigator')
import urlUtil from './urlUtil'
// const origin = "costpro://weex?url=http://qc-fk.oss-cn-hangzhou.aliyuncs.com/product_lib/app/";

const origin = 'costpro://weex?url=http://10.100.0.195:8080/dist/'

export const push = (url, data, callback) => {
  url = origin + url
  if (weex.config.platform === 'Web') {
    var weexUrl = urlUtil.getQueryParamFromName('url', url)
    weexUrl = weexUrl.replace(/\.weex\./, '.web.')
    url = window.location.origin + '/commonView.html?url=' + weexUrl + '&'

    for (var key in data) {
      var value = data[key]
      if (typeof value === 'object') {
        value = JSON.stringify(value)
      }
      url += key + '=' + encodeURIComponent(value) + '&'
    }

    url = url.substr(0, url.length - 1)
    window.location.href = url
  } else {
    navigator.push(url, data, callback)
  }
}

export const present = (url, data, callback) => {
  url = origin + url
  if (weex.config.platform === 'Web') {
    var weexUrl = urlUtil.getQueryParamFromName('url', url)
    weexUrl = weexUrl.replace(/\.weex\./, '.web.')
    url = window.location.origin + '/commonView.html?url=' + weexUrl + '&'

    for (var key in data) {
      var value = data[key]
      if (typeof value === 'object') {
        value = JSON.stringify(value)
      }
      url += key + '=' + encodeURIComponent(value) + '&'
    }

    url = url.substr(0, url.length - 1)
    window.location.href = url
  } else {
    console.log('aaaa')
    navigator.present(url, data, callback)
  }
}

export const dismiss = (data) => {
  if (weex.config.platform === 'Web') {
    window.history.back()
  } else {
    navigator.dismiss(data)
  }
}

export const dismissAndPush = (callbackInfo, url, data) => {
  url = origin + url
  if (weex.config.platform === 'Web') {
    this.push(url, data)
  } else {
    navigator.dismissAndPush(callbackInfo, url, data)
  }
}

export const dismissAndPresent = (url, data) => {
  url = origin + url
  if (weex.config.platform === 'Web') {
    this.present(url, data)
  } else {
    navigator.dismissAndPresent(url, data)
  }
}

export const pop = params => {
  if (weex.config.platform === 'Web') {
    window.history.back()
  } else {
    navigator.pop(params)
  }
}

export const setNavBarLeftItem = (param, callback) => {
  if (weex.config.platform === 'Web') {

  } else {
    if (!param.identifier) {
      param.identifier = new Date().getTime() + ''
    }
    navigator.setNavBarLeftItem(param, callback)
  }
}

export const addNavBarRightItem = (param, callback) => {
  if (weex.config.platform === 'Web') {

  } else {
    if (!param.identifier) {
      param.identifier = new Date().getTime() + ''
    }
    navigator.addNavBarRightItem(param, callback)
  }
}

export const removeNavBarRightItem = param => {
  if (weex.config.platform === 'Web') {

  } else {
    navigator.removeNavBarRightItem(param)
  }
}

export const setNavBarTitle = param => {
  if (weex.config.platform === 'Web') {

  } else {
    navigator.setNavBarTitle(param)
  }
}
