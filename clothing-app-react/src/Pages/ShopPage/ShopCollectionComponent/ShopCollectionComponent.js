import './ShopCollectionComponent.scss';
import ShopItem from './ShopCollectionItem/ShopItem';

const ShopCollection = ( { title, items } ) => {
    return ( 
        <div className="shop">
            <h1>{title.toUpperCase()}</h1>
            <div className='shopFlex'>{items
                .filter(item => item.id <= 4)
                .map(item =>  (
                    <ShopItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
     );
}
 
export default ShopCollection;