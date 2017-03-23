const network = weex.requireModule('app_info')

export const getLocalCurrency = failure => {
  if (weex.config.platform === 'Web') {

  } else {
    network.getLocalCurrency(failure)
  }
}
