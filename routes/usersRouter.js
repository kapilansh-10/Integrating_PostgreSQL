const { Router } = require("express")
const usersControllers = require("../controllers/usersControllers")
const usersRouter = Router()

usersRouter.get("/", usersControllers.getAllUsernames)
usersRouter.get("/new", usersControllers.createUsernameGet);
usersRouter.post("/new", usersControllers.createUsernamePost)
usersRouter.get("/users", usersControllers.searchUsers)
usersRouter.get("/delete", usersControllers.deleteUsernameGet)
usersRouter.post("/delete", usersControllers.deleteUsernamePost)

module.exports = usersRouter;