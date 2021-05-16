const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
	// find all tags
	// include its associated Product data
	try {
		const tagData = await Tag.findAll({
			include: [{ model: Product }]
		});
		res.status(200).json(tagData);
	} catch(err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	// find a single tag by its `id`
	// include its associated Product data
	try {
		const tagData = await Tag.findByPk(req.params.id, {
			include: [{ model: Product}]
		});
		if (!tagData)
			res.status(404).json({ message: `OOPS! Sorry, no tags where found for ID ${req.params.id}`});
		else
			res.status(200).json(tagData);
	} catch {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	// create a new tag
	try {
		const tagData = await Tag.create(req.body);
		res.status(200).json(tagData);
	} catch(err) {
		res.status(500).json(err);
	}
});

router.put('/:id', (req, res) => {
	// update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
	// delete on tag by its `id` value
});

module.exports = router;
