import EmployeesItem from  '../employees-item/employees-item'
import './employees-list.css'


const EmployeesList = ({data,onDelete}) => {
    const elements = data.map(item => {
        const {id, ...other} = item
        return(
        <EmployeesItem key={id} {...other} onDelete={() => onDelete(id)} />)
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList