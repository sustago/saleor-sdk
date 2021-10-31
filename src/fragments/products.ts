import gql from "graphql-tag";
import { checkoutPriceFragment } from "./checkout";

export const selectedAttributeFragment = gql`
  fragment SelectedAttributeFields on SelectedAttribute {
    attribute {
      id
      name
      slug
      metadata {
        key
        value
      }
    }
    values {
      id
      name
      slug
    }
  }
`;

export const baseProductFragment = gql`
  ${selectedAttributeFragment}
  fragment BaseProduct on Product {
    id
    name
    slug
    seoDescription
    isAvailableForPurchase
    availableForPurchase
    seoTitle
    attributes {
      ...SelectedAttributeFields
    }
    thumbnail(size: 483) {
      url
      alt
    }
    thumbnail2x: thumbnail(size: 966) {
      url
    }
  }
`;

export const productVariantFragment = gql`
  ${checkoutPriceFragment}
  fragment ProductVariantFields on ProductVariant {
    id
    sku
    name
    quantityAvailable(countryCode: $countryCode)
    images {
      id
      url
      alt
    }
    pricing {
      onSale
      priceUndiscounted {
        ...Price
      }
      price {
        ...Price
      }
    }
    attributes(variantSelection: $variantSelection) {
      attribute {
        id
        name
        slug
        metadata {
          key
          value
        }
      }
      values {
        id
        name
        value: name
        slug
      }
    }
  }
`;

export const productPricingFragment = gql`
  ${checkoutPriceFragment}
  fragment ProductPricingField on Product {
    pricing {
      onSale
      priceRangeUndiscounted {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
      priceRange {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
    }
  }
`;

export const productFragment = gql`
  ${baseProductFragment}
  ${selectedAttributeFragment}
  ${productVariantFragment}
  ${productPricingFragment}
  fragment ProductDetails on Product {
    ...BaseProduct
    ...ProductPricingField
    description
    category {
      id
      name
      slug
      products(first: 3, channel: $channel) {
        edges {
          node {
            ...BaseProduct
            ...ProductPricingField
            category {
              id
              name
              slug
            }
          }
        }
      }
    }
    images {
      id
      url
    }
    attributes {
      ...SelectedAttributeFields
    }
    variants {
      ...ProductVariantFields
    }
    isAvailable
  }
`;
