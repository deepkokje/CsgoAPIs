const Teams = require('../modals/Teams');

getAllTeams = async (req, res) => {
    try {
        const response = await Teams.findAll();
        await res.status(200).json({teams: response, message: "Success", status: 200});
    }
    catch(error) {
        console.error(error);
    }
};

getTeamById = async(req, res) => {
    try {
        const teamID = req.params.teamId;
        const response = await Teams.findByPk(teamID);
        if (!response) {
        return res.status(404).json({message: 'Team not found'})
    }
        res.status(200).json({team: response})
    }
    catch(error){
        console.error(error);
    }
};

createTeam =  async(req, res) => {
    try {
        const response  = await Teams.create(req.body);
        res.status(200).json({
            message: "User created successfully",
        });
    }
    catch(error) {
        if (error.name === 'SequelizeValidationError') {
            console.log('errorr', error.errors[0].message);
            return res.status(400).json({
              success: false,
              msg: error.errors[0].message
            })
          } else {
            next(new ErrorResponse(`Sorry, could not save ${req.body.name}`, 404))
          }
    }
};

updateTeam = async(req, res) => {
    try {
        const teamById = await Teams.findByPk(req.params.teamId).then((res) => {
            if (!findById) {
                res.status(404).json({message: "Team not found"});
            }
            teamById = req.body;
            return teamById.save();
        }).then((res) => {
            res.status(200).json({message:"Team Updated !"});
        })
    }
    catch(error) {
        console.error(error)
    }
};


deleteTeam = async (req, res) => {
    try {
        const teamId = req.params.teamId;
        const response = await Teams.destroy({ where: { team_id: teamId } });
        if (response) {
            return res.status(200).json({ message: "Team deleted!" });
        } else {
            return res.status(404).json({ message: "Team not found!" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error!" });
    }
};
module.exports = {updateTeam, deleteTeam,createTeam,getAllTeams,getTeamById}; 