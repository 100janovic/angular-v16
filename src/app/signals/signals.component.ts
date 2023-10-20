import { Component, OnInit, computed, effect, signal } from '@angular/core';

interface UserInterface {
  id: string;
  name: string;
}

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent implements OnInit {

  title = signal("");
  users = signal<UserInterface[]>([]);
  totalUsers = computed(() => {
    return this.users().length
  })

  logUsers = effect(() => {
    console.log('users modified', this.users());
  })

  changeTitle(event: Event): void {
    const title = (event.target as HTMLInputElement).value;
    this.title.set(title);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.users.set([
        { id: "1", name: "John"},
        { id: "2", name: "Jim"}
      ]);
      console.log("SET USERS");
    }, 2000);
  }

}
