import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployersAddForm from '../employees-add/employees-add';

function App() {
    const data = [
        {name: 'John C.', salary: 800, increase: true},
        {name: 'Alex M.', salary: 3000, increase: false},
        {name: 'Timmy B.', salary: 5000, increase: false}
    ]

    return (<div className="app">
        <AppInfo/>
        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        <EmployeesList data={data} />
        <EmployersAddForm/>
    </div>)
}

export default App;