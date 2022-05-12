import './MenuContent.scss';
const MenuContent = ({ title, imageUrl }) => {
    return ( 
        <div className='menu-content'>
            <h1>{ title.toUpperCase() }</h1>
            <p>SHOP NOW</p>
            <div>{ imageUrl }</div>
        </div>
     );
}
 
export default MenuContent;