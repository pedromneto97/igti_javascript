/**
 * 
 * @param {number} smallAnimalsCount 
 * @param {number} bigAnimalsCount 
 * @param {boolean} isWeekend 
 * @param {{small: number; big: number; shear?: number;}} bath 
 * @param {boolean} shouldShear 
 * @returns 
 */
function getPetShopPrice(smallAnimalsCount, bigAnimalsCount, isWeekend, bath, shouldShear) {
    const price = getSmallAnimalsPriceFromBath(smallAnimalsCount, bath) + getBigAnimalsPriceFromBath(bigAnimalsCount, bath) + getShearPriceFromBath(smallAnimalsCount + bigAnimalsCount, bath, shouldShear);

    const multiplier = isWeekend ? 1.2 : 1;

    return price * multiplier;
}

/**
 * 
 * @param {number} count 
 * @param {{small: number;}} bath 
 * @returns {number}
 */
const getSmallAnimalsPriceFromBath = (count, { small }) => small * count;

/**
 * 
 * @param {number} count 
 * @param {{big: number;}} bath 
 * @returns {number}
 */
const getBigAnimalsPriceFromBath = (count, { big }) => big * count;

/**
 * 
 * @param {number} count 
 * @param {{big: number;}} bath 
 * @param {boolean} shouldShear
 * @returns {number}
 */
const getShearPriceFromBath = (count, { shear }, shouldShear) => shouldShear ? count * shear : 0;

module.exports = {
    getPetShopPrice
}