import React, { Component } from 'react';

const urlForItem = item =>
    `https://api.mercadolibre.com/sites/MCO/search?q=${item}`

export default class MercadoLibreAPI extends Component {


    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false
        }
    }

    componentDidMount() {
        fetch(urlForItem(this.props.item))
            .then(response => {
                if (!response.ok) {
                    throw Error("Network request failed")
                }

                return response
            })
            .then(d => d.json())
            .then(d => {
                this.setState({
                    itemsData: d
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }



    render() {
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.itemsData) return <p>Loading...</p>
        return (
            <div>
                <h2>{this.state.itemsData.name}</h2>
            </div>
        )
    }
}
