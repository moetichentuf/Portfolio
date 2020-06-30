import React, {useState} from 'react';
import {useTransition, animated, useSpring} from 'react-spring'

const Home = ({name, paragraph, authorImage})=>{
    const [, setY] = useSpring(() => ({ y: 0 }))
    const [toggle, set] = useState([false])
    const transition = useTransition(toggle, null, {
        from: { position: 'absolute', opacity: 0, fontSize:'2vw', bottom:50},
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return(
    <div>
        <div className="home_container">

            <div className="home_head_wrapper">
                <a style={{zIndex:"1"}} onMouseEnter={() => set(!toggle)}>    < h1 style={{cursor:'pointer'}} > Hello I 'm <br></br> <span>{name}</span></h1></a>

                {transition.map(({ item, key, props }) =>
                    item ? <animated.div style={props}>Grahphic Design</animated.div> : <animated.div style={props}>Web Development</animated.div>
                )}
                {/*<p>{paragraph}</p>*/}
            </div>
            <div className="image_container">

                <img src={authorImage} alt="Author"></img>
                <div className="bg"></div>
            </div>
            <button
                className={"backToTop"}
                onClick={() => {
                    setY({
                        y: 0,
                        reset: true,
                        from: { y: window.scrollY },
                        onFrame: props => window.scroll(0, props.y)
                    })
                }}
                style={{zIndex:1, position: "fixed", bottom: 1, right: 2, marginBottom: 10, marginRight:10}}>
                back to top
            </button>
        </div>
    </div>
    )
}

export default Home;