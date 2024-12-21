import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

const materials = [MatSlideToggleModule,MatCheckboxModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatTabsModule,   MatTableModule,
  MatIconModule,
  MatButtonModule,
  FormsModule,MatSelectModule,MatInputModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,MatCheckboxModule,MatDatepickerModule,
    MatFormFieldModule,MatNativeDateModule,MatTabsModule,MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,MatSelectModule,MatInputModule
  ],
  exports: [materials]
})
export class MaterialModule { }
