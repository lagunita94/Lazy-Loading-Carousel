import React from 'react'
import './lazyLoader.css'
function LazyLoader({children,fallback}) {
    const ref = React.useRef();
    const [isIntersecting,setIsIntersecting] = React.useState(false)
    React.useEffect(() => {
        if(!ref?.current) return;
        // if(isIntersecting) return;
        const observer = new IntersectionObserver(([entry]) => {
            if(!isIntersecting && entry.isIntersecting) setIsIntersecting(true);
        })
        observer.observe(ref.current);
        return () => {
            if(ref?.current)
                observer.unobserve(ref.current)};
    },[ref,ref?.current]);
    if(isIntersecting){
        return children;
    }
    return (
        <div className={!fallback ? 'loading' : ''} ref={ref}>
            {!fallback ? 'Loading...' : fallback}
        </div>
    )
}

export default LazyLoader
