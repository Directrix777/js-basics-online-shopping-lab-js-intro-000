var cart = [];

function getCart()
{
 return cart;
}

function setCart(c)
{
  cart = c;
  return cart;
}

function addToCart(item)
{
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100 )})
 return `${item} has been added to your cart.`
}

function viewCart()
{
  if(cart.length < 1)
  {
    return 'Your shopping cart is empty.'
  }
  var string = `In your cart, you have `
  if(cart.length == 1)
  {
    return `${string + cart[0].itemName} at $${cart[0].itemPrice}.`
  }

  for(let i = 0; i < cart.length - 1; i += 1)
  {
    console.log(cart[i])
    string = `${string + cart[i].itemName} at $${cart[i].itemPrice}, `
  }
  return `${string}and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
}

function total()
{
  var num = 0
  for(let i = 0; i < cart.length; i += 1)
  {
    num += cart[i].price
  }
  return num
}

function removeFromCart(item)
{
  // write your code here
}

function placeOrder(cardNumber)
{
  // write your code here
}
