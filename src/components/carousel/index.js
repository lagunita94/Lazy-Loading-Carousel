import React from 'react'
import "./carousel.css";
import LazyLoader from "../lazyLoader"
function Carousel({album=[]}) {
    const ref = React.useRef();
    const [viewPortWidth,setViewPortWidth] = React.useState(0);
    const [x,setX] = React.useState(0);
    const slideRef = React.useRef();
    React.useEffect(() => {
        if(!ref?.current) return;
        setViewPortWidth(ref?.current?.clientWidth);
    },[ref]);

    const handleTransition = (dir=-1) => {
        if(dir == -1){
            if(x<0) return;
            setX((x) => x-1);
        }else{
            if(!slideRef?.current) return;
            if(!((x+1)*viewPortWidth < slideRef.current.scrollWidth)) return;
            setX((x) => x+1);
        }
    }
    return (
        <div ref={ref} className='carousel'>
            <div ref={slideRef} style={{transform:`translateX(-${x*viewPortWidth}px)`}} className='carousel_slides_container'>
            {album?.map(({albumId,id,title,url,thumbnailUrl}) => 
                <div key={id} className='carousel_slide'>
                    <LazyLoader fallback={<div>Loading...</div>}>
                    <img src={thumbnailUrl}/>
                    </LazyLoader>
                    <div className='info'>
                        <span className='info_title'>{title}</span>
                        <span className='info_id'>id: {id}</span>
                    </div>
                </div>
            )}
            </div>
            <div onClick={() => handleTransition(-1)} className='carousel_control carousel_left'>
            {'<'}
            </div>
            <div onClick={() => handleTransition(1)} className='carousel_control carousel_right'>
            {'>'}
            </div>
        </div>
    )
}

export default Carousel;
