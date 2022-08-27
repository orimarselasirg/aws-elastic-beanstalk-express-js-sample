const { Router } = require('express')
const router = Router();
const {control} = require('../controllers/testController')
// const {test, test2, test3} = require('../controllers/test')

router.get('/test', async (req, res) => {
   res.send(await control())
})

router.get('/test1', async (req, res) => {
    res.send('desde rutas')
 })
module.exports = router