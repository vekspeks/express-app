var express = require('express');
var router = express.Router();
var db = require("../services/db");

const roomsShema = require("../schemas/rooms");
const { valid } = require('joi');

router.get("/create", function(req, res, next){
    res.render("rooms/create")

});

router.post("/create", async function(req, res, next){
    const result = roomsShema.validate(req.body);

    if(result.error){
        res.render("rooms/create", {error_validation: true})
        return;
    }

    let conn;
    try {
        conn = await db.getConnection();
        const query = "INSERT INTO rooms (name) VALUES (?);"
        const stmt = await conn.prepare(query);
        const result = await stmt.execute([req.body.name]);
        res.render("rooms/create", {success: true});
    } catch (error) {
        res.render("rooms/create", {error_database: true});
    } finally{
        conn.release();
    }
});




module.exports = router;