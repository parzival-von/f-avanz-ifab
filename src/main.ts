import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
//import './bases/01-const-let'
//import './bases/02-object'
//import './bases/03-arrays'
//import './bases/04-functions'
//import './bases/05-deses-obj'
//import './bases/06-deses-arr'
//import './bases/07-imp-exp'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    
  </div>
`