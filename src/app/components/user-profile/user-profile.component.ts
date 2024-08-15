import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'edu-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  //isSubMenuHIdden: boolean = false;
  isSubMenuHIdden: WritableSignal<boolean> = signal(false);

  updateMenuState(){
    //this.isSubMenuHIdden = !this.isSubMenuHIdden;
    this.isSubMenuHIdden.set(!this.isSubMenuHIdden());
  }
}
