const Router = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const router = new Router()

router.post(
    '/registration',
    [
        check('email', 'Incorrect Email').isEmail(),
        check('password', 'Incorrect pass').isLength({ min: 3, max: 12 }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res
                    .status(400)
                    .json({ message: 'Bad request body', errors })
            }
            const { email, password } = req.body
            const candidate = await User.findOne({ email })
            if (candidate) {
                return res.status(400).json({ message: 'User already exists!' })
            }
            const hashPassword = await bcrypt.hash(password, 8)
            const user = new User({ email, password: hashPassword })
            await user.save()
            return res.json({ message: 'User was created' })
        } catch (error) {
            console.log(error)
            res.send({ message: 'Server error', error })
        }
    }
)

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'User not found' })
        }
        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid) {
            return res.status(400).json({ message: 'Password is incorrect' })
        }
        token = jwt.sign({ id: user.id }, config.get('secretKey'), {
            expiresIn: '1h',
        })
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
            },
        })
    } catch (error) {
        console.log(error)
        res.send({ message: 'Server error', error })
    }
})

module.exports = router
