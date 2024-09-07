import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './app/users/users.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './shared/app-response/app.response';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
