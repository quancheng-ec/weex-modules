const modalUI = weex.requireModule('modalUI')

export const showToast = message => {
  if (weex.config.platform === 'Web') {
  } else {
    modalUI.showToast(message)
  }
}

export const showProgress = () => {
  if (weex.config.platform === 'Web') {

  } else {
    modalUI.showProgress()
  }
}

export const dismissProgress = () => {
  if (weex.config.platform === 'Web') {

  } else {
    modalUI.dismissProgress()
  }
}

export const showLoading = () => {
  if (weex.config.platform === 'Web') {

  } else {
    modalUI.showLoading()
  }
}

export const dismissLoading = () => {
  if (weex.config.platform === 'Web') {

  } else {
    modalUI.dismissLoading()
  }
}

export const showLoadingFailure = () => {
  if (weex.config.platform === 'Web') {

  } else {
    modalUI.showLoadingFailure()
  }
}

export const showAlert = (params, callback) => {
  if (weex.config.platform === 'Web') {

  } else {
    modalUI.showAlert(params, callback)
  }
}

export const showSheet = (params, callback, cancelCallback) => {
  if (weex.config.platform === 'Web') {

  } else {
    modalUI.showSheet(params, callback, cancelCallback)
  }
}
