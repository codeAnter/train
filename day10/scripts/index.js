
const name = 'LIU WENCAN';

const user = {
    first_name: 'WENCAN',
    last_name: 'LIU'
}
const clsName = 'text-center'
function showName(user) {
    return `${user.first_name} + ${user.last_name}`;
}
const Button = (props) => {
    return <button>{props.title}</button>
}
const AddButton = function (props) {
    return (
        <button>Add Button</button>
    )
}
const DelButton = (props) => (<button>{props.title}</button>)
const App = (props) => (
    <div>{props.children}</div>
)
class Welcome extends React.Component {
    render () {
        return <div style={{border: '1px solid black'}}>
            <h1>Hello, {this.props.name}</h1>
            {this.props.children}
            </div>
    }
}
ReactDOM.render(
    <App>
        <h1>Hello World, {showName(user)}</h1>
        <Welcome name="liuwencan" >
            <button>Thumb up</button>
        </Welcome>
        <Welcome name="hanmei" />
        <Welcome name="yangyang" />
    </App>,
    document.getElementById('container')
);