import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

const Home = props => {
  const handleClick = id => {
    props.addToCart(id);
  };

  useEffect(() => {
    props.productList();
  }, []);

  let itemList = props.items.map(item => {
    return (
      <div className="card" key={item.id}>
        <div className="card-image">
          <img src={item.img} alt={item.title} />
          <span className="card-title">{item.title}</span>
          <span
            to="/"
            className="btn-floating halfway-fab waves-effect waves-light red"
            onClick={() => {
              handleClick(item.id);
            }}
          >
            <i className="material-icons">add</i>
          </span>
        </div>

        <div className="card-content">
          <p>{item.desc}</p>
          <p>
            <b>Price: {item.price}$</b>
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="box">{itemList}</div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    },
    productList: id => {
      dispatch({ type: "GET_PRODUCTS_SERVICE" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
