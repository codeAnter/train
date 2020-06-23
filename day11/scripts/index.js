const App = (props) => (<div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Header>
        </Header>
        <Container style={{flex: 1}}>
            <div className="row">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col-9">
                    <Content />
                </div>
            </div>
        </Container>
        <Footer>

        </Footer>
</div>)
const Container = (props) => (<div className="container" style={props.style}>
    {props.children}
</div>)

const Header = (props) => (
    <div className="container bg-primary text-dark text-center">
        Header
    </div>
)

const NavItem = (props) => {
    let linkClass = props.active ? 'nav-link active' : 'nav-link'
    if (props.disabled)  {
        linkClass = 'nav-link disabled'
    }
    return (<li className='nav-item'>
        <a className={linkClass} href={props.href || '#'}>{props.children}</a>
    </li>)
}
const  Nav = (props) => (
    <div class="nav flex-column">
        <NavItem href="#" active={false}>拿铁</NavItem>
        <NavItem>美式咖啡</NavItem>
        <NavItem disabled>卡布</NavItem>
    </div>
)
const Sidebar = (props) => (
    <div className="bg-dark text-primary">
        <Nav/>
    </div>
)
const Content = (props) => (
    <div className="bg-info">
        Content
    </div>
)

const Footer = (props) => (
    <div className="container text-center bg-primary text-dark" >
        Footer
    </div>
)
ReactDOM.render(
    <App>
    </App>,
    document.getElementById('container')
);