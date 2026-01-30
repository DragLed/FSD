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

import { GiftView, HTTPValidationError } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Gifts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Получение всех подарков пользователя
   *
   * @tags Подарок
   * @name GetAllMyGiftsGiftsGet
   * @summary Get All My Gifts
   * @request GET:/gifts/
   */
  getAllMyGiftsGiftsGet = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/gifts/`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * @description Добавление подарка
   *
   * @tags Подарок
   * @name CreateGiftGiftsPost
   * @summary Create Gift
   * @request POST:/gifts/
   */
  createGiftGiftsPost = (data: GiftView, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/gifts/`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description Получение всех подарков
   *
   * @tags Подарок
   * @name GetAllGiftsGiftsAllGet
   * @summary Get All Gifts
   * @request GET:/gifts/all/
   */
  getAllGiftsGiftsAllGet = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/gifts/all/`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * @description Удаление подарка по ID
   *
   * @tags Подарок
   * @name RemoveGiftGiftsGiftIdDelete
   * @summary Remove Gift
   * @request DELETE:/gifts/{giftId}
   */
  removeGiftGiftsGiftIdDelete = (giftId: number, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/gifts/${giftId}`,
      method: 'DELETE',
      format: 'json',
      ...params,
    })
  /**
   * @description Получение подарка по ID
   *
   * @tags Подарок
   * @name GetGiftByIdGiftsGiftIdGet
   * @summary Get Gift By Id
   * @request GET:/gifts/{giftId}
   */
  getGiftByIdGiftsGiftIdGet = (giftId: number, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/gifts/${giftId}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * @description Редактирование подарка по ID
   *
   * @tags Подарок
   * @name EditGiftGiftsGiftIdPut
   * @summary Edit Gift
   * @request PUT:/gifts/{giftId}
   */
  editGiftGiftsGiftIdPut = (giftId: number, data: GiftView, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/gifts/${giftId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description Получение всех подарков пользователя по ID пользователя
   *
   * @tags Подарок
   * @name GetAllGiftsByUserIdGiftsUserUserIdGet
   * @summary Get All Gifts By User Id
   * @request GET:/gifts/user/{userID}
   */
  getAllGiftsByUserIdGiftsUserUserIdGet = (userId: number, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/gifts/user/${userId}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
}
