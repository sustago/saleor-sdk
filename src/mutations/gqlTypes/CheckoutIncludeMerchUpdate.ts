/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckoutErrorCode } from "../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: CheckoutIncludeMerchUpdate
// ====================================================

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_totalPrice_gross {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_totalPrice_net {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_totalPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_totalPrice_net;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_subtotalPrice_gross {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_subtotalPrice_net {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_subtotalPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_subtotalPrice_net;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_billingAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_billingAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  /**
   * Shop's default country.
   */
  country: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_billingAddress_country;
  countryArea: string;
  phone: string | null;
  /**
   * Address is user's default billing address.
   */
  isDefaultBillingAddress: boolean | null;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  /**
   * Shop's default country.
   */
  country: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingAddress_country;
  countryArea: string;
  phone: string | null;
  /**
   * Address is user's default billing address.
   */
  isDefaultBillingAddress: boolean | null;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_availableShippingMethods_price {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_availableShippingMethods {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * The price of the cheapest variant (including discounts).
   */
  price: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_availableShippingMethods_price | null;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingMethod_price {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * The price of the cheapest variant (including discounts).
   */
  price: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingMethod_price | null;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingPrice_gross {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingPrice_net {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingPrice_net;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_totalPrice_gross {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_totalPrice_net {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_totalPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_totalPrice_net;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing_priceUndiscounted_gross {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing_priceUndiscounted_net {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing_priceUndiscounted_gross;
  /**
   * Amount of money without taxes.
   */
  net: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing_priceUndiscounted_net;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing_price_gross {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing_price_net {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing_price_gross;
  /**
   * Amount of money without taxes.
   */
  net: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing_price_net;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing {
  __typename: "VariantPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The price without any discount.
   */
  priceUndiscounted: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing_priceUndiscounted | null;
  /**
   * The price, with any discount subtracted.
   */
  price: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing_price | null;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_attributes_attribute_metadata {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_attributes_attribute {
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
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_attributes_attribute_metadata | null)[];
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_attributes_values {
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
   * Name of a value displayed in the interface.
   */
  value: string | null;
  /**
   * Internal representation of a value (unique per attribute).
   */
  slug: string | null;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_attributes_values | null)[];
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_product_thumbnail {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_product_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_product_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_product_thumbnail2x | null;
  productType: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_product_productType;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
  /**
   * Quantity of a product available for sale in one checkout.
   */
  quantityAvailable: number;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_pricing | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_attributes[];
  product: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant_product;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines {
  __typename: "CheckoutLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
  /**
   * The sum of the checkout line price, taxes and discounts.
   */
  totalPrice: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_totalPrice | null;
  variant: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines_variant;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_discount {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_availablePaymentGateways_config {
  __typename: "GatewayConfigLine";
  /**
   * Gateway config key.
   */
  field: string;
  /**
   * Gateway config value for key.
   */
  value: string | null;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_availablePaymentGateways {
  __typename: "PaymentGateway";
  /**
   * Payment gateway ID.
   */
  id: string;
  /**
   * Payment gateway name.
   */
  name: string;
  /**
   * Payment gateway client configuration.
   */
  config: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_availablePaymentGateways_config[];
  /**
   * Payment gateway supported currencies.
   */
  currencies: (string | null)[];
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_metadata {
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

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout {
  __typename: "Checkout";
  /**
   * The checkout's token.
   */
  token: any;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   */
  totalPrice: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_totalPrice | null;
  /**
   * The price of the checkout before shipping, with taxes included.
   */
  subtotalPrice: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_subtotalPrice | null;
  billingAddress: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_billingAddress | null;
  shippingAddress: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingAddress | null;
  /**
   * Email of a customer.
   */
  email: string;
  /**
   * Shipping methods that can be used with this order.
   */
  availableShippingMethods: (CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_availableShippingMethods | null)[];
  /**
   * The shipping method related with checkout.
   */
  shippingMethod: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingMethod | null;
  /**
   * The price of the shipping, with all the taxes included.
   */
  shippingPrice: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_shippingPrice | null;
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_lines | null)[] | null;
  /**
   * Returns True, if checkout requires shipping.
   */
  isShippingRequired: boolean;
  discount: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_discount | null;
  discountName: string | null;
  translatedDiscountName: string | null;
  voucherCode: string | null;
  /**
   * List of available payment gateways.
   */
  availablePaymentGateways: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_availablePaymentGateways[];
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout_metadata | null)[];
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_errors {
  __typename: "CheckoutError";
  /**
   * The error code.
   */
  code: CheckoutErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate {
  __typename: "CheckoutIncludeMerchUpdate";
  /**
   * An updated checkout.
   */
  checkout: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_checkout | null;
  errors: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate_errors[];
}

export interface CheckoutIncludeMerchUpdate {
  /**
   * Set to include free merch in the package.
   */
  checkoutIncludeMerchUpdate: CheckoutIncludeMerchUpdate_checkoutIncludeMerchUpdate | null;
}

export interface CheckoutIncludeMerchUpdateVariables {
  checkoutId: string;
  includeMerch: boolean;
}
