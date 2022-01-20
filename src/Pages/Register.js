import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  background-image: url("https://cdn.pixabay.com/photo/2021/12/13/21/43/drummer-6869168_960_720.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.div`
  width: 400px;
  border: 1px solid whitesmoke;
  border-radius: 8px;
  height: 250px;
`
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`

const InputContainer = styled.div`
  border: 1px solid whitesmoke;
  border-radius: 8px;
  width: 80%;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: whitesmoke;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
`
const ButtonContainer = styled.div`
  width: 150px;
  height: auto;
  border: 1px solid whitesmoke;
  border-radius: 8px;
  padding: 0.2rem;
  background-color: blue;
`

const Button = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: transparent;
  border: none;
  text-align: center;
  color: whitesmoke;
  padding: 7px;
`

/** Set up localstorage */

const getLocalInfo = () => {
  let data = localStorage.getItem("userInfo")
  if (data) {
    return JSON.parse(localStorage.getItem("userInfo"))
  } else {
    return []
  }
}

export default function Register() {
  const radomId = Math.floor(Math.random() * 1000000) + 1
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const [users, setUsers] = useState(getLocalInfo())

  console.log(users)
  const regsiterMe = (name, email, pass) => {
    setUsers([...users, { name, email, pass, radomId }])
  }

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(users))
  }, [users])

  const sudmitHandler = (e) => {
    e.preventDefault()
    regsiterMe(name, email, pass)
    setName("")
    setEmail("")
    setPass("")
  }

  return (
    <>
      <Container>
        <FormContainer>
          <Form onSubmit={sudmitHandler}>
            <InputContainer>
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
