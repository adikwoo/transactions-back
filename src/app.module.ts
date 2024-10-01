import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Vfvfgfgf667@',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TransactionsModule,
  ],
})
export class AppModule {}

