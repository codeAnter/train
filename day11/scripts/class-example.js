
class Clock extends React.Component 
{
    constructor(props) {
        super(props)
        this.state = {date: props.date}
        setInterval(() => {
            this.setState({date: new Date()})
        }, 1000)
    }
    render () {
        const {date} = this.state
        return <div>
            <h1>Hello,World</h1>
            <h2>Now is {date.toLocaleDateString()} {date.toLocaleTimeString()}</h2>
        </div>
    }
}

class App extends React.Component {
    render () {
        return <div>
            <h2>State 演示</h2>
            <Clock date={new Date('2020-01-01')} />
            </div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
