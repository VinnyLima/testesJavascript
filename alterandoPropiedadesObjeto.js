/** Dia 04/05/2021
 *Desenvolvendo em react necessitava pegar esse objeto e transforma-lo em um novo
 objeto, com propiedades diferentes no caso as propiedades seriam label e value.
 Essa resposta conseguir obeter no seguinte link
 (https://pt.stackoverflow.com/questions/255884/%C3%89-poss%C3%ADvel-alterar-o-nome-de-uma-posi%C3%A7%C3%A3o-do-json-usando-javascript-ou-jquery) 
 */

const usuarios = [
  {id: '10663093-b6bb-41cc-8fc3-80eddc318c0b', nomeUsus: 'Paulo Lima'},
  {id: '10663093-b6bb-41cc-8fc3-80eddc318c0c', nomeUsus: 'Ana Lima'},
  {id: '10663093-b6bb-41cc-8fc3-80eddc318c0d', nomeUsus: 'Lucas Lima'},
  {id: '10663093-b6bb-41cc-8fc3-80eddc318c0e', nomeUsus: 'João Lima'},
];

var newArray = usuarios.map(function(usuario){
  return {label: usuario.id, value: usuario.nomeUsus}
});

console.log(newArray);