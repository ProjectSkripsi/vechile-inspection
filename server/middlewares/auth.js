const hash = require('../helpers/hash')
const User = require('../models/User')
const Technician = require('../models/Technician')

module.exports = {
    isLogin: (req, res, next) =>{
        let token = req.headers.token
        if(token){
            let verify = hash.jwtDecode(token)
            User.findOne({_id: verify.id})
            .then(result =>{
                if(result){
                    req.decoded = verify
                    next()
                } else {
                    res.status(401).json({
                        message: `Your No Access`
                    })
                }
            })
            .catch( (err)=>{
                res.status(500).json({
                    message: `Server Error`
                })
            })
        } else {
            res.status(401).json({
                message: `No Authenticate`
            })
        }
    },

    isTechnician: (req, res, next) =>{
        let token = req.headers.token
        if(token){
            let verify = hash.jwtDecode(token)
            Technician.findOne({_id: verify.id})
            .then(result =>{
                if(result){
                    req.decoded = verify
                    next()
                } else {
                    res.status(401).json({
                        message: `Your No Access`
                    })
                }
            })
            .catch( (err)=>{
                res.status(500).json({
                    message: `Server Error`
                })
            })
        } else {
            res.status(401).json({
                message: `No Authenticate`
            })
        }
    },



    isAdmin : (req, res, next)=>{
        console.log(req.decoded)
        if(req.decoded.role === 'admin'){
            next()
        }else{
            res.status(403).json(`forbidden`)
        }
    }
}