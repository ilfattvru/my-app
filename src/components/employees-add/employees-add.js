import './employees-add.css';
import { Component } from 'react';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary } = this.state;
        const { onAdd } = this.props;
        onAdd(name, salary);
        this.setState({
            name: '',
            salary: ''
        });
    }

    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit} // Добавлен обработчик onSubmit
                >
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onValueChange}
                        name='name'
                        value={name} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        onChange={this.onValueChange}
                        name='salary'
                        value={salary} />
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployersAddForm;
