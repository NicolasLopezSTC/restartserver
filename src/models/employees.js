import db from '../utils/db'

export const getEmployees = async () => db.employee.findMany()

export const getEmployee = async (id) =>
  db.employee.findUnique({ where: { employeeId: id } })

export const addemployee = async (employeeData, departmentId) =>
  db.employee.create({ data: { ...employeeData, departmentId } })

  export const updateEmployee = async (id, employeeData, departmentId) =>
  db.employee.update({
    where: { employeeId: id },
    data: { ...employeeData, departmentId },
})

export const deleteEmployee = async (id) =>
  db.employee.delete({ where: { employeeId: id }})