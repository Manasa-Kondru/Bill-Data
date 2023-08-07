import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { DataService } from './data.service';
import { UniquefilterPipe } from './uniquefilter.pipe';


@NgModule({
  declarations: [UniquefilterPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [UniquefilterPipe],
  providers: [DataService]
})
export class SharedModule { }
