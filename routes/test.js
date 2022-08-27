const { Router } = require('express')
const router = Router();
const {control} = require('../controllers/testController')
// const {test, test2, test3} = require('../controllers/test')

router.get('/test', (req, res) => {
   res.send('test desde rutas')
})

module.exports = router