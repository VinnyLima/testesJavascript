const usuarios = [
  {id: '10663093-b6bb-41cc-8fc3-80eddc318c0b', nomeUsus: 'Paulo Lima'},
  {id: '10663093-b6bb-41cc-8fc3-80eddc318c0c', nomeUsus: 'Ana Lima'},
  {id: '10663093-b6bb-41cc-8fc3-80eddc318c0d', nomeUsus: 'Lucas Lima'},
  {id: '10663093-b6bb-41cc-8fc3-80eddc318c0e', nomeUsus: 'João Lima'},
];

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
var newArray = usuarios.map(function(item){
  return {label: item.id, value: item.nomeUsus}
});

console.log(newArray);


// function replacer(key, value) {
//   if ( key === id) {
//     return 'value';
//   }
//   return key;
// }

// var foo = {fundação: "Mozilla", modelo: "caixa", semana: 45, transporte: "carro", mês: 7};
// var jsonString = JSON.stringify(usuarios, replacer);

// console.log(jsonString);