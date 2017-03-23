const eventBus = weex.requireModule('eventBus')

export const fireEvent = (event, data) => {
  if (weex.config.platform === 'Web') {

  } else {
    eventBus.fireEvent(event, data)
  }
}

export const addEventListener = (event, callback) => {
  if (weex.config.platform === 'Web') {

  } else {
    eventBus.addEventListener(event, callback)
  }
}

export const removeEventListener = (event) => {
  if (weex.config.platform === 'Web') {

  } else {
    eventBus.removeEventListener(event)
  }
}
