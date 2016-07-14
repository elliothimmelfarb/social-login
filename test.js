'use strict';


function returnPromise() {
  return new Promise((resolve, reject) => {
    resolve('hey')
  })
}

function returnReturnPromise() {
  return returnPromise()
    .then(res => {
      console.log('first', res);
      return res;
    })
}


returnReturnPromise()
  .then(res => {
    console.log('second', res);
  })
