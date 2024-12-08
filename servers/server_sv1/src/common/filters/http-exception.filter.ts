import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { Response } from 'express';
  import { ERROR_MESSAGES } from '../utils/constants';
  
  @Catch(HttpException)
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const context = host.switchToHttp();
      const response = context.getResponse<Response>();
      const status = exception.getStatus();
  
      const errorResponse = exception.getResponse();
      const message =
        typeof errorResponse === 'string'
          ? errorResponse
          : (errorResponse as any).message || ERROR_MESSAGES.GENERIC_ERROR;
  
      const errorCode = (errorResponse as any).error || 'UNKNOWN_ERROR';
      response.status(status).json({
        status: false,
        message: message || ERROR_MESSAGES.GENERIC_ERROR,
        errorCode,
        data: null, 
      });
    }
  }
  