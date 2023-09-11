import React, { useEffect, useState } from 'react';
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar';
import Table from '../../Components/Table/Table';
import axios from 'axios';
import ActionAlert from '../../Components/Alert/Alert';

function Home(props) {
    const {users, setUsers} = props;
    const [showAlert, setShowAlert] = useState({
        condition: false,
        promptText: "User deleted.",
        severity: "success"
    })

    // we are deleting users according to index or DB id if given;
    const handleDelete = async (i) => {
        try{
            const alertText = alert("if you want to delete the user press ok !!")
            const api = `https://jsonplaceholder.typicode.com/users/${props.id}`;
            await axios.delete(api);
            setUsers(pV => {
                return pV.filter((item, index) => {
                    return index !== i;
                })
            })
            setShowAlert({
                condition: true,
                promptText: "User deleted.",
                severity: "success"
            })
        }
        catch(err)
        {console.log(err)}
        console.log(showAlert)
        
        
    }
    setTimeout(() =>setShowAlert(false),3000)
    console.log(showAlert)

// Fetching data from jsonplaceholder
    useEffect(()=>{
        const fetchData = async() =>{        
            try{
                const api = "https://jsonplaceholder.typicode.com/users";
                const userData = await axios.get(api);
                console.log(userData.data)
                setUsers(userData.data)
                console.log("line no 18",users)

            }
            catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])
  return (
    <div className='home'>
        <Navbar />
        <div className=' w-full h-6'>
        {showAlert.condition && <ActionAlert severity={showAlert.severity}
            alertText={showAlert.promptText}
        />}
        </div>
        <Table 
        allUsers={users}
        onDelete={handleDelete}
        setNewUser={setUsers}
        setAlertPrompt={setShowAlert}
         />
    </div>
  )
}

export default Home;