import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import Iframe from 'react-iframe-comm'
import Frame from '../components/Frame';


class Translate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
  }
  render() {
    const previewStyle = {
      height: 340,
      width: 420,
    }


    return (
      <div>
        <title />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Cache" content="no-cache" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        {/* <table style={{ textAlign: 'center' }}>
          <tbody><tr>
            <td><b><u>Video Input</u></b></td>
            <td><b><u>Snapshot</u></b></td>
          </tr>
            <tr>
              <td>
                <video id="videoele" style={{ width: '400px', height: '300px' }} autoPlay playsInline />
              </td>
              <td style={{ minWidth: '400px' }}>
                <img id="imageele" src style={{ maxWidth: '400px', maxHeight: '200px' }} />
              </td>
            </tr>
            <tr>
              <td><b><u>Status</u></b></td>
              <td><b><u>Output</u></b></td>
            </tr>
            <tr style={{ height: '100px' }}>
              <td>
                <div id="ocr_status"> </div>
              </td>
              <td style={{ textAlign: 'justify' }}>
                <div id="ocr_results" />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button style={{ padding: '1em' }} type="button" id="btnele"><b>Run OCR</b></button>
              </td>
            </tr>
          </tbody></table> */}
        <canvas id="canvasele" style={{ display: 'none' }} />
        {/* แปลภาษา		 */}
        {/* <textarea id="input_area" name="message" rows={5} cols={100} defaultValue={" \n        "} /> */}
        <br />
        <br />
        <button onclick="submit_translate()">แปลภาษา</button>
        {/* &nbsp;&nbsp;&nbsp;จาก&nbsp;&nbsp;&nbsp;<select id="select_language_from" />
        &nbsp;&nbsp;&nbsp;เป็น&nbsp;&nbsp; &nbsp;<select id="select_language_to" /> */}
        <br />
        <br />
        <textarea id="translated_area" name="message" rows={5} cols={100} defaultValue={""} />
        <br>
        </br>
      <div>
      

      </div>
        
      </div>

    )
  }
}
export default Translate;





