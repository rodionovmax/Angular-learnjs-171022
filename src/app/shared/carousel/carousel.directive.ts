import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';

interface ICarouselContext<T> {
	$implicit: T,
	index: number,
	appCarousel: T[],
	next: () => void,
	back: () => void
}

@Directive({
	selector: '[appCarousel]',
})
export class CarouselDirective<T> implements OnInit, OnDestroy {
	@Input() set appCarousel(items: T[] | undefined) {
		if (!items?.length) {
			this.viewContainer.clear();

			return;
		}

		// setInterval(() => {
		// 	this.currentIndex$.next(this.currentIndex$.value + 1);
		// }, 2000);

		this.items = items;
		this.currentIndex$.next(0);
	}

	private items: T[] = [];

	private readonly currentIndex$ = new BehaviorSubject<number>(0);
	private readonly destroy$ = new Subject<void>();


	constructor(
		private readonly viewContainer: ViewContainerRef,
		private readonly template: TemplateRef<ICarouselContext<T>>,
	) {
	}

	ngOnInit(): void {
		this.listenCurrentIndexChange();
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				map(currentIndex => this.getCurrentContext(currentIndex)),
				takeUntil(this.destroy$),
			)
			.subscribe(context => {
				this.viewContainer.clear();
				this.viewContainer.createEmbeddedView(this.template, context);
			});
	}

	private getCurrentContext(currentIndex: number): ICarouselContext<T> {
		return {
			$implicit: this.items[currentIndex],
			index: currentIndex,
			appCarousel: this.items,
			next: () => {
				this.next();
			},
			back: this.back.bind(this),
		};
	}

	private next() {
		const nextIndex = this.currentIndex$.value + 1;

		this.currentIndex$.next(nextIndex < this.items.length ? nextIndex : 0);
	}

	private back() {
		const previousIndex = this.currentIndex$.value - 1;

		this.currentIndex$.next(previousIndex >= 0 ? previousIndex : this.items.length - 1);
	}

}
