import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as booktAcitons from "../../redux/action/booksAction";
import { useEffect, useState } from 'react';
import * as cartAction from "../../redux/action/cartAction";
import "./Home.css"
import {

    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,

} from 'reactstrap';
import { /* useDispatch,*/  useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const Home = (props) => {

    const books = useSelector(state => Array.from(state.booksListReducer));
    // const Cart = useSelector(state => Array.from(state.cartReducer));


    const items = books.slice(0, 3)



    useEffect(() => {


        props.actions.getbooks()


    }, [props.actions]);




    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    
   
   

    var addToCart = (books) => {
        props.actions.addToCart({ quantity: 1, books })



    }

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);

    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item._id}
            >
                <img style={{ width: "100%", height: "400px" }} src={item.imageLink} alt={item.title} />
                <CarouselCaption className="coursel" captionText={item.title} captionHeader={item.price} />
            </CarouselItem>

        );
    });







    return (

        <div className="container">

            <div className="row" style={{ paddingTop: "90px" }}>
                <div className="col-md-12 col-xs-12 col-sm-12">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>

                </div>
            </div>



            <div className=" row " style={{ marginBottom: "100px" }}>
                {
                    books.map(item => (
                        <div key={item._id} className="col-md-3 col-sm-4 col-xs-12 home  " style={{ position: "relative", left: "-60px" }}>
                            
                            <Card className="thumbnail flip-card-inner"   style={{ width: "100%"}} >
                                <CardImg style={{ height: "150px" }} src={item.imageLink} alt="Card image cap" />
                             
                                <CardBody>
                                    <CardTitle>{}</CardTitle>
                                    <CardSubtitle>{item.content} </CardSubtitle>
                                    <CardText>{item.price} ₺</CardText>

                                    
                                    <div >
                                        <Button className=" btn btn-success  mr-2 ekle " onClick={() => addToCart(item)} > <FontAwesomeIcon icon={['fas', 'cart-plus']} /> Ekle </Button>
                                        <Button  type="submit" className="btn btn-warning   "  > <FontAwesomeIcon icon={['fas', 'info']} /> Bilgi</Button>
                                    </div>
                                </CardBody>
                                <div className="flip-card-back">
                                    <h5>{item.content}</h5>
                                    <p>{item.title}</p>
                                   
                                  
                                </div>
                            </Card>
                        </div>
                    ))


                }
            </div>



        </div>

    );
}

const mapStateToProps = state => {

    return {

        books: state.booksListReducer,


    }

}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            getbooks: bindActionCreators(booktAcitons.getBooks, dispatch),
            addToCart: bindActionCreators(cartAction.addToCart, dispatch)


        }
    }
    // return { ...actions, dispatch };
}





export default connect(mapStateToProps, mapDispatchToProps)(Home);