import React from 'react'
import Count from './components/Count';
import Todo from './components/Todo';

import { BrowserRouter, Route, Link } from 'react-router-dom'
import UsersList from './components/UsersList';
import UserShow from './components/UserShow';
// import Counter from './Counter';
// import UsersList from './UserList';
// import Parent from './Parent';
// import UserShow from './UserShow';

function App() {
    return (
        <BrowserRouter>
            <div>
                <h2>React-Redux</h2>
                <ul>
                    <li><Link to='/count'>Count</Link></li>
                    <li><Link to='/todos'>Todos</Link></li>
                    <li><Link to='/users'>users</Link></li>
                </ul>
                <Route path="/count" component={Count} />
                <Route path="/todos" component={Todo} />
                <Route path="/users" component={UsersList} exact={true} />
                <Route path="/users/:id" component={UserShow} />
            </div>
        </BrowserRouter >
    )
}





// function App(props) {
//     return (
//         <BrowserRouter>
//             <div>
//                 <h1>{props.title}</h1>
//                 <Link to="/counter-example">counter example</Link>
//                 <br />
//                 <Link to="/users">Users List</Link>
//                 <br />
//                 <Link to="/parent">Parent example</Link>
//                 <br />

//                 <Route path="/counter-example" component={Counter} />
//                 <Route path="/users" component={UsersList} />
//                 <Route path="/parent" component={Parent} />
//                 <Route path="/users-show/:id" component={UserShow} />
//             </div>
//         </BrowserRouter>
//     )
// }
export default App