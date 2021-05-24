import React from 'react'
import Carousel from "../carousel"
import {getAlbumsById} from "../../api";
import "./albums.css";
function Albums({userId,id,title}) {
    const [album,setAlbum] = React.useState([]);
  React.useEffect(() => {
    getAlbumsById(id).then((data) => {
      setAlbum(data);
    })
  },[id])
    return (
        <div className="album">
        <div className="title">
            <p>{title}</p>
            <p className="title_id">id: {id}, <span>userid: {userId}</span></p>
        </div>
        <Carousel album={album}/>
        </div>
    )
}

export default Albums
