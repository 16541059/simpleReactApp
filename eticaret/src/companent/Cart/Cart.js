import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import {/* useDispatch,*/ useSelector } from "react-redux";
import * as cartAction from "../../redux/action/cartAction";
import { bindActionCreators } from 'redux'
function Cart(props) {
    const Cart = useSelector(state => Array.from(state.cartReducer));
  

    var cartQuantityPlus = (books) => {
        props.actions.addToCart({ quantity: 1, books })

    }
    var cartQuantityMinus = (books) => {
        props.actions.quantityMin({ quantity:1, books })
         const varmi= Cart.findIndex(item=>item.quantity<=1)
         
        if(varmi>=0){
            removeItemCart(books)
        }

    }
    const removeItemCart=(books)=>{
       props.actions.removeItem(books)
    }
    
    const sumPrice=()=>{
       const sum=  Cart.map(item=>item.books.price*item.quantity )
     var toplam=0
    
      for (let index = 0; index < sum.length; index++) {
          
           toplam += Number(sum[index]) ;
        
          
      }
      return toplam
    }
 
    
    return (
        <div>
       
            <div className="container">


                <div className="row">
                    <div className="col-md-12">
                        <h3>Sepetiniz</h3>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        <table style={{ color: "whitesmoke",marginBottom:"250px"  }} className="table table-condensed table-striped   text-center">

                            <thead>
                                <tr>

                                    <th className="text-center">Ürün Adı</th>
                                    <th className="text-center">Fiyat</th>
                                    <th className="text-center">Adet</th>
                                    <th className="text-center"></th>
                                </tr>
                            </thead>

                            <tbody>






                                {
                                    Cart.map(cart =>

                                        <tr key={cart.books._id}>
                                            <td>{cart.books.content}</td>
                                            <td>{cart.books.price} ₺</td>
                                    <td>{cart.quantity}</td>
                                            <td>
                                                <button className="btn btn-warning btn-xs" onClick={()=>cartQuantityPlus(cart.books)} >
                                                    <FontAwesomeIcon icon={["fas", "plus"]} />
                                                </button>
                                                <button className="btn btn-info btn-xs" onClick={()=>cartQuantityMinus(cart.books)}>
                                                    <FontAwesomeIcon icon={["fas", "minus"]} />
                                                </button>
                        &nbsp;|&nbsp;
                        <button className="btn btn-info btn-xs">
                                                    <FontAwesomeIcon icon={["fas", "eye"]} />
                                                </button>
                                                <button className="btn btn-danger btn-xs" onClick={()=>removeItemCart(cart.books)}>
                                                    <FontAwesomeIcon icon={["fas", "trash-alt"]} />
                                                </button>
                                            </td>

                                        </tr>


                                    )
                                }


                            </tbody>

                            <tfoot >
                                <tr>
                                    <td>
                                        &nbsp;
                    </td>
                                    <td className="text-center text-warning">
                                        <h2>{sumPrice()} ₺</h2> <span></span>
                                    </td>
                                    <td colSpan="2" className="text-right">
                                        <br />
                                        <button className="btn btn-danger btn-sm">
                                            <span className="glyphicon glyphicon-trash"></span> Sepeti Boşalt
                        </button>
                                        <button href="#" className="btn btn-success btn-sm">
                                            <span className="glyphicon glyphicon-send"></span> Satın Al
                        </button>
                                    </td>
                                </tr>
                            </tfoot>

                        </table>

                    </div>
                </div>
                {
                    !Cart.length ? <h1 style={{color:"yellow",marginLeft:"350px"}}>
                        <FontAwesomeIcon icon={["fas","cart-plus"]}/> Sepetiniz Boş</h1>:null
                }

            </div>
        </div>

    )
}

const mapSatateToProps = state => {
    return {
        Cart: state.cartReducer,

    }
}


const mapDispatchToProps = dispatch => {
    return {
        actions: {
           
            addToCart: bindActionCreators(cartAction.addToCart, dispatch),
            quantityMin:bindActionCreators(cartAction.quantityMinux,dispatch),
            removeItem:bindActionCreators(cartAction.removeFromCart,dispatch)

        }
    }
    // return { ...actions, dispatch };
}

export default connect(mapSatateToProps,mapDispatchToProps)(Cart);