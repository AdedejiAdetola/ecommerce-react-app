import './ShopItem.scss';

const ShopItem = ({ name, imageUrl, price }) => {
    return ( 
        <div className='shopItem'>
            <div
            className="shopitem-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}>
                <p>Add to cart</p>
            </div>

            <div className="shopitem-footer">
                <span className="name">{ name } </span>
                <span className="price">{ `$${price}` }</span>
            </div>
        </div>
        
     );
}
 
export default ShopItem;