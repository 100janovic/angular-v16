import { Component, computed, effect, inject, signal } from '@angular/core';
import { SignalsService, UserDetailsInterface, UserInterface } from './signals.service';


@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent {

  public service = inject(SignalsService);
  public details: UserDetailsInterface | undefined;

  private users = this.service.users;
  public totalUsers = computed(() => this.searchResults().length)

  public searchUser = signal("");
  public searchResults = computed(() => this.searchUser() === "" ?
    this.users() :
    this.users().filter(u => u.name.toLowerCase().indexOf(this.searchUser().toLowerCase()) !== -1)
  );


  public setDetails = effect(() => {
    this.details = this.service.details();
  })

  public onSearchInputChange(event: Event): void {
    this.searchUser.set((event.target as HTMLInputElement).value);
  }

  public selectUser(user: UserInterface): void {
    this.service.selectUser(user);
  }

}
