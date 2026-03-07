async function p1(){
    return fetch('https://dummyjson.com/ip').then(res=>res.json())
}

async function p2(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json())
    return res
}

async function p3(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return res.json()
    
}

let promiseAllRealApis = Promise.all([p1(),p2(),p3()])
                .then((res)=>{
                    console.log("Promise.all")
                    console.log(res)
                }).catch((err)=>{
                    console.error(err)
                })

let promiseAllSettledRealApis = Promise.allSettled([p1(),p2(),p3()])
                .then((res)=>{
                    console.log("Promise.allSettled")
                    console.log(res)
                }).catch((err)=>{
                    console.error(err)
                })

let promiseRaceRealApis = Promise.race([p1(),p2(),p3()])
                .then((res)=>{
                    console.log("Promise.race")
                    console.log(res)
                }).catch((err)=>{
                    console.error(err)
                })

let promiseanyRealApis = Promise.any([p1(),p2(),p3()])
                .then((res)=>{
                    console.log("Promise.any")
                    console.log(res)
                }).catch((err)=>{
                    console.error(err)
                })