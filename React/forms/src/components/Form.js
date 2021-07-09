import React, { useState } from 'react'

export default function Form() {

const [FormData, SetFormData] = useState({
    firstName: "",
    lastName: "bhosale",
    email: "",
    gender: "",
    isActive: false
})

const handleInput = (e) => {

    SetFormData({...FormData, 
        //  [e.target.name] :  e.target.value 
        [e.target.name]:  e.target.type === "checkbox" ? e.target.checked : e.target.value
    })

}

//handle data on submit 
//student/employee registration form
//select gender and display respective image for gender value - conditional rendering
//handle data for other input fields 




    return (
        <div>
            <form action="">
                <label htmlFor="fName">First Name</label>
                <input 
                id="fName" 
                type="text"
                onChange={handleInput} 
                value={FormData.firstName}
                name="firstName"/> <br />


                <label htmlFor="lName">Last Name</label>
                <input id="lName" 
                type="text"
                onChange={handleInput} 
                value={FormData.lastName}
                name="lastName" /> <br />


                <label htmlFor="gender">Gender</label>

                <input 
                name="gender"
                type="radio"
                value="male" 
                onChange={handleInput} />
                <label htmlFor="gender">Male</label>
                <input 
                 name="gender"
                type="radio" 
                value="female"
                onChange={handleInput} />
                <label htmlFor="gender">Female</label>


                <label htmlFor="status">Are you Active ?</label>
                <input type="checkbox"
                name="isActive"
                onChange={handleInput}
                checked={FormData.isActive}
                value={true}
                />


            </form>


            <p>First Name : {FormData.firstName}</p>
            <p>Last Name: {FormData.lastName}</p>
            <p>Email : {FormData.email}</p>
            <p> Gender : {FormData.gender}</p>
            <p>Are you Active ? {FormData.isActive ? "Yes" : "No"}</p>
        </div>
    )
}



// export default class Form extends Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             firstName: "",
//             lastName: "",
//             email: "",
//             gender: "",
//             isActive: false
//         }
//     }
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

