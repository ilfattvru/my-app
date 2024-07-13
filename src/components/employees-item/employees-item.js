import './employees-item.css'
import {Component} from 'react'

class EmployeesItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            increase: false,
            liked: false
        }
    }
    onIncrease = () => {
        this.setState({
            increase: !(this.state.increase)
        })
    }
    like =() => {
        this.setState(({liked}) => ({
            liked: !liked
        }))
    }
    
    render() {
        const {name, salary, onDelete} = this.props;
        const {increase} = this.state
        const {liked} = this.state
        return (
            <li className={"list-group-item d-flex justify-content-between" + (increase ? ' increase' : '') + (liked ? ' like' : '')}> 
                <span onClick={this.like} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + ' $'} />
                <div className="d-flex jestify-content-center align-items-center">
                    <button type="button" className="btn-cookie btn-sm" onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    
                    <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesItem