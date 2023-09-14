const listaSpesa = [
  'biscotti',
  'latte',
  'acqua',
  'uova',
  'pasta'
]
console.log(listaSpesa)

let countElement = 0;
let messagge = document.getElementById('list');
while(countElement < listaSpesa.length){
  const element = listaSpesa[countElement];
  const li = document.createElement('li');
  li.append(element);
  messagge.append(li);
  messagge.classList.add('list-unstyled');
  countElement++;
}


