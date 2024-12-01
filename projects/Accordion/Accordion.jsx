import './styles.css';
import {useState} from "react";


// eslint-disable-next-line react/prop-types
const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);



    return (<section className="accordion-card" key={Math.random()}>
        <div className="header" onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <p className="icon">{isActive ? '-' : '+'}</p>
        </div>

        <div className="content" onClick={() => setIsActive(!isActive)}>
            {isActive && <p className="card-info">{content}</p> }
        </div>

    </section>
    );

}

export default Accordion;