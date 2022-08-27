const { Router } = require('express')
const router = Router();
const {control} = require('../controllers/testController')
// const {test, test2, test3} = require('../controllers/test')

router.get('/test', (req, res) => {
   res.send(control())
})

module.exports = router