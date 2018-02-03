import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { DemoAppComponent } from './demo';
import { UsageComponent } from './usage/usage.component';
import { ExamplesComponent } from './examples/examples.component';

const appRoutes: Routes = [
  { path: 'usage', component: UsageComponent },
  { path: 'examples', component: ExamplesComponent }
];

@NgModule({
  declarations: [
    DemoAppComponent,
    UsageComponent,
    ExamplesComponent
  ],
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  bootstrap: [DemoAppComponent]
})

export class AppModule {}