let crypto = [
  {
    name: "Bitcoin",
    price: 100000,
  },
  {
    name: "Ethereum",
    price: 10000,
  },
  {
    name: "Litecoin",
    price: 2000,
  },
];

const barWidth = document.querySelectorAll(".price_block__price-bar");
console.log(barWidth);

//вставка имени криптовалюты из массива cpypto

const btcName = document.querySelector(".price-block__heading_btc");
const ethName = document.querySelector(".price-block__heading_eth");
const ltcName = document.querySelector(".price-block__heading_ltc");

btcName.innerHTML = crypto[0].name;
ethName.innerHTML = crypto[1].name;
ltcName.innerHTML = crypto[2].name;

//вставка цены криптовалюты из массива cpypto

const btcPrice = document.querySelector(".price-block__price_btc");
const ethPrice = document.querySelector(".price-block__price_eth");
const ltcPrice = document.querySelector(".price-block__price_ltc");

btcPrice.innerHTML = crypto[0].price;
ethPrice.innerHTML = crypto[1].price;
ltcPrice.innerHTML = crypto[2].price;

//нахождение % от общей суммы всех криптовалют

function percentage(partialValue) {
  var totalValue = crypto[0].price + crypto[1].price + crypto[2].price;
  return (100 * partialValue) / totalValue;
}

//изменение длинны блока в зависимости от цены криптовалюты

barWidth[0].style.width = "" + percentage(crypto[0].price) + "%";

barWidth[1].style.width = "" + percentage(crypto[1].price) + "%";

barWidth[2].style.width = "" + percentage(crypto[2].price) + "%";
