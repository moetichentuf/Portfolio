import React, {useState} from 'react';
import {useTransition, animated} from 'react-spring'

const Work = ({projects}) =>{
    const [toggle, set] = useState(false)
    const transition = useTransition(toggle, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })
    return(
        <div className="work_container">
            <button onClick={() => set(!toggle)}>next</button>
            {transition.map(({ item, key, props }) =>
                item ? <animated.div style={props}> <div className="projects_container">
                    {projects.map((project)=>(
                        <div key={project.id} className="project">
                            <div className="image">
                                <a href={project.url}>
                                    <img src={project.imageSrc} alt={project.title}></img>
                                </a>
                            </div>
                            <div className="title">
                                {project.title}
                            </div>
                        </div>
                    ))}
                </div></animated.div>


                    : <animated.div style={props}> <div className="projects_container">
                        {projects.map((project)=>(
                            <div key={project.id} className="project">
                                <div className="image">
                                    <a href={project.url}>
                                        <img src={project.imageSrc} alt={project.title}></img>
                                    </a>
                                </div>
                                <div className="title">
                                    {project.title}
                                </div>
                            </div>
                        ))}
                    </div></animated.div>
            )}
            <h1>Projects.</h1>

        </div>
    )
}

export default Work