import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule}  from '@angular/forms'
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { ChildComponent } from './child/child.component';
import { MyfilterPipe } from './myfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ChildComponent,
    MyfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
