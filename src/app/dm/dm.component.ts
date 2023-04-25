import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { DMContentComponent } from './dm-content.component'
import { DMMainSidebarComponent } from './dm-sidebar.component'

@Component({
  selector: 'dm',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <dm-sidebar />
    <dm-content />
  `,
  styles: [':host { @apply flex flex-row justify-start w-full h-full }'],
  imports: [CommonModule, DMMainSidebarComponent, DMContentComponent]
})
export class DMComponent {}
