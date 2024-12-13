import SignInButton from 'src/components/SignInButton'
import React from 'react'
export default function LoginPage() {
  return (
    <div className="mt-16 max-w-xl mx-auto text-center login">
      <SignInButton />
    </div>
  )
}

// import { login, signup } from './actions'

// export default function LoginPage() {
//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input id="email" name="email" type="email" required />
//       <label htmlFor="password">Password:</label>
//       <input id="password" name="password" type="password" required />
//       <button formAction={login}>Log in</button>
//       <button formAction={signup}>회원가입</button>
//     </form>
//   )
// }
