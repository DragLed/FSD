/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** GiftView */
export interface GiftView {
  /** Name */
  name: string
  /** Description */
  description: string | null
  /** Price */
  price: number
  /** Photo */
  photo: string | null
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[]
}

/** UserView */
export interface UserView {
  /** Username */
  username: string
  /** Password */
  password: string
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[]
  /** Message */
  msg: string
  /** Error Type */
  type: string
}
