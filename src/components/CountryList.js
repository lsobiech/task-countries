import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Collection, CollectionItem } from "react-materialize";

function CountryList({ countries }) {
  return (
    <div>
      {countries?.map(({ name, currency, capital, code }) => {
        return (
          <Row>
            <Col m={6} s={12}>
              <Collection>
                <CollectionItem className="avatar">
                  <img
                    alt={name}
                    className="circle"
                    src={`https://flagcdn.com/32x24/${code.toLowerCase()}.png`}
                  />
                  <span className="title">{name}</span>
                  <p>
                    Currency: {currency}
                    <br />
                    Capital: {capital}
                    <br />
                    Code: {code}
                  </p>
                </CollectionItem>
              </Collection>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

CountryList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      currency: PropTypes.string,
      capital: PropTypes.string,
      code: PropTypes.string,
    })
  ),
};

export default CountryList;
