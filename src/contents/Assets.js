import React, {Component} from 'react';

class Assets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            resp: []
        };
    }

    componentDidMount() {
        fetch("http://pisio.etfbl.net/~pavlev/AssetManager/api/asset/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {isLoaded, items} = this.state;
        if (!isLoaded) {
            return <div className="condiv home">Loading...</div>;
        } else {
            return (
                <div className="condiv home">
                    <ul>
                        {items.map(item => (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Type</th>
                                        <th>Acquired</th>
                                        <th>Price</th>
                                        <th>Amortization</th>
                                    </tr>
                                </thead>
                                <tbody key={item.name}>
                                    <tr>
                                        <th>{item.name}</th>
                                        <th>{item.description}</th>
                                        <th>{item.status}</th>
                                        <th>{item.type}</th>
                                        <th>{item.acquired}</th>
                                        <th>{item.price}</th>
                                        <th>{item.amprtization}</th>
                                    </tr>
                                </tbody>
                            </table>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default Assets