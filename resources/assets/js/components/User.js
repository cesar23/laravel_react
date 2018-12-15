import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class User extends React.Component{
    constructor(){
        //---------
        super();
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        let $this=this;
        axios.get('/api/users').then(response=>{
            $this.setState({
                data:response.data
            })
        }).catch(error=>{
            console.log(error);
        })
    }
    render(){
        return (
         <div>
             <h2>Users listado</h2>
             <table className="table table-bordered">
                 <thead>
                 <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Action</th>
                 </tr>
                 </thead>
                 <tbody>
                 {this.state.data.map((user,i)=>(
                     <tr>
                         <td>{user.id}</td>
                         <td>{user.email}</td>
                         <td>{user.name}</td>
                         <td>
                             <a href="" className="btn btn-primary">Edit</a> - <a href="http://" className="btn btn-danger">delete</a>
                         </td>
                     </tr>
                     )

                 )}

                 </tbody>
             </table>
         </div>
        )
    }
}

ReactDOM.render(<User />, document.getElementById('app'));
