import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleApplicationOracleSharedModule } from 'app/shared/shared.module';
import { JhipsterSampleApplicationOracleCoreModule } from 'app/core/core.module';
import { JhipsterSampleApplicationOracleAppRoutingModule } from './app-routing.module';
import { JhipsterSampleApplicationOracleHomeModule } from './home/home.module';
import { JhipsterSampleApplicationOracleEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleApplicationOracleSharedModule,
    JhipsterSampleApplicationOracleCoreModule,
    JhipsterSampleApplicationOracleHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleApplicationOracleEntityModule,
    JhipsterSampleApplicationOracleAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterSampleApplicationOracleAppModule {}
