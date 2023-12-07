import React, { ReactNode, useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

import LoginInput from "../form/LoginInput"

export default function Login(): ReactNode {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setJwtToken, setAlertMessage, setAlertClassName } = useOutletContext() as OutletContext

  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (email === "admin@example.com") {
      setJwtToken("abc")
      setAlertClassName("hidden")
      setAlertMessage("")
      navigate("/")
    } else {
      setAlertClassName("fadeIn")
      setAlertMessage("Invalid credentials")
    }
  }

  return (
    <>
      <div className="text-center">
        <h2 className="text-xl font-bold tracking-tight">Login</h2>
        <hr />
        <form className="ml-auto mr-auto mt-3 w-3/5 max-w-xs space-y-4" onSubmit={handleSubmit}>
          <LoginInput
            title="Email Address"
            type="email"
            className="form-control"
            name="email"
            autoComplete="email-new"
            onChange={(event) => setEmail(event.target.value)}
          />

          <div>
            <LoginInput
              title="Password"
              type="password"
              className="form-control"
              name="password"
              autoComplete="password-new"
              onChange={(event) => setPassword(event.target.value)}
            />

            <div className="mt-8">
              <input
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                value="Login"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}