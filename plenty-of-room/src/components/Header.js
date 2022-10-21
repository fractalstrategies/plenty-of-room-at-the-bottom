import logo from '../logo.svg'

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#282c34',
      minHeight: '50px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'white',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', }}>
        <img src={logo} style={{
          animation: 'App-logo-spin infinite 1s linear',
          height: '30px',
        }} alt="logo" />
        <p>There's Plenty of Room at the Bottom</p>
      </div>
      <p>a simulation of nanotechnology</p>
      <div></div><div></div>
    </header>
  )
}
