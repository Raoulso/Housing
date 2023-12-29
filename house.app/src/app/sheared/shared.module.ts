import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./modules/material/material.module";


@NgModule({
    imports: [MaterialModule,ReactiveFormsModule, CommonModule],
    exports: [MaterialModule, ReactiveFormsModule, CommonModule],
  })
  export class SharedModule {}