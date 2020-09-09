import React, {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {

    render() {
        return (
            <div className="condiv home">
                <ReactTypingEffect className="typeingeffect" text={['Asset Manager']} speed={100} eraseDelay={700}/>
            </div>
        )
    }
}
export default Home