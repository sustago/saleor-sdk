/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductOrder, ProductFilterInput, MeasurementUnitsEnum } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: ProductList
// ====================================================

export interface ProductList_products_edges_node_attributes_attribute_metadata {
  __typename: "MetadataItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface ProductList_products_edges_node_attributes_attribute {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of an attribute name.
   */
  slug: string | null;
  /**
   * The unit of attribute values.
   */
  unit: MeasurementUnitsEnum | null;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (ProductList_products_edges_node_attributes_attribute_metadata | null)[];
}

export interface ProductList_products_edges_node_attributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of a value (unique per attribute).
   */
  slug: string | null;
}

export interface ProductList_products_edges_node_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: ProductList_products_edges_node_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (ProductList_products_edges_node_attributes_values | null)[];
}

export interface ProductList_products_edges_node_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface ProductList_products_edges_node_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductList_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductList_products_edges_node_pricing_priceRangeUndiscounted_start_net;
}

export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductList_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductList_products_edges_node_pricing_priceRangeUndiscounted_stop_net;
}

export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductList_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductList_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface ProductList_products_edges_node_pricing_priceRange_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductList_products_edges_node_pricing_priceRange_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductList_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductList_products_edges_node_pricing_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductList_products_edges_node_pricing_priceRange_start_net;
}

export interface ProductList_products_edges_node_pricing_priceRange_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductList_products_edges_node_pricing_priceRange_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductList_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductList_products_edges_node_pricing_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductList_products_edges_node_pricing_priceRange_stop_net;
}

export interface ProductList_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductList_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductList_products_edges_node_pricing_priceRange_stop | null;
}

export interface ProductList_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductList_products_edges_node_pricing_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: ProductList_products_edges_node_pricing_priceRange | null;
}

export interface ProductList_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  /**
   * Whether the product is available for purchase.
   */
  isAvailableForPurchase: boolean | null;
  /**
   * Date when product is available for purchase. 
   */
  availableForPurchase: any | null;
  seoTitle: string | null;
  /**
   * List of attributes assigned to this product.
   */
  attributes: ProductList_products_edges_node_attributes[];
  /**
   * The main thumbnail for a product.
   */
  thumbnail: ProductList_products_edges_node_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: ProductList_products_edges_node_thumbnail2x | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductList_products_edges_node_pricing | null;
}

export interface ProductList_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductList_products_edges_node;
}

export interface ProductList_products_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface ProductList_products {
  __typename: "ProductCountableConnection";
  edges: ProductList_products_edges[];
  /**
   * A total count of items in the collection.
   */
  totalCount: number | null;
  /**
   * Pagination data for this connection.
   */
  pageInfo: ProductList_products_pageInfo;
}

export interface ProductList {
  /**
   * List of the shop's products.
   */
  products: ProductList_products | null;
}

export interface ProductListVariables {
  after?: string | null;
  first: number;
  sortBy?: ProductOrder | null;
  filter?: ProductFilterInput | null;
  channel?: string | null;
}
