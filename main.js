

// const newUsers = [
//   {value: '10663093-b6bb-41cc-8fc3-80eddc318c0b', label: 'Paulo Lima'},

// ]

// var obj = {a:1, b:2, c:3};

// //Para prop (propriedade) in obj (objeto) faça
// for (var prop in usuarios) {
//   // ctrl+shift+k (para abrir o console no mozilla firefox)
  
//   var newUsers = Object.create({}, {value: usuarios[prop].id});

//   console.log(newUsers);



// }



// function replacer(key, value) {
//   if ( key === id) {
//     return 'value';
//   }
//   return key;
// }

// var foo = {fundação: "Mozilla", modelo: "caixa", semana: 45, transporte: "carro", mês: 7};
// var jsonString = JSON.stringify(usuarios, replacer);

// console.log(jsonString);

/* 
function find_max(nums) {

  let max_num = Number.NEGATIVE_INFINITY
  for (const num of nums) {

      if(num > max_num) {
        max_num = num;
      }
    
  }

  console.log(max_num);
  
}


const teste = [-2,10,25,30,-20,2,-4,-40];

find_max(teste)
 */


 const teste1 = [1,2,3,4];
 const teste2 = [];

 console.log({
   teste1: teste1.length, 
   teste2: teste2.length
 });