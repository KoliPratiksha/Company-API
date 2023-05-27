const Company = require('../modeles/company')
const mongoose = require('mongoose')

exports.getcompany = async (req,res)=>{
    try {
        const data = await Company.find()
        return res.json({errors:false,data:data})
      } catch (error) {
        return res.json({errors:true,message:error.message})
      }
}

exports.postcompany = async(req,res)=>{
    try {
        const data = await Company.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.json({errors:true,message:error.message})
    }
}

exports.putcompany = async(req,res)=>{
    try {
        const data = await Company.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.json({errors:true,message:error.message})
    }
}

exports.deletecompany = async(req,res)=>{
    try {
        const data = await Company.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.json({errors:true,message:error.message})
    }
}

