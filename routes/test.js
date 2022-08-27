const { Router } = require('express')
const router = Router();
// const {test, test2, test3} = require('../controllers/test')

router.get('/test', async (req, res) => {
   try {
    res.send('test ok')
   } catch (error) {
        console.log(error);
   }
})

module.exports = router