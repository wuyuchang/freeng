/**
 * Created by ux168 on 17-7-1.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TableModule} from '../../component/table/table.component';
import {CodeModule} from '../../component/code/code.component';
import {TabGroupModule} from '../../component/tab/tab.component';
import {SelectModule} from '../../component/select/select.component';
import {PanelModule} from '../../component/panel/panel.component';
import {GridModule} from '../../component/grid/grid.directive';
import {MainSelectRoutingModule} from './main-select-routing.module';
import {MainSelectComponent} from './main-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainSelectRoutingModule,
    TabGroupModule,
    CodeModule,
    TableModule,
    SelectModule,
    PanelModule,
    GridModule
  ],
  declarations: [MainSelectComponent]
})

export default class MainSelectModule {}
