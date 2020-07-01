import React, {useState} from 'react';
import {useTransition, animated, useSpring} from 'react-spring'
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const Home = ({name, paragraph, authorImage})=>{
    const [props, set1] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

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
                <animated.div
                    className="card"
                    onMouseMove={({clientX: x, clientY: y}) => set1({xys: calc(x, y)})}
                    onMouseLeave={() => set1({xys: [0, 0, 1]})}
                    style={{transform: props.xys.interpolate(trans)}}
                >
                <img src={authorImage} alt="Author"></img></animated.div>
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