const city = require("../models");

class CityRepository{
   async createCity({name}){
    try{
        const response = await city.create({name});
        return status(201).json({
        success:true,
        message:"cities is create succesfully",
    })
    }catch(err){
        throw{error};

    } 
   }

   async deleteCity(cityId){
    try{
       await City.destroy({
        where :{
            id:cityId
        }
       }) ;
    }catch(error){
       throw{error};
    }
   }
}

module.exports = CityRepository;