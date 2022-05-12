import MenuContainer from '../Components/MenuContainer/MenuContainer';
import DataContextProvider from '../Context/DataContext/DataContext';
import './HomePage.scss';
const HomePage = () => {
    return (
    <div className='homepage'>
        <h1>HI</h1>
        <DataContextProvider>
            <MenuContainer />
        </DataContextProvider>
    </div>
    );
}
 //Navigation yet to be fixed
export default HomePage;