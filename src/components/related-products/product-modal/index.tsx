import { useState } from "react";
import { formatToBRL } from "../../../lib/utils";
import { Product } from "../../../types/product";
import Button from "../../button";
import Modal from "../../modal";

const ProductModal = ({ product }: { product: Product }) => {
  const [count, setCount] = useState(1);

  const handleCountPlus = () => {
    setCount(prev => prev+1); 
  }

  const handleCountMinus = () => {
    if (count <= 1) return;
    setCount(prev => prev-1); 
  }

  return (
    <Modal>
      <div className="product-modal">
        <img src={product.photo} alt="" className="product-image" />
        <div className="product-info">
          <div className="product-details">
            <h3>{product.productName}</h3>
            <p className="product-price">R$ {formatToBRL(product.price)}</p>
            <p className="product-description">{product.descriptionShort}</p>
            <a href="#" className="see-more">Veja mais detalhes do produto {">"} </a>
          </div>
          <div className="product-buttons">
            <div className="product-quantity">
              <Button className="btn-transparent" onClick={handleCountMinus}>-</Button>
              <span className="count">{count}</span>
              <Button className="btn-transparent" onClick={handleCountPlus}>+</Button>
            </div>
            <Button className="btn-yellow btn-scale">Comprar</Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ProductModal;
