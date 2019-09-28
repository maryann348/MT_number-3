import React , {Component} from 'react';

class DashBoard extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
       
    // }
    render(){
        return (
           <div className = "center">
               
                   <h1>
                       Welcome to Dashboard
                   </h1>
                   <img className='profile-image' alt='icon' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYaJ6dkE1JwC6JRLBo0Rpu_MC4wCdT8EjT1vz0dAOVQsrJ6fO"}/>
                   <h1>
                       Hope you Like it!!!!
                   </h1>
    
               

           </div> 
        )
    }
}
export default DashBoard;