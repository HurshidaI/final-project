import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MdEmail } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { RiLockPasswordFill } from 'react-icons/ri'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url(' assets/person/12.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.div`
  width: 400px;
  // border: 1px solid whitesmoke;
  border-radius: 8px;
  height: 250px;
`
const Form = styled.form`
  // width: 100%;
  // height: 100%;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-direction: column;
  // padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 60%;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 55%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 35px 15px;
`

const InputContainer = styled.div`
  // border: 1px solid whitesmoke;
  // border-radius: 8px;
  // width: 80%;
  // padding: 0.5rem;
  // margin: 1rem 0;
  // background-color: whitesmoke;
  border: 1px solid #9a7b4f;
  border-radius: 8px;

  padding: 0.5rem;
  margin: 1rem 0;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  width: 80%;
  height: 40px;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 300;
`
const ButtonContainer = styled.div`
  // width: 150px;
  // height: auto;
  // border: 1px solid whitesmoke;
  // border-radius: 8px;
  // padding: 0.2rem;
  // background-color: blue;
  width: 80%;
  height: 50px;
  border: 1px solid whitesmoke;
  border-radius: 8px;
  text-align: center;
  padding: 0.5rem;
  margin-top: 20px;
  background-color: #9a7b4f;
  display: flex;
  justify-content: center;
  align-item: center;
`

const Button = styled.button`
  // width: 100%;
  // height: 100%;
  // cursor: pointer;
  // background: transparent;
  // border: none;
  // text-align: center;
  // color: whitesmoke;
  // padding: 7px;
  cursor: pointer;
  background: transparent;
  border: none;
  text-align: center;
  color: white;

  padding: 0 10px;
  // margin-top: 8px;
  font-size: 16px;
  font-weight: 300;
`

/** Set up localstorage */

const getLocalInfo = () => {
  let data = localStorage.getItem('userInfo')
  if (data) {
    return JSON.parse(localStorage.getItem('userInfo'))
  } else {
    return []
  }
}

export default function Register() {
  const radomId = Math.floor(Math.random() * 1000000) + 1
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const [users, setUsers] = useState(getLocalInfo())

  console.log(users)
  const regsiterMe = (name, email, pass) => {
    setUsers([...users, { name, email, pass, radomId }])
  }

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(users))
  }, [users])

  const sudmitHandler = (e) => {
    e.preventDefault()
    regsiterMe(name, email, pass)
    setName('')
    setEmail('')
    setPass('')
  }

  return (
    <>
      <Container>
        <FormContainer>
          <Form onSubmit={sudmitHandler}>
            <InputContainer>
              <BsFillPersonFill />
              <Input
                placeholder="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              ></Input>
            </InputContainer>
            <InputContainer>
              <MdEmail />
              <Input
                placeholder="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RiLockPasswordFill />
              <Input
                placeholder="password"
                type="password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value)
                }}
              ></Input>
            </InputContainer>
            <ButtonContainer>
              <Button>Register</Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Container>
    </>
  )
}
