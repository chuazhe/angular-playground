import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoComponent } from './components/two/two.component';
import { OneComponent } from './components/one/one.component';
import { GetComponent } from './components/get/get.component';
import { ThreeComponent } from './components/three/three.component';
import { FourComponent } from './components/four/four.component';
import { FiveComponent } from './components/five/five.component';
import { SixComponent } from './components/six/six.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsComponent } from './components/items/items.component';
import { SevenComponent } from './components/seven/seven.component';
import { EightComponent } from './components/eight/eight.component';
import { ItemService } from './service/item/item.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { RegistrationFormComponent } from './components/reactive-form/reactive-form.component';
import { HostComponent } from './components/host/host.component';
import { AttributeDirectiveDirective } from './components/attribute-directive.directive';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    GetComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    ItemComponent,
    ItemsComponent,
    SevenComponent,
    EightComponent,
    routingComponents,
    NavBarComponent,
    ItemListComponent,
    ItemDetailComponent,
    LifecycleComponent,
    RegistrationFormComponent,
    HostComponent,
    AttributeDirectiveDirective,
    TemplateDrivenFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
