//promise 学习
{
  let fn = new Promise(function(resolve, reject) {
    let num = 3;
    if (num > 5) {
      resolve(num)
    } else {
      reject(num)
    }
  })
  // 第一次回调
  fn.then((res) => {
    console.log(`第一次回调成功res==>${res}`);
    return new Promise((resolve, reject) => {
      if (2 * res > 15) {
        resolve(2 * res)
      } else {
        reject(2 * res)
      }
    })
  }, (err) => {
    console.log(`第一次回调失败err==>${err}`);
  }).then((res) => { // 第二次回调
    console.log(`第二次回调失败${res}`);
  }, (err) => {
    console.log(`第二次回调失败err==>${err}`);
  });

}