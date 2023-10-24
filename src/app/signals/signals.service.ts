import { Injectable, signal } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { toSignal, toObservable } from "@angular/core/rxjs-interop";
import { Details, Users } from "./data";
import { UserDetailsInterface, UserInterface } from "./signals.enums";

@Injectable({
    providedIn: "root"
})
export class SignalsService {

    public selectedUser = signal("");

    private users$: Observable<UserInterface[]> = of(Users);
    private details$: Observable<UserDetailsInterface | undefined> = toObservable(this.selectedUser).pipe(
        map(() => Details.find(d => d.id === this.selectedUser()))
    )

    public users = toSignal<UserInterface[]>(this.users$);
    public details = toSignal(this.details$);

    public selectUser(user: UserInterface): void {
        this.selectedUser.update(() => user.id);
    }
}