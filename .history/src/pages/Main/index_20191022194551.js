import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
    state = {

    },

    render() {
        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositórios
                </h1>

                <Form onSubmit={() => {}}>
                    <input type="text" placeholder="Adicionar Repositorio" />
                    <SubmitButton disable>
                        <FaPlus color="#fff" size={14} />
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}
