import { render, screen } from "@testing-library/react";
import React from "react";
import Login from "./Login";
import { expect } from "@jest/globals";

// Jest
test('quando o input está vazio, não deve logar', () => {

    render(<Login />)

    // encontrar no DOM o input (Explorer a classe - screem)
    const inputEmail = screen.getByPlaceholderText('Email')
    const inputSenha = screen.getByPlaceholderText('Senha')

    // encontrar o botão
    const botao = screen.getByRole('button')

    // garantir que o input esteja no documento
    expect(inputEmail).toBeDefined()
    expect(inputSenha).toBeDefined()

    // garantir que o botão esteja desabilitado
    expect(botao).toBeDefined()

})