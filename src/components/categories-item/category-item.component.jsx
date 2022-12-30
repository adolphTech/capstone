import "./category-item.styles.scss"

const CartegoryItem=(props)=>{

    const {id,imageUrl,title} = props.category;
    return(
        <div className="category-container">

        <div className="background-image" style={{
          backgroundImage:`url(${imageUrl})`
        }}/>

      
          <div key={id} className="category-body-container">
             <h2>{title}</h2>
             <p>Shop Now</p>
          </div>

         </div>
    )
}

export default CartegoryItem;