import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoAppComponent } from './demo';

@NgModule({
  declarations: [DemoAppComponent],
  imports: [BrowserModule],
  bootstrap: [DemoAppComponent]
})
export class AppModule {}