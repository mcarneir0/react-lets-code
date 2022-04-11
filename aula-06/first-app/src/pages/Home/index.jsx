import React from 'react'
import CountProvider from '../../contexts/Count'
import { Count } from '../../components/Count'
import { MostrarCount } from '../../components/Count/mostrarCount'
import { Table } from 'react-bootstrap'

const Home = () => {

  const usuarios = [{
    id: 1,
    nome: 'Mark',
    sobrenome: 'Otto',
    username: '@mdo'
  }, {
    id: 2,
    nome: 'Jacob',
    sobrenome: 'Thornton',
    username: '@fat'
  }, {
    id: 3,
    nome: 'Matheus',
    sobrenome: 'Carneiro',
    username: '@m.carneir0'
  }];

  const montarLista = (usuario) => {
    return (
      <tr key={usuario.id}>
        <td>{usuario.id}</td>
        <td>{usuario.nome}</td>
        <td>{usuario.sobrenome}</td>
        <td>{usuario.username}</td>
      </tr>
    );
  }

  return <CountProvider>
    <Count/>

    <hr />

    <MostrarCount/>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Usuário</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(usuario => montarLista(usuario))}
      </tbody>
    </Table>
  </CountProvider>
}

export { Home }
