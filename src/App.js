import './App.css';
import Carousel from "./components/carousel"
import {getAlbums} from "./api"
import Albums from "./components/albums"
import React from "react"
import LazyLoader from "./components/lazyLoader"
function App() {
  const [albums,setAlbums] = React.useState([]);
  React.useEffect(() => {
    getAlbums().then((data) => {
      setAlbums(data);
    })
  },[])
  return (
    <div className="App">
      {albums.map((album) => <LazyLoader key={album.id}>
        <Albums {...album}/>
      </LazyLoader>)}
    </div>
  );
}

export default App;
