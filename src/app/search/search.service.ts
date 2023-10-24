import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SearchService {
    search(term: string|null) {
        return of([
            { name: "Test", url: "http://test.com" }
        ])
    }
}