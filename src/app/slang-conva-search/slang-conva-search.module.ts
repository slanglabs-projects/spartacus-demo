import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvaSearchComponent } from './slang-conva-search.component';



@NgModule({
  declarations: [ConvaSearchComponent],
  imports: [
    CommonModule
  ],
  exports: [ConvaSearchComponent] 
})
export class SlangConvaSearchModule { }
