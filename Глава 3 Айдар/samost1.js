console.log('Упражнение для самостоятельной работы 3.1')
console.log('-----------------------')

console.log('Задание 1')
let a = "Привет, Simbirsoft";
let b = 2022;
let c = true;
let d = false;

console.log(typeof a, typeof b, typeof c, typeof d); 

console.log('-----------------------')

console.log('Задание 2')
let str1 = 'Привет, '; 
let str2 = "Мир!"; 
let itog = str1+str2; 
console.log(itog);

console.log('-----------------------')

console.log('Задание 3')
let imya = "Айдар"; 
let vv = "Привет, " + imya + "!";

console.log(vv); 

console.log('-----------------------')

console.log('Задание 4')
let age = "19"; 
let v = "Мне " + age + " лет!";

console.log(v); 

console.log('-----------------------')

console.log('Задание 5')
let str = "abcde";
console.log(str[0]); 
console.log(str[2]); 
console.log(str[4]); 

console.log('-----------------------')

console.log('Задание 6')
let hour = 22;
let minute = 17;
let second = 39;

console.log(hour + ":" + minute + ":" + second); 

console.log('-----------------------')

console.log('Задание 7')
let number = 36;
let sqrt = Math.sqrt(number);
console.log(sqrt.toFixed(3)); 

console.log('-----------------------')

console.log('Задание 8')
let user = {
    id: 1,
    login: "Administrator",
    email: "admin@admin.admin",
    name: "Иванов Анатолий",
    age: 23,
    account: '125$',
    phone: '+79602542214',
    address: {
      city: 'г. Ульяновск',
      street: 'ул. Ленина',
      build: 'д.25',
      flat: 'кв.15',
    },
    isActive: true,
    role: {
      id: 1,
      title: "Администратор",
      name: "administrator",
    },
  };
  
  console.log(user.name);
  console.log(user.age); 
  console.log(parseFloat(user.account)); 
  console.log(user.address.city + ", " + user.address.street + ", " + user.address.build + ", " + user.address.flat); 
  console.log(user.role.title); 
  
  let birthYear = (new Date()).getFullYear() - user.age;
  console.log(birthYear); 
  
  let nameParts = user.name.split(' ');
  let lastName = nameParts[0];
  console.log(lastName); 