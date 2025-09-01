const productService = require('./productService');

exports.getOrigin = async (req, res) => {
    const productId = req.params.id;
    if (!productId || typeof productId !== 'string') {
        return res.status(400).json({ error: 'Product ID is required and must be a string' });
    }
    try {
        const origin = await productService.getProductOrigin(productId);
        res.json({ origin });
    } catch (error) {
        console.error('Error fetching product origin:', error);
        res.status(500).json({ error: 'Unable to retrieve product origin information' });
    }
};