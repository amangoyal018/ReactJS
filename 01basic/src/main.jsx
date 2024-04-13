import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// ye custom render mai chlega na ki normal render m
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank',

//   },
//   children: 'Click me to visit google'
// }

// ye normal render mai chlega
const anotherElement = (
  <a href="https://googlr.com" target='_blank'> Visit google</a>
)

const ReactElement = React.createElement(

  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
  
)
