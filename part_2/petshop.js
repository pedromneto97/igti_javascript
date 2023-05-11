const { getPetShopPrice } = require("../shared/calculate");
const petshops = require("./data");

function findBestPetShop(smallAnimalsCount, bigAnimalsCount, isWeekend, shouldShear) {
    let cheaper;

    for (let i = 0; i < petshops.length; i++) {
        const { name, distance, bath } = petshops[i];
        const price = getPetShopPrice(smallAnimalsCount, bigAnimalsCount, isWeekend, bath, shouldShear);

        const result = {
            name,
            distance,
            price
        };

        if (cheaper === undefined) {
            cheaper = result;
            continue;
        }

        if (cheaper.price > price) {
            cheaper = result;
            continue;
        }
        if (cheaper.price === price && cheaper.distance > distance) {
            cheaper = result;
        }

    }

    return cheaper;
}



module.exports = {
    findBestPetShopPart2: findBestPetShop,
};