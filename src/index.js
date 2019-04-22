import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import * as serviceWorker from './serviceWorker';

const headers = {
    'authorization' : `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYwNzQ1MWY3NWQxZWQ4MDg5MDRiNGJmMmVjNGY5OWQ2MDNiNWQ3YTlhZmRlNjRjZTMzMTQ1MTc3N2UzZTk1OThiNTgwOWExZDkyZjZkMTk3In0.eyJhdWQiOiIxIiwianRpIjoiNjA3NDUxZjc1ZDFlZDgwODkwNGI0YmYyZWM0Zjk5ZDYwM2I1ZDdhOWFmZGU2NGNlMzMxNDUxNzc3ZTNlOTU5OGI1ODA5YTFkOTJmNmQxOTciLCJpYXQiOjE1NTUwNzg4MTQsIm5iZiI6MTU1NTA3ODgxNCwiZXhwIjoxNTU2Mzc0ODE0LCJzdWIiOiIxMTYiLCJzY29wZXMiOltdfQ.q06JN9MQzrWJnooLy9p8S5i37p6yisUI-UAw-fN9GyRLFq_Hi_kgacAQG1JWqCZIpwiIj9jOH0v7aqjfVwckhjS3Qsm7lEBD714JiOzP1QAtA_RXUwI6NUdT-pRaYQ7avSDKKW9F5i6h5QXDqD0D8voVVmhe-eY8J-64DIuY3XQVbawvqluKhi-nSa2TLW-C6aB2WMHozoDemwdVOYBYnmIEJ6CcuKJpu1wTs677jtiduhlVGWWLimqh3bDQvDCZqpnKniytyKvyn6yuXMiBemZESyshFyY7a97k8wqvSMeLjualHa7I14PK7X8X5lrA1u_H55H_ts28XT0kj0FayQhIjRH0qVQYIlWZVOHImeCmTfqFIF4uoVYKfR-ogVQ28TDWZz1MhnNZnXrR6pIvZiTYq2JFJtlg5paQksWwF70vUTYaWqdR9-7aUVXY-nLcDUa5y68qAZga6f72mWZ12umU2xQQXo4FFRkFSOfh_LDsMUnAlx-SJHp42GbFoBICna0QuF7YS8B-B9ZC4Fp7u2H7CNa2aoKKXTBkUYg646s9Lf0N0GKfYrkAZoFHF5yGc8LxU_iZ6hvF55_1ahdhIAJi_FedbRDjL1H9Q0qCqdezpdr7PWM32GlH0ODj3PjG1JnTjkmeMOW255xTJ_zEaecKRKXETD_n0070VoJluk4`
}

const link = createUploadLink({ 
    uri: 'http://192.168.0.112:3001/graphql',
    headers
});

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
