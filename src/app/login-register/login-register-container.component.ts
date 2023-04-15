import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
   selector: 'app-login-register-container',
   changeDetection: ChangeDetectionStrategy.OnPush,
   standalone: true,
   imports: [CommonModule, RouterModule],
   template: `<router-outlet></router-outlet>`,
   styles: [":host { @apply flex h-full items-center justify-center bg-cover; background-image: url('/assets/images/login-bg.png');}"],
})
export class LoginRegisterContainerComponent {}
