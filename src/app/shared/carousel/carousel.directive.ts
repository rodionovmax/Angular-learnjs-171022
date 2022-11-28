import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map, takeUntil } from 'rxjs';
import { DestroyService } from '../destroy/destroy.service';

interface ICarouselContext<T> {
	$implicit: T;
	index: number;
	appCarousel: T[];
	next: () => void;
	back: () => void;
}

@Directive({
	selector: '[appCarousel]',
	providers: [DestroyService],
})
export class CarouselDirective<T> implements OnInit {
	@Input() set appCarouselOf(items: T[] | undefined) {
		if (!items?.length) {
			this.viewContainer.clear();

			return;
		}

		this.items = items;

		this.currentIndex$.next(0);
	}

	private items: T[] = [];

	private readonly currentIndex$ = new BehaviorSubject<number>(0);

	constructor(
		private readonly viewContainer: ViewContainerRef,
		private readonly template: TemplateRef<ICarouselContext<T>>,
		private readonly destroy$: DestroyService,
	) {}

	ngOnInit() {
		this.listenCurrentIndexChange();
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
		const previosIndex = this.currentIndex$.value - 1;

		this.currentIndex$.next(previosIndex >= 0 ? previosIndex : this.items.length - 1);
	}
}
