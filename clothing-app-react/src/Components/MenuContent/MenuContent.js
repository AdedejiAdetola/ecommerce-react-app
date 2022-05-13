import './MenuContent.scss';
const MenuContent = ({ title, size }) => {
    return ( 
        <div 
        className={`menu-content ${size}`}>
            <h1>{ title.toUpperCase() }</h1>
            <p>SHOP NOW</p>
        </div>
     );
}
 
export default MenuContent;