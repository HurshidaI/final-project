import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
const Container = styled.div`
  background-image: url(' assets/person/12.png');
  // background-color: #563d2d;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  // height: calc(100vh - 80px);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.div`
  width: 500px;
  border: 1px solid transparent;
  border-radius: 8px;
  height: 700px;
`
const Form = styled.form`
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
  // width: 100%;
  // height: 40px;
  background: transparent;
  border: none;
  outline: none;
  background-color: whitesmoke;
  padding: 0 10px;

  font-size: 16px;
  font-weight: 300;
`
const ButtonContainer = styled.div`
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
  // height: 50px;
  cursor: pointer;
  background: transparent;
  border: none;
  text-align: center;
  color: white;

  padding: 0 10px;
  margin-top: 8px;
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

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const [loginUser, setLoginUser] = useState(null)

  const [users, setUsers] = useState(getLocalInfo())

  const [loginSuccess, setLoginSuccess] = useState(false)

  // console.log(users);

  const loginMe = (email, pass) => {
    users.map((user) => {
      console.log(user)
      if (email === user.email && pass === user.pass) {
        setLoginSuccess(true)

        return setLoginUser(user)
      }
      return user
    })
  }

  const submitHanlder = (e) => {
    e.preventDefault()
    loginMe(email, pass)
    setEmail('')
    setPass('')
  }

  useEffect(() => {
    if (loginUser && loginUser.name) {
      window.alert('Welcome')
      navigate('/')
    }
  }, [loginUser, navigate, loginSuccess])

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={submitHanlder}>
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
            <Button>Login</Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
      {/* {loginUser && loginUser.name} */}
    </Container>
  )
}
