import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab3Page } from './tab3.page';
import { RouterModule } from '@angular/router';
import { ElementsModule } from 'src/app/components/elements/elements.module'; // Import module that declares EpisodioListComponent

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElementsModule, // Allows usage of EpisodioListComponent
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
