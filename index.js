const { findBestPetShopPart1 } = require("./part_1/petshop");
const { findBestPetShopPart2 } = require("./part_2/petshop");
const { findBestPetShopPart3 } = require("./part_3/petshop");

console.log('Questão 1', findBestPetShopPart1(4, 5, false));
console.log('Questão 2', findBestPetShopPart1(2, 5, true));
console.log('Questão 6', findBestPetShopPart2(5, 8, true, true));
console.log('Questão 7', findBestPetShopPart2(20, 8, true, false));
console.log('Questão 9', findBestPetShopPart3(3, 3, 'seg', true));