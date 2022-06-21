const ShopItem = ({ id, name, imageUrl, price }) => {
    return ( 
        <div>
            <div
            className="shopitem-mage"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />

            <div className="shopitem-footer">
                <span className="name">{ name } </span>
                <span className="price">{ `$${price}` }</span>
            </div>
        </div>
        
     );
}
 
export default ShopItem;