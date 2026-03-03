//call
function getFullName(city, state){
    console.log(`Name: ${this.firstName} ${this.lastName}, city : ${city}, state : ${state}`)
}

const obj1 = {
    firstName : 'Ronak',
    lastName : 'Basita'
}

const obj2 = {
    firstName: 'Sahil',
    lastName : 'Basita'
}

getFullName.call(obj1, 'Ahmedabad', 'Gujarat');
getFullName.call(obj2, 'Ahmedabad', 'Gujarat');

//apply

getFullName.apply(obj1, ['Ahmedabad', 'Gujarat']);
getFullName.apply(obj2, ['Ahmedabad', 'Gujarat']);

//bind

const fun = getFullName.bind(obj1,'Ahmedabad')
fun('Gujarat')
fun('Surat')

const fun2 = getFullName.bind(obj2,'Ahmedabad')
fun2('Gujarat')
fun2('Surat')


//Polybind
Function.prototype.myBind = function (context, ...args){
  let fn = this
  return function(...args2){
    fn.apply(context, [...args,...args2])
  }
}

const fun1 = getFullName.myBind(obj1,'Ahmedabad')
fun1('Gujarat')
fun1('Surat')

const fun3 = getFullName.myBind(obj2,'Ahmedabad')
fun3('Gujarat')
fun3('Surat')

