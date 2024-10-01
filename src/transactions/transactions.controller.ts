import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transaction.entity';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async createTransaction(@Body() transactionData: Partial<Transaction>): Promise<Transaction> {
    return this.transactionsService.createTransaction(transactionData);
  }

  @Get()
  async getTransactions(): Promise<Transaction[]> {
    return this.transactionsService.findAll();
  }

  @Delete(':id')
  async deleteTransaction(@Param('id') id: string): Promise<void> {
    await this.transactionsService.deleteTransaction(id);
  }
}
