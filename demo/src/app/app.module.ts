import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsageModule } from './usage/usage.module';
import { ExamplesComponent } from './examples/examples.component';

const appRoutes: Routes = [
  { path: 'examples', component: ExamplesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    UsageModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
