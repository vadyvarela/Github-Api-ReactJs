import React, { Component } from 'react';

// import { Container } from './styles';

export default class Repository extends Component {

    async componentDidMount() {
        const { match } = this.props;

        const repoName = decodeURIComponent(match.params.repository.name);

        console.log(repoName)
    }

    render() {
        return <h1>Repository </h1>;
    }
}
