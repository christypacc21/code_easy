import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { STRIPE_PUBKEY } from "../../config";
import { Link } from "react-router-dom";

const ActionButton = ({
  user,
  title,
  description,
  price,
  loginAndRedirect,
  redirectPath,
  onToken,
  coins,
  currency,
  // bgColor = '#4990e2',
  bgColor
}) => {
  // console.log('bgcolor: ', bgColor);
  let stringPrice = parseFloat((price * 100).toFixed(2));

  if (user) {
    return (
      <div
        style={{
          width: "14em",
          margin: "auto",
          borderRadius: "0.6em",
          overflow: "hidden"
        }}
      >
        <StripeCheckout
          className="title is-medium"
          name={title}
          description={description}
          amount={stringPrice}
          zipCode={false}
          billingAddress={false}
          shippingAddress={false}
          currency={currency}
          // email={this.props.users.email}
          // opened={() => this.onOpened(null, true)}
          token={token => onToken(token, price, currency, description, coins)}
          stripeKey={STRIPE_PUBKEY}
          ComponentClass="div"
        >
          <div
            className="button"
            style={{
              fontSize: "1em",
              background: bgColor,
              width: "100%"
            }}
          >
            <p style={{ color: "white", fontSize: "0.8em" }}>PURCHASE NOW</p>
          </div>
        </StripeCheckout>
      </div>
    );
  } else {
    return (
      <div
        className="has-text-centered"
        style={{
          width: "14em",
          margin: "auto",
          borderRadius: "0.6em",
          overflow: "hidden"
        }}
      >
        <Link // style={styles.button}
          className="is-medium button"
          to={{ pathname: "/login", state: { redirectPath } }}
          style={{
            fontSize: "1em",
            background: bgColor,
            width: "100%"
          }}
        >
          <p style={{ color: "white", fontSize: "0.8em" }}>PURCHASE NOW</p>
        </Link>
      </div>
    );
  }
};

export default ActionButton;
