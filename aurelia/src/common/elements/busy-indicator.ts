import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import { bindable, inject } from 'aurelia-framework';

@inject(EventAggregator)
export class BusyIndicator {
  @bindable mode = '';
  @bindable showInlineLoadIndicator = true;
  @bindable size = '5x';
  subscriptions: Array<Subscription> = [];
  counter = 0;
  delayedCounter = 0;

  constructor(private ea: EventAggregator) {
    const blockUI = () => {
      this.counter++;
      this.delayedCounter++;
    };
    const unblockUI = () => {
      if (this.counter > 0) {
        this.counter--;
      }

      setTimeout(() => {
        if (this.delayedCounter > 0) {
          this.delayedCounter--;
        }
      }, 500);
    };

    this.subscriptions = [
      this.ea.subscribe('blockUI', blockUI),
      this.ea.subscribe('unblockUI', unblockUI),
      this.ea.subscribe('showInlineLoadIndicator', () => this.showInlineLoadIndicator = true),
      this.ea.subscribe('hideInlineLoadIndicator', () => this.showInlineLoadIndicator = false)
    ];

  }

  public detached() {
    this.subscriptions.forEach(subscription => subscription.dispose());
  }
}
