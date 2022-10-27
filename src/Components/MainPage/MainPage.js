import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const confirma = ()=>{
  if(idade < 18){ onChangeName
}if(name.length > 9 && name.length < 31){
  onChangeAge
}if(email = "usuario@usuario.com"){
  onChangeEmail
}if(email === formFlow){sendData}


const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const sendData = () => {
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  setFormFlow(2)
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      // insira aqui suas props
      name = {name}
      age = {age}
      email = {email}
      /> : <ConfirmationForm />}
    </MainContainer>
  )
}
}
export default MainPage