const Players = require('../modals/Players');

getAllPlayers = async (req, res) => {
    try {
        const response = await Players.findAll();
        await res.status(200).json({players: response, message: "Success", status: 200});
    }
    catch(error) {
        console.error(error);
    }
};

getPlayerById = async(req, res) => {
    try {
        const playerId = req.params.playerId;
        const response = await Players.findByPk(playerId);
        if (!response) {
        return res.status(404).json({message: 'Player not found'})
    }
        res.status(200).json({player: response})
    }
    catch(error){
        console.error(error);
    }
};

createPlayer =  async(req, res) => {
    try {
        const response  = await Players.create(req.body);
        res.status(200).json({
            message: "Player created successfully",
        });
    }
    catch(error) {
        console.error(error)
    }
};

updatePlayer = async(req, res) => {
    try {
        const playerById = await Players.findByPk(req.params.playerId).then((res) => {
            if (!findById) {
                res.status(404).json({message: "player not found"});
            }
            playerById = req.body;
            return playerById.save();
        }).then((res) => {
            res.status(200).json({message:"player  Updated !"});
        })
    }
    catch(error) {
        console.error(error)
    }
};


deletePlayer = async (req, res) => {
    try {
        const playerId = req.params.playerId;
        const response = await Players.destroy({ where: { player_id: playerId } });
        if (response) {
            return res.status(200).json({ message: "player deleted!" });
        } else {
            return res.status(404).json({ message: "player not found!" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error!" });
    }
};
module.exports = {updatePlayer, getAllPlayers, deletePlayer, getPlayerById, createPlayer}; 