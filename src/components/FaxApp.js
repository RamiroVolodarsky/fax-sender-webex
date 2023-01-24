import React from 'react';
import styles from "../styles/FaxApp.module.css"

function FaxApp() {
    function handleSubmit(event) {
        event.preventDefault();

        const data = {
            "NSX": {
                "SendMessage": {
                    "Subject": document.getElementById('subject').value,
                    "SenderName": document.getElementById('senderName').value,
                    "Recipient": {
                        "Address": document.getElementById('recipientAddress').value
                    },
                    "Document": {
                        "ContentText": document.getElementById('contentText').value,
                        "DocumentPart": document.getElementById('documentPart').value,
                        "DocumentType": document.getElementById('documentType').value,
                        // "ContentData": contentData
                    }
                }
            }
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        };

        fetch('https://cloud.faxback.net/rest/Messages/SendMessage?LoginId=' + '017c0de8-7e9a-4b77-b30c-c0f04fc2b06d', options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // handle success
            })
            .catch(error => {
                console.log(error);
                // handle error
            });
    }


    return (
        <div className="container">
            <h2 className="text-center">Fax App</h2>
            <form id="form">
                <div className="mb-3">
                    <label className="form-label">Sender Name</label>
                    <input type="text" className="form-control" id="senderName" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Recipient address</label>
                    <input type="text" className="form-control" id="recipientAddress" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content Text</label>
                    <textarea className="form-control" id="contentText" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Document part</label>
                    <select className="form-select" id="documentPart">
                        <option selected>Open this select menu</option>
                        <option value="0">Cover message</option>
                        <option value="1">Document</option>
                    </select>
                    <div className="form-text">Specifies how the document is to be treated.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Document type</label>
                    <select className="form-select" id="documentType">
                        <option selected>Open this select menu</option>
                        <option value="0">Unknown</option>
                        <option value="1">TIFF</option>
                        <option value="2">RTF</option>
                        <option value="3">PDF</option>
                        <option value="4">HTML</option>
                        <option value="5">TEXT</option>
                    </select>
                    <div className="form-text">Specifies the type of document being supplied.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Attachment</label>
                    <input type="file" className="form-control" id="attachment" />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => {
                    handleSubmit()
                }}>Submit</button>
            </form>
        </div>
    );
}

export default FaxApp;