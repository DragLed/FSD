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

import { HTTPValidationError, UserView } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Users<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Получение всех пользователей
   *
   * @tags Пользователь
   * @name GetAllUsersUsersGet
   * @summary Get All Users
   * @request GET:/users/
   */
  getAllUsersUsersGet = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/users/`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Создание пользователя
   *
   * @tags Пользователь
   * @name CreateUserUsersPost
   * @summary Create User
   * @request POST:/users/
   */
  createUserUsersPost = (data: UserView, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/users/`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Получение информации о текущем пользователе по JWT токену
   *
   * @tags Пользователь
   * @name GetMeUsersMeGet
   * @summary Get Me
   * @request GET:/users/me
   */
  getMeUsersMeGet = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/users/me`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Получение информации о пользователе по ID
   *
   * @tags Пользователь
   * @name GetUserUsersUserIdGet
   * @summary Get User
   * @request GET:/users/{userId}
   */
  getUserUsersUserIdGet = (userId: string, params: RequestParams = {}) =>
    this.request<any, HTTPValidationError>({
      path: `/users/${userId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Проверка логина и пароля пользователя и создание JWT токена
   *
   * @tags Пользователь
   * @name VerifyPasswordUsersVerifyPasswordPost
   * @summary Verify Password
   * @request POST:/users/verify_password
   */
  verifyPasswordUsersVerifyPasswordPost = (
    data: UserView,
    params: RequestParams = {},
  ) =>
    this.request<any, HTTPValidationError>({
      path: `/users/verify_password`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Выход пользователя и удаление JWT токена из cookies
   *
   * @tags Пользователь
   * @name LogoutUsersLogoutPost
   * @summary Logout
   * @request POST:/users/logout
   */
  logoutUsersLogoutPost = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/users/logout`,
      method: "POST",
      format: "json",
      ...params,
    });
}
