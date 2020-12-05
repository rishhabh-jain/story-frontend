import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Home() {
//   const [items , setItems ] = useState([]);
//     const  [user, setUser] = useState({})
// const [error, setError] = useState("")
// const [authenticated, setAuthenticated] = useState(false)
//     useEffect(()=> {
//         const fetchItems = async () =>{
//           const result = await axios(`http://localhost:5000/auth/login/success`, {withCredentials:true})
//           if(result.data.message == 'user has successfully authenticated'){
//               setAuthenticated(true)
//           }
//           if(result.data.message == 'user has successfully authenticated'){
//           const data = result.data.name;
//           setUser(data);
//           console.log(user)
//           }
//           const story = await axios(`http://localhost:5000/stories/getstories`, {withCredentials:true})
//           setItems(story.data)
//           console.log(user.displayName)
//         //   setItems(result.data)
//         //   setLoading(false)
//         }
//         fetchItems()
//       }, [])
    return (
        <div>
            <h4>You are not logged in please login to see the stories </h4>
        </div>
    )
}

export default Home
