import jdevlogo from '../../../public/logo-principal.svg'
import './styles.css'

function Header() {

  return (
    <>
        <div>
            <a href="https://jdev" target="_blank">
                <img src={jdevlogo} className="logo" alt="Vite logo" />
            </a>
            <ul>
                <li>teste</li>
                <li>teste</li>
                <li>teste</li>
            </ul>   
        </div>
    </>
  )
}

export default Header
