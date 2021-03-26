import Logo from './logo/Logo'
import Searchbox from './searchbox/Searchbox'
import Notification from './notification/Notification'


let Header = () => {
    return (
        <div style = {{display : "flex", justifyContent: "center"}}>
            <Logo />
            <Searchbox />
            <Notification />
        </div>
    )
}

export default Header