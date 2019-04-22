import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const uploadFileMutation = gql`
  mutation uploadFile($documentoReporte:DocumetoReporteInput){
    createDocumentoReporte(documentoReporte:$documentoReporte){
      id
    }
  }
`

class App extends Component {
  render() {
    console.log(uploadFileMutation)
    return (
      <Mutation mutation={uploadFileMutation}>
        {
          mutate => (
            <input 
              type="file"
              required
              onChange={({ target: { validity, files: [file] } }) => validity.valid && mutate({ variables: { file } })}
            >
            </input>
        )}
      </Mutation>
    );
  }
}

export default App;
