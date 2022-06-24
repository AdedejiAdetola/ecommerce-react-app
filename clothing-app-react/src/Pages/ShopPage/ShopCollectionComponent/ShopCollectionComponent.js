import './ShopCollectionComponent.scss';
import ShopItem from './ShopCollectionItem/ShopItem';

const ShopCollection = ( { title, items } ) => {
    return ( 
        <div className="shop">
            <h1>{title.toUpperCase()}</h1>
            <div className='shopFlex'>{items
                .filter(item => item.id <= 4)
                .map(({ id, ...otherProps}) => (
                    <ShopItem key={id} {...otherProps}/>
                ))}
            </div>
        </div>
     );
}
 
export default ShopCollection;