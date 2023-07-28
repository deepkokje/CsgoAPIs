const PlayersController = require('../controllers/Players');
const router = require('express').Router();


router.get('/getAllPlayers', PlayersController.getAllPlayers);
router.get('/getPlayerById/:playerId', PlayersController.getPlayerById);
router.post('/addPlayer', PlayersController.createPlayer);
router.put('/update/:playerId', PlayersController.updatePlayer);
router.delete('/delete/:playerId', PlayersController.deletePlayer);

module.exports = router;
