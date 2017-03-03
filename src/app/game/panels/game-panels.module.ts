import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrumLegendGameplayPanelComponent } from './gameplay/drum-legend-gameplay-panel.component';
import { GameComponentsModule } from '../components/game-components.module';
import { StateMachineModule } from '../state-machine/state-machine-module';
import { ScoringPanelComponent } from './scoring/scoring-panel.component';

@NgModule({
  declarations: [
    DrumLegendGameplayPanelComponent,
    ScoringPanelComponent
  ],
  imports: [
    CommonModule,
    GameComponentsModule,
    StateMachineModule
  ],
  exports: [
    DrumLegendGameplayPanelComponent,
    ScoringPanelComponent
  ]
})
export class  GamePanelsModule { }
