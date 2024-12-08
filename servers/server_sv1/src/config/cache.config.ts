import { CacheModuleOptions, CacheStore } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';

export const cacheConfig = (configService: ConfigService): CacheModuleOptions => ({
    store: require('cache-manager-redis-store'),
    host: configService.get('REDIS_HOST') || 'localhost',
    port: configService.get('REDIS_PORT') || 6379,
    ttl: configService.get('REDIS_TTL') || 3600,
});
