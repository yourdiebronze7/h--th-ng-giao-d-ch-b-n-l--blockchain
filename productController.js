const productService = require('./productService');

exports.getOrigin = async (req, res) => {
    const productId = req.params.id;
    try {
        const origin = await productService.getProductOrigin(productId);
        res.json({ origin });
    } catch (error) {
        res.status(500).json({ error: 'Unable to retrieve product origin information' });
    }
};