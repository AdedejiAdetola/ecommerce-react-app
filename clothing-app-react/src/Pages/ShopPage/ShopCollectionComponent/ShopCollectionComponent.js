import './ShopCollectionComponent.scss';
import ShopItem from './ShopCollectionItem/ShopItem';

const ShopCollection = ( { title, items } ) => {
    return ( 
        <div className="shop">
            <h1>{title}</h1>
            <div>{items.map(({ id, ...otherProps}) => (
                <ShopItem key={id} {...otherProps}/>
            ))}</div>
        </div>
     );
}
 
export default ShopCollection;