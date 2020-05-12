const routes = require('express');

const router = routes.Router();

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Server ON' });
});

module.exports = router;
