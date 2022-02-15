import React from "react";
import PropTypes from "prop-types";
import { Pagination as Paginationx, Icon } from "react-materialize";

function Pagination({ currentPage, totalCountries, paginate }) {
  return (
    <Paginationx
      activePage={currentPage}
      items={totalCountries}
      leftBtn={<Icon onClick={() => (e) => paginate(e - 1)}>chevron_left</Icon>}
      maxButtons={8}
      rightBtn={
        <Icon onClick={() => (e) => paginate(e + 1)}>chevron_right</Icon>
      }
      onSelect={(e) => paginate(e)}
    />
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalCountries: PropTypes.number,
  paginate: PropTypes.func,
};

export default Pagination;
