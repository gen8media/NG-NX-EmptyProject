import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductIconComponent} from '../product-icon/product-icon.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [ProductIconComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [ProductIconComponent]
})
export class ShopModule {
}
