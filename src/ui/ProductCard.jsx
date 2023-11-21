import React, {useState} from 'react';

const ProductCard = ({product}) => {

  const [checked , setChecked] = useState(false)

  const handleChecked = (id) => {
    if (product?.id === id) {
      setChecked(true)
    }else {
      setChecked(false)
    }
  }

  console.log(checked)

  return (
    <div style={{display:"flex"}}>
      <input onClick={() => handleChecked(product?.id)} style={{marginRight:"15px"}} type="checkbox"/>
      <p>{product?.title}</p>
    </div>
  );
};

export default ProductCard;