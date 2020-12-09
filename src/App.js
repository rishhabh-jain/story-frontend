import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Private from './Private'
import Home from './Home'
import { Typography } from '@material-ui/core';
import Slide from './Slide'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Route ,Switch , Redirect , Link} from 'react-router-dom'
import Login from './Login'
// import StorysCard from './components/StorysCard/StorysCard';
// import wordsToNumbers from 'words-to-numbers';
import alanBtnInstance from '@alan-ai/alan-sdk-web';
import Header from './Header'
import Banner from './Banner'
import Corousal from './Corousal'
import SCard from './Card.js'
import './App.css';
import Stories from './Stories.js'
import NewCarousel from './NewCarousel';
//import MCarausel from './MCarousel'
const alanKey = 'ec63ffa0534e956c60edfb49875004a52e956eca572e1d8b807a3e2338fdd0dc/stage'
function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [id, setId] = useState("")
  const [item, setItem] = useState([])
  useEffect(()=> {
    const fetchItems = async () =>{
      const result = await axios(`http://localhost:5000/auth/login/success`, {withCredentials:true})
      if(result.data.name != null ){
        setId(result.data.name._id)
        setAuthenticated(true)
    }
    console.log(result)
      const story = await axios(`https://stories-backend2.herokuapp.com/stories/getstories`, {withCredentials:true})
      setItem(story.data)
    }
    fetchItems()
  }, [])
  // const [Stories, setStories] = useState([]);
  // useEffect(() => {
  //   alanBtnInstance({
  //     key : alanKey ,
  //     onCommand : ({ command , stories}) => {
  //       if(command === 'newHeadlines'){
  //         setStories(stories);
  //       }
  //     }
  //   });
  // }, []);
  // const IDparam = ''
  // function setID(){
  //   IDparam = '5f980abe1905232ac83696e2'
  //   alanBtnInstance.callProjectApi("sendID", {
  //     ID: IDparam
  //   }, function(err) {
  //     if (err) alert(err)
  //   });
  // }
  if (authenticated ){
    return(
      <div>
      <Header authenticated={authenticated}/>
      <Login/>
      {/* <Private id={id}/> */}
      {/* <Stories stories={item}/> */}
      <Switch>
        <Route path='/private' component={() => <Private id={id}/>} exact/>
        <Route path='/' component={() => <Stories stories={item} id={IDBCursor}/>} exact/>
      </Switch>
      </div>
    )
  }
  return (
    <div className="App">
      <Header authenticated={authenticated}/>
      <Home/>
      {/* <Switch>
          <Route path="/" component={Home} exact />
          <Route component={Error} />
      </Switch> */}
      {/* <MCarausel/> */}
      {/* <StorysCard story={Stories}/> */}
      {/* <Corousal/>
      <Slide/>
      
      <Banner/>
      <SCard/>
      <NewCarousel/> */}
    </div>
  );
}

export default App;
