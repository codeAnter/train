

const NavItem = (props) => (
    <li>{props.text}</li>
)

const GoodsList = (props) => {
    const products = [{
        name:'苹果',
        price:10.0
    }, {
        name: '梨',
        price: 20.0
    }, {
        name:'西瓜',
        price: 8.0
    }]
    return (
        <ul>
            {products.map((item, key) => <li key={key}>{item.name} {item.price}</li>)}
        </ul>
    )
}

    
class AuthPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isLogined: true}
    }
    login  = ()=> {
        this.setState({isLogined: true})
    }
    logout = () => {
        this.setState({isLogined: false})
    }
    render () {
        const { isLogined } = this.state
        const arr = [<NavItem text="文章" key={1} />, <NavItem text="一起去爬山" key={2}/>]

        if (isLogined) {
            return <div>
                <ul>
                    {arr}
                </ul>
                <span>您已登陆。</span>
                <button onClick={this.logout}>登出</button>
            </div>
        } else {
            return <div>
                <GoodsList />
                <span style={{color: 'red'}}>你还未登陆</span>
                <button onClick={this.login}>登陆</button>
            </div>
        }
    }
}

function toCelsius(fa) {
    return Number((fa - 32) * 5 /9).toFixed(2);
}

function toFa(cel) {
    return Number((cel * 9 / 5) + 32).toFixed(2);
}

const scalesName = {
    c: '摄氏度',
    f: '华氏度'
}

class Temperature extends React.Component {
    handleChange = (e) => {
        const { onTemperatureChange } = this.props
        onTemperatureChange(e.target.value)
    }
    render () {
        const { scale, temperature } = this.props

        return (
            <div className="form-group">
                <div>输入温度（单位：{scalesName[scale]}）</div>
                <input type="text" className="form-control" value={temperature} onChange={this.handleChange} />
            </div>
        )
    }
}

const BoilingVedict = ({celsius}) => {
    console.log('value', celsius, celsius >= 100)
    return <div>
        {Number(celsius) >= 100 ? '水已经沸腾' : '水没有沸腾'}
    </div>
}

class Calculator extends  React.Component {
    constructor(props) {
        super(props)
        this.state = {temperature: '88', scale: 'c'}
    }
    handleCelChange = (val) => {
        this.setState({temperature: val, scale: 'c'})
    }
    handleFaChange = (val) => {
        this.setState({temperature: val, scale: 'f'})
    }
    render () {
        const {temperature, scale} = this.state
        const celsius = scale == 'f' ? toCelsius(temperature) :temperature
        const fa = scale == 'c' ? toFa(temperature) :temperature
        return <div>
        <Temperature scale='c' temperature={celsius} onTemperatureChange={this.handleCelChange} />
        <Temperature scale='f' temperature={fa} onTemperatureChange={this.handleFaChange} />
        <BoilingVedict celsius={celsius} />
        </div>
    }
}

const App = (props) => (<div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
    <div className="container">
        <Calculator/>
    </div>

</div>)


ReactDOM.render(
    <App>
    </App>,
    document.getElementById('container')
);