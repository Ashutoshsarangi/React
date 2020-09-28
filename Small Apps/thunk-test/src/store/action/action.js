
export function ageUpAsync(payload) {
  return {
    type: 'AGE_UP',
    payload
  }
}
export function ageUp(payload) {

  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(ageUpAsync(payload))
    }, 5000);
  }
}

export function ageDown(payload) {
  return {
    type: 'AGE_DOWN',
    payload
  }
}

export function loading() {
  return {
    type: 'LOADING_START'
  }
}