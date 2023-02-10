const express = require("express")
const bcrypt = require("bcrypt")

const router = express.Router()

const UserModel = require("../models/User.model")

const generateToken = require("../config/jwt.config")

// Cadastrar usurario 

router.post("/signup", async (req, res) => {
    try {
        const {name, email, password} = req.body

        const salt = bcrypt.genSaltSync(10)

        const passwordHash = bcrypt.hashSync(password, salt)

        const result = await UserModel.create({name, email, passwordHash})

        res.status(201).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body

        const foundUser = await UserModel.findOne({email})
        console.log(foundUser);

        if(!foundUser) {
            return res.status(400).json({msg: "E-mail ou senha incorretos."})
        }

        if(!bcrypt.compareSync(password, foundUser.passwordHash)) {
            return res.status(400).json({msg: "E-mail ou senha incorretos."})
        }

        const token = generateToken(foundUser)

        res.status(200).json(token)

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

module.exports = router;
