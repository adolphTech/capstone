
import CartegoryItem from "../categories-item/category-item.component";

import "./directory.styles.scss";

const Directory = (props)=>{

    const {categories}= props
    return(
        <div className="directory-container">
     
        { categories.map((category)=>{
          return ( 
    
            <CartegoryItem category={category} />
          );
    
         })}
        
         </div>
    )
}

export default Directory;