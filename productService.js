const blockchain = require('./blockchain');

async function getProductOrigin(productId) {
    const origin = await blockchain.getProductOrigin(productId);
    return origin;
}

module.exports = { getProductOrigin };