module.exports = {
    // if the map >= 2 cards
    multipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    // if only 1 card => no need to map through them
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    },
};