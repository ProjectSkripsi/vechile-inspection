const Bus = require('../models/Bus')

module.exports = {
    addBus: (req, res) =>{
        Bus.find({
            idBus: req.body.idBus
        })
        .then(result =>{
            if(result.length === 0){
                Bus.create({
                    idBus: req.body.idBus,
                    vechileType: req.body.vechileType,
                    policeNo: req.body.policeNo
                })
                .then(response =>{
                    res.status(201).json({
                        data: response,
                        msg: `Success Add bus`
                    })
                })
                .catch(err =>{
                    res.status(203).json({
                        message: `Please input data required`
                    })
                })
            } else {
                res.status(400).json({
                    message: 'idBus already registered!'
                })
            }
        })
        .catch(err =>{
            res.status(404).json({
                err: err,
                msg: `Error Server`
            })
        })
    },

    findBus: (req, res) =>{
        Bus.findById({
            _id: req.params.id
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    findAll: (req, res) =>{
        Bus.find({})
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    deleteBus: (req, res) =>{
        Bus.findByIdAndRemove({
            _id: req.params.id
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    editBus: (req, res) =>{
        Bus.findByIdAndUpdate({
            _id: req.params.id
        },{
            idBus: req.body.idBus,
            vechileType: req.body.vechileType,
            policeNo: req.body.policeNo
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }



}