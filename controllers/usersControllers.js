const path = require("path")
const db = require("../db/queries");
const { search } = require("../routes/usersRouter");


// exports.usersListGet = (req,res) => {
//     console.log("usernames will be logged here -wip ")
//     res.send("PostGres")
// }

// exports.usersCreateGet = (req, res) => {
//     res.sendFile(path.join(__dirname, '../form.html'));
// }

// exports.usersCreatePost = (req, res) => {
//     // const username = new username(req.body)
//     // console.log("username to be saved: ", req.body.username)
//     console.log("username to be saved: ")
//     res.redirect('/');
// }

async function getAllUsernames(req, res) {
    const usernames = await db.getAllUsernames()
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(","));
}

async function createUsernameGet(req, res) {
    res.sendFile(path.join(__dirname, '../createuser.html'));
}

async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username)
    res.redirect("/");
}

async function searchUsers(req, res){
    const { search } = req.query
    const result = await db.searchUsers(search);
    res.json(result)
}

async function deleteUsernameGet(req, res){
    res.sendFile(path.join(__dirname, "../deleteuser.html"))
}

async function deleteUsernamePost(req, res) {
    const { username } = req.body
    await db.deleteUsername(username)
    res.redirect("/")
}

module.exports = {
    getAllUsernames,
    createUsernameGet,
    createUsernamePost,
    searchUsers,
    deleteUsernamePost,
    deleteUsernameGet
}