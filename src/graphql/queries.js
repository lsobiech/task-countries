import { gql } from "@apollo/client";

export const LOAD_COUNTRIES = gql`
  query {
    countries {
      currency
      capital
      name
      code
    }
  }
`;
