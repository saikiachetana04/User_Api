const express = require("express");

const router = express.Router();
const{handleGetAllUsers, getUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require("../controllers/user");

const User = require("../models/User");


//REST API
router
.get("/", handleGetAllUsers)
.post("/", handleCreateNewUser);

router
.route("/:id")
.get(getUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);




// router.get("/users",async(req,res)=>{
//     const allDbUsers = await User.find({}); // ({}) means all
//     const html = `
//     <ul> ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email} </li>`).join("")}</ul>`;
//     return res.send(html);
// })


// app.get("/api/users/:id",(req,res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user)=>user.id === id);
//     return res.json(user);
// });


module.exports = router;