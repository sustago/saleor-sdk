/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MeasurementUnitsEnum } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: BaseProduct
// ====================================================

export interface BaseProduct_attributes_attribute_metadata {
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

export interface BaseProduct_attributes_attribute {
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
  metadata: (BaseProduct_attributes_attribute_metadata | null)[];
}

export interface BaseProduct_attributes_values {
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

export interface BaseProduct_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: BaseProduct_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (BaseProduct_attributes_values | null)[];
}

export interface BaseProduct_thumbnail {
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

export interface BaseProduct_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface BaseProduct {
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
  attributes: BaseProduct_attributes[];
  /**
   * The main thumbnail for a product.
   */
  thumbnail: BaseProduct_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: BaseProduct_thumbnail2x | null;
}
