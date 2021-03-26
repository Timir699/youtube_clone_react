import Sidebar from './sidebar/Sidebar'
import Body from './body/Body'


let Components = () => {
    return (
        <div style = {{display : "flex"}} >
            <Sidebar />
            <Body />
        </div>
    )
}

export default Components