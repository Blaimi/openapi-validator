/**
 * Copyright 2017 - 2023 IBM Corporation.
 * SPDX-License-Identifier: Apache2.0
 */

module.exports = {
  acceptHeader: require('./accept-header'),
  arrayAttributes: require('./array-attributes'),
  arrayOfArrays: require('./array-of-arrays'),
  arrayResponses: require('./array-responses'),
  authorizationHeader: require('./authorization-header'),
  binarySchemas: require('./binary-schemas'),
  circularRefs: require('./circular-refs'),
  collectionArrayProperty: require('./collection-array-property'),
  consecutivePathSegments: require('./consecutive-path-segments'),
  contentContainsSchema: require('./content-contains-schema'),
  contentExists: require('./content-exists'),
  contentTypeHeader: require('./content-type-header'),
  contentTypeIsSpecific: require('./content-type-is-specific'),
  deleteBody: require('./delete-body'),
  descriptionMentionsJSON: require('./description-mentions-json'),
  discriminatorPropertyExists: require('./discriminator-property-exists'),
  duplicatePathParameter: require('./duplicate-path-parameter'),
  etagHeaderExists: require('./etag-header-exists'),
  enumCasingConvention: require('./enum-casing-convention'),
  errorContentTypeIsJson: require('./error-content-type-is-json'),
  errorResponseSchemas: require('./error-response-schemas'),
  examplesNameContainsSpace: require('./examples-name-contains-space'),
  ibmSdkOperations: require('./ibm-sdk-operations'),
  ifModifiedSinceHeader: require('./if-modified-since-header'),
  ifUnmodifiedSinceHeader: require('./if-unmodified-since-header'),
  inlinePropertySchema: require('./inline-property-schema'),
  inlineRequestSchema: require('./inline-request-schema'),
  inlineResponseSchema: require('./inline-response-schema'),
  majorVersionInPath: require('./major-version-in-path'),
  mergePatchProperties: require('./merge-patch-properties'),
  operationIdCasingConvention: require('./operationid-casing-convention'),
  operationIdNamingConvention: require('./operationid-naming-convention'),
  operationSummaryExists: require('./operation-summary-exists'),
  optionalRequestBody: require('./optional-request-body'),
  paginationStyle: require('./pagination-style'),
  parameterCasingConvention: require('./parameter-casing-convention'),
  parameterDefault: require('./parameter-default'),
  parameterDescriptionExists: require('./parameter-description-exists'),
  parameterOrder: require('./parameter-order'),
  parameterSchemaOrContentExists: require('./parameter-schema-or-content-exists'),
  patchRequestContentType: require('./patch-request-content-type'),
  pathParameterNotCRN: require('./path-parameter-not-crn'),
  pathSegmentCasingConvention: require('./path-segment-casing-convention'),
  preconditionHeader: require('./precondition-header'),
  propertyAttributes: require('./property-attributes'),
  propertyCasingConvention: require('./property-casing-convention'),
  propertyConsistentNameAndType: require('./property-consistent-name-and-type'),
  propertyDescriptionExists: require('./property-description-exists'),
  propertyNameCollision: require('./property-name-collision'),
  refPattern: require('./ref-pattern'),
  refSiblingDuplicateDescription: require('./ref-sibling-duplicate-description'),
  requestBodyIsObject: require('./requestbody-is-object'),
  requestBodyNameExists: require('./requestbody-name-exists'),
  requiredPropertyMissing: require('./required-property-missing'),
  responseExampleExists: require('./response-example-exists'),
  responseStatusCodes: require('./response-status-codes'),
  schemaDescriptionExists: require('./schema-description-exists'),
  schemaTypeExists: require('./schema-type-exists'),
  securitySchemes: require('./securityschemes'),
  securitySchemeAttributes: require('./securityscheme-attributes'),
  serverVariableDefaultValue: require('./server-variable-default-value'),
  stringAttributes: require('./string-attributes'),
  summarySentenceStyle: require('./summary-sentence-style'),
  unusedTags: require('./unused-tags'),
  validPathSegments: require('./valid-path-segments'),
  schemaTypeFormat: require('./schema-type-format'),
};
