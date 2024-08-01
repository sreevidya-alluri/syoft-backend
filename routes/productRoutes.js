const express = require('express');
const {createProduct,getProduct,updateProduct,deleteProducts } = require('../controllers/productController');
const { authenticateToken, authorizeToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, authorizeToken('admin'), createProduct);
router.get('/', authenticateToken, authorizeToken('admin', 'manager'), getProduct);
router.put('/:id', authenticateToken, authorizeToken('admin', 'manager'), updateProduct);
router.delete('/:id', authenticateToken, authorizeToken('admin'), deleteProducts);

module.exports = router;
