import { Component, DestroyRef, Input, assertInInjectionContext, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, map, switchMap, takeUntil } from 'rxjs';
import { SearchService } from './search.service';

export function untilDestroyed() {
  assertInInjectionContext(untilDestroyed);
  const destroy = new Subject<void>();
  inject(DestroyRef).onDestroy(() => {
    destroy.next();
    destroy.complete();
  });
  return destroy;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  destroy = untilDestroyed();

  @Input() searchTerm: string = "";
  private service: SearchService = inject(SearchService);
  private route = inject(ActivatedRoute);
  
  public searchTerm$ = this.route.queryParamMap.pipe(
    map(p => p.get('searchTerm'))
  );

  public searchData$: Observable<any[]> = this.searchTerm$.pipe(
    takeUntil(this.destroy),
    switchMap((term) => this.service.search(term))
  )

}
