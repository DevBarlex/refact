import companyLogo from '../assets/cocretainc.jpg'

function Header() {
  return (
    <header className="header">
      <img src={companyLogo} alt="Cocreta INC Logo" className="logo" />
    </header>
  )
}

export default Header
