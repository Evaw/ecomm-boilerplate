import faker from 'faker';

let products = '';

for (let i = 0; i < 10; i++) {
  const name = faker.commerce.productName();
  products += `<tr><td>${name}<td></tr>\n`;
}
document.querySelector('#products-table').innerHTML = products;
console.log(products);
