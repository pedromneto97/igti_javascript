const { getPetShopPrice } = require("../shared/calculate");
const petshops = require("./data");

function findBestPetShop(smallAnimalsCount, bigAnimalsCount, dayOfWeek, shouldShear) {
    const isWeekend = mapDayOfWeekToIsWeekend(dayOfWeek);
    console.log('isWeekend', isWeekend);


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

function mapDayOfWeekToIsWeekend(dayOfWeek) {
    switch (dayOfWeek) {
        case 'seg':
        case 'ter':
        case 'qua':
        case 'qui':
        case 'sex':
            return false;
        case 'sab':
        case 'dom':
            return true;
        default:
            throw Error("Invalid input");
    }
}



module.exports = {
    findBestPetShopPart3: findBestPetShop,
};