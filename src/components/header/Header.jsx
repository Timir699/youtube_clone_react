import Logo from './logo/Logo'
import Menu from './menu/Menu'
import Notification from './notification/Notification'
import Search from './searchbar/Search'

let Header = () => {
    return (
        <div style = {{ display: 'flex', alignItems: 'center'}}>
            <Logo/>
            <Menu/>
            <Notification/>
            <Search />
        </div>
    )
} 


export default Header