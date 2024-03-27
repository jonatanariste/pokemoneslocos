import Footer from "./Footer";
import Header from "./Header";
function Layout(props) {
    const {children} = props
    return ( <>
    <Header></Header>
{children}
    <Footer></Footer>
    </> );
}

export default Layout;