
import Accordion from "./Accordion.jsx";
import {accordionData} from "./utils/content.js";

const App = () => {

    return (<div>
            <div className="accordion">
                {accordionData.map(({title, content}) => (
                    // eslint-disable-next-line react/jsx-key
                    <Accordion title={title} content={content}/>
                ))}
            </div>
        </div>
    )

}
export default App;