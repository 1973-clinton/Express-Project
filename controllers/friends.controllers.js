const model = require('../models/friends.model');


function getFriends(res, res) {

    if (model.length > 0)
    {
        res.status(200).json(model);
    }
    else
    {
        res.status(204).json({
            error : "Friend does not exist"
        });
    }
}

function getFriend (req, res){
    const friendId = Number(req.params.Id);
    const friend = model[friendId];
    if (friend)
    {
        res.status(200).json(friend);
    }
    else
    {
        res.status(404).json({
            error : "Friend does not exist"
        });
    }
}

function postFriend(req, res) {
    if (!req.body.name){
        return res.status(404).json({
            error : "Name is required"
        });
    }

    const friend = {
        name : req.body.name,
        id: model.length
    };
    model.push(friend);

    res.json(friend);
}

module.exports = {
    getFriend,
    getFriends,
    postFriend
}