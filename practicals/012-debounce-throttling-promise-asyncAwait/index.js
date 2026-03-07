//Debounce
function debounce(fn, delay){
  let timer;
  return function(...args){
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this,args)
    },delay)
  }
}

const input = document.getElementById("search");
input.addEventListener("input",
  debounce((e)=>{
    console.log("Fetching data:", e.target.value);
  },1000)
)
//-------------------------------------------------------------------------//
//throttling

function throttle(fn, delay){
    let flag;
    return function(...args){
      if(!flag){
        fn.apply(this,args)
        flag = true
        setTimeout(()=>{
          flag = false;
        },delay)
      }
    }
}

const btn = document.getElementById("btn");
btn.addEventListener("click",
  throttle(()=>{
    console.log("Button clicked");
  },2000)
)

//-------------------------------------------------------------------------//
//promise

const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("normal promise resolve")
  },3000);
})
console.log('before')
promise.then((res)=>{
  console.log("chain 1",res);
  return res
}).then((res)=>{
  console.log("chain 2",res);
}).then(()=>{
  console.log("chain finished");
}).catch((err)=>{
  console.error(err);
})
console.log('after')

//output : 
//before
//after
//normal promise resolve

//-------------------------------------------------------------------------//

function p1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("p1 resolved")
    },1000)
  })
}

function p2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("p2 resolved")
    },2000)
  })
}

function p3(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("p3 resolved")
    },5000)
  })
}
//-------------------------------------------------------------------------//
//promise.all

let promiseAll = Promise.all([p1(),p2(),p3()])
promiseAll.then((res)=>{
  console.log("Promise.all Result : ",res);
}).catch((err)=>{
  console.error(err);
})

//-------------------------------------------------------------------------//

// promise.settle

let promiseAllSettled = Promise.allSettled([p1(),p2(),p3()]).then((res)=>{
  console.log("Promise.allSettled Result : ",res);
}).catch((err)=>{
  console.error(err);
})

// Promise.allSettled return promise object that includes state and it's value

//-------------------------------------------------------------------------//

// Promise.race

let promiseRace = Promise.race([p1(),p2(),p3()]).then((res)=>{
  console.log("Promise.race Result : ",res)
}).catch((err)=>{
  console.error(err)
})

//-------------------------------------------------------------------------//

//Promise.any

let promiseAny = Promise.any([p1(),p2(),p3()]).then((res)=>{
  console.log("Promise.any result : ",res)
}).catch((err)=>{
  console.error(err)
})

//-------------------------------------------------------------------------//