import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delay: 100,
            result: 'No result',
        }

        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data) {
        this.setState({
            result: data,
        })
    }
    handleError(err) {
        console.error(err)
    }
    render() {
        const previewStyle = {
            height: 340,
            width: 420,
        }

        return (
            <div>
                <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
                <div>
                    <img src={this.state.result}>
                    </img>
                </div>
            </div>
        )
    }
}

export default Test;