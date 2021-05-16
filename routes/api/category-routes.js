const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
	// find all categories
	// include its associated Products
	try {
		const catData = await Category.findAll({
			include: [{ model: Product}]
		});
		res.status(200).json(catData);
	} catch(err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	// find one category by its `id` value
	// include its associated Products
	try {
		const catData = await Category.findByPk(req.params.id, {
			include: [{ model: Product}]
		})
		if (!catData) 
			res.status(404).json({ message: 'OOPS! Sorry, no category found with that ID.'});
		else
			res.status(200).json(catData);
	} catch(err) {
		res.status(500).json(err);
	}
});

router.post('/', (req, res) => {
	// create a new category
});

router.put('/:id', (req, res) => {
	// update a category by its `id` value
});

router.delete('/:id', (req, res) => {
	// delete a category by its `id` value
});

module.exports = router;
