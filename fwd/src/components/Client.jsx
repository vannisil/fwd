import React from 'react';
import clientService from "../services/clientService";

class Client extends React.Component {
    constructor(props) {
        super(props)
            this.state = {products: []}
    }

    componentDidMount() {
        this.handleGet();
    }

    handleGet() {
        clientService.getProducts().then(data => {
            this.setState({
                products: [data]
            })
        })
    }

    render() {
        return(
            <div>
                {this.state.products}
            </div>
        )
    }
}

export default Client;