import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send({ msg: 'Get all persons'})
})

router.get('/:id', (req, res) => {
    res.send({ msg: `Getting Person ${req.params.id}`})
})


router.get('/:id', (req, res) => {
    res.send({ msg: `Getting Person ${req.params.id}`})
})




export default router