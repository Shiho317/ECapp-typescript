import { useState } from "react";
import { Link } from 'react-router-dom';
import products from '../../shoppingData.json';
import { Wrapper } from "./Shop.style";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import SailingIcon from '@mui/icons-material/Sailing';
import Cart from "./Cart/Cart";
import Item from "./Item/Item";

export interface CartItemType{
  id: number;
  category: string;
  title: string;
  image: string;
  price: number;
  amount: number;
}

const Shop = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const getTotalItems = (items: CartItemType[]) => 
    items.reduce((acc: number, items) => acc + items.amount, 0)
  

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if(isItemInCart){
        return prev.map(item => item.id === clickedItem.id ? {
          ...item,
          amount: item.amount + 1
        } : item
        );
      };
      return [...prev, {...clickedItem, amount: 1}];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((acc, item) => {
        if(item.id === id && item.amount > 0){
          return [
            ...acc,
            {...item, amount: item.amount - 1}
          ];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    ))
  };

  const removeFromCartList = (id: number) => {
    setCartItems(prev => (
      prev.filter(item => item.id !== id)
    ))
  };

  return(
    <Wrapper>
      <Drawer
        anchor='right'
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}>
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            removeFromItemList={removeFromCartList}/>
      </Drawer>
      <div className="header">
        <Link to="/">
        <div className="header-logo">
          <SailingIcon/>
        </div>
        </Link>
        <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="secondary">
            <ShoppingCartOutlinedIcon/>
          </Badge>
        </div>
      </div>
      <div className="main">
        <h3 className="title">We think you???ll love these.</h3>
        <Grid container spacing={3}>
          {products?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item
              item={item}
              handleAddToCart={handleAddToCart}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </Wrapper>
  )

}

export default Shop