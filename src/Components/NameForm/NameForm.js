import React from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = (props) => {
  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" value={props.name} onChange={onChangeName()}/>
        </label>
        <label>
          Idade:
          <Input  placeholder="Idade" value={props.age} onChange={onChangeAge()}/>
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={props.email} onChange={onChangeEmail()}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={email} onChange={onChangeEmail}/>
        </label>
      <button onClick={sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm