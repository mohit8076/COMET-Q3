import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
const Recipe = props => {
  const shipping = useRef("shipping");
  useEffect(() => {
    if (shipping.current.checked) props.substractShipping();
  }, []);
  let handleChecked = e => {
    if (e.target.checked) {
      props.addShipping();
    } else {
      props.substractShipping();
    }
  };

  return (
    <div className="container">
      <div className="collection">
        <li className="collection-item">
          <label>
            <input type="checkbox" ref={shipping} onChange={handleChecked} />
            <span>Shipping(+6$)</span>
          </label>
        </li>
        <li className="collection-item">
          <b>Total: {props.total} $</b>
        </li>
      </div>
      <div className="checkout">
        <button className="waves-effect waves-light btn">Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
