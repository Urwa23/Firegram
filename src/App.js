import React, {useState} from 'react';

import "./App.css";
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

//imprt compoenets
// import Nav from "./components/nav"
// import Tweets from "./components/tweets"

function App() {
  const [selectedImg,setSelectedImg]=useState(null);
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      <Title></Title>
      <UploadForm></UploadForm>
      <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>
      {selectedImg &&  <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}></Modal>}
    </div>
  );
}

export default App;
