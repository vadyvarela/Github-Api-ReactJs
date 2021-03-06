import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
    };

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true })

        const { newRepo } = this.state;

        const response = await api.get(`/repos/${newRepo}`);

        const data = {
            name: response.data.fullname,
        };

        this.setState({
            repositories: [...repositories, data],
            newRepo: '',
            loading: false,
        })
    };

    render() {
        const { newRepo } = this.state;
        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositórios
                </h1>

                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Adicionar Repositorio"
                        value={newRepo}
                        onChange={this.handleInputChange}
                    />
                    <SubmitButton disable>
                        <FaPlus color="#fff" size={14} />
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}
