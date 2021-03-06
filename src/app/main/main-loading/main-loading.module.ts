/**
 * Created by ux168 on 17-7-1.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableModule} from '../../component/table/table.component';
import {CodeModule} from '../../component/code/code.component';
import {TabGroupModule} from '../../component/tab/tab.component';
import {LoadingModule} from '../../component/loading/loading.component';
import {GridModule} from '../../component/grid/grid.directive';
import {MainLoadingRoutingModule} from './main-loading-routing.module';
import {MainLoadingComponent} from './main-loading.component';

@NgModule({
  imports: [
    CommonModule,
    MainLoadingRoutingModule,
    TabGroupModule,
    CodeModule,
    TableModule,
    LoadingModule,
    GridModule
  ],
  declarations: [MainLoadingComponent]
})

export default class MainLoadingModule {}
