import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as winston from 'winston';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
    ],
  });

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.logger.info('Request received');
    return next.handle();
  }
}
