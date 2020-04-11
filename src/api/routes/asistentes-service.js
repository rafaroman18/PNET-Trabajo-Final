'use strict';

const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();


let db;
let ObjectId = require('mongodb').ObjectID;


const Asistentes = function() {};

Asistentes.prototype.connectDb = function(callback) {

    MongoClient.connect(process.env.MONGO_ID, { useNewUrlParser: true, useUnifiedTopology: true },
        function(err, database) {
            if (err) {
                console.log(err);
                callback(err);
            }
            // bd --> bd
            // tablas --> colecciones
            // tuplas --> documentos
            db = database.db(process.env.MONGO_DB).collection(process.env.MONGO_COLLECTION);

            callback(err, database);
        });
};

Asistentes.prototype.add = function(asistente, callback) {
    return db.insertOne(asistente, callback);
};

Asistentes.prototype.addAll = function(asistentes, callback) {
    return db.insertMany(asistentes, callback);
};

Asistentes.prototype.get = function(_id, callback) {
    return db.find({ _id: ObjectId(_id) }).toArray(callback);
};

Asistentes.prototype.getAll = function(callback) {
    return db.find({}).toArray(callback);
};

Asistentes.prototype.update = function(_id, updatedAsistente, callback) {
    delete updatedAsistente._id;
    return db.updateOne({ _id: ObjectId(_id) }, { $set: updatedAsistente }, callback);
};

Asistentes.prototype.remove = function(_id, callback) {
    return db.deleteOne({ _id: ObjectId(_id) }, callback);
};

Asistentes.prototype.removeAll = function(callback) {
    return db.deleteMany({}, callback);
};

module.exports = new Asistentes();