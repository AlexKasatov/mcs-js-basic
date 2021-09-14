let crypto = [
  {
    name: "Bitcoin",
    price: 100000,
    color: "red",
  },
  {
    name: "Ethereum",
    price: 10000,
    color: "blue",
  },
  {
    name: "Litecoin",
    price: 45500,
    color: "green",
  },
];

//нахождение % от общей суммы всех криптовалют
function percentage(partialValue) {
  var totalValue = crypto[0].price + crypto[1].price + crypto[2].price;
  return (100 * partialValue) / totalValue;
}

const container = document.getElementById("items"); // нашли в разметке контейнер куда надо добавлять элементы
container.classList.add("price-block"); // стилизовали контейнер

const priceBlock = document.createElement("div");
container.append(priceBlock);

crypto.forEach((currency) => {
  const myElement = document.createElement("div"); // для каждого элемента массива создали div
  const title = document.createElement("h2"); // создали блок с именем
  const price = document.createElement("h3"); // создали блок с ценой
  const priceBlock = document.createElement("div"); // создали блок показателя цены

  myElement.append(title, price, priceBlock); // в каждый из блоков поместили элементы созданные выше

  //стилизуем все элементы
  myElement.classList.add("price-block__place-holder");
  title.classList.add("price-block__heading");
  price.classList.add("price-block__price");
  priceBlock.classList.add("price_block__price-bar");
  priceBlock.style.backgroundColor = currency.color;

  //добавляем контент в блоки
  title.textContent = currency.name;
  price.textContent = currency.price;
  priceBlock.style.width = "" + percentage(currency.price) + "%"; // изменяет длинну блока в зависимости от price из массива crypto

  container.append(myElement); //вставили в контейнер из разметки созданные выше блоки
});
