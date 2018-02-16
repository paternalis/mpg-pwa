import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTransactionComponent } from './new-transaction.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewTransactionComponent],
  exports: [NewTransactionComponent]
})
export class NewTransactionModule { }
