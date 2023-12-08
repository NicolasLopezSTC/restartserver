import { Router } from 'express'

import {    getPersons, getPerson, createPerson, updatePerson, deletePerson,} from '../../models/persons'

const router = Router()

router.get('/', (req, res) => {
    const persons = getPersons()
    res.send(persons)
  })

router.get('/:id', (req, res) => {
    const person = getPerson(req.params.id)
    res.send({ msg: `Getting Person ${req.params.id}`})
})


router.post('/', (req, res) => {
    const newPerson = createPerson(req.body)
    res.send(newPerson)
})

router.put('/:id', (req, res) => {
    updatedPerson = updatePerson(req.params.id, req.body)
    res.send({ msg: `Person ${req.params.id} Updated`})
})

router.delete('/:id', (req, res) => {
    res.send({ msg: `Person ${req.params.id}Deleted`})
})



export default router