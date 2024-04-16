import { Directive, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';

@Directive({ selector: 'cx-d' })
export class CxTemplateDirective implements OnInit, OnDestroy {
  time: Date = new Date();

  unsub$ = new Subject<void>();

  ngOnInit() {
    interval(1000)
      .pipe(takeUntil(this.unsub$))
      .subscribe(() => {
        this.time = new Date();
      });
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }
}
