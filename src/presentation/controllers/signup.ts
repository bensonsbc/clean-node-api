import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-name'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requeirdFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requeirdFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return badRequest(new Error('Bad request'))
  }
}
