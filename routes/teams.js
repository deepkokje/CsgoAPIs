const TeamsController = require('../controllers/Teams');
const router = require('express').Router();


router.get('/getAllTeams', TeamsController.getAllTeams);
router.get('/getTeamById/:teamId', TeamsController.getTeamById);
router.post('/addTeam', TeamsController.createTeam);
router.put('/update/:teamId', TeamsController.updateTeam);
router.delete('/deleteTeam/:teamId', TeamsController.deleteTeam);

module.exports = router;
