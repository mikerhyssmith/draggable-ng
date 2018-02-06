import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsageComponent } from './usage/usage.component';
import { ExamplesComponent } from './examples/examples.component';

const appRoutes: Routes = [
  { path: 'usage', component: UsageComponent },
  { path: 'examples', component: ExamplesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsageComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
