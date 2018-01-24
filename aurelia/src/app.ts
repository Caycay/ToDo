import { Router, RouterConfiguration } from 'aurelia-router';
import {Subscription, EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';
import {HttpClient} from "aurelia-fetch-client";
import {ApiItem, ApiList} from "./models/api-data-models";
@inject(EventAggregator)
export class App {
  router: Router;
  private subscriptions: Subscription[];
  constructor(private ea: EventAggregator){}
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia Application';

    config.map([
      {
        route: 'lists',
        name: 'lists',
        moduleId: 'components/lists',
        nav: true,
        title: 'Lists',
        settings: {auth: false}
      },
      {
        route: 'list-of-item',
        name: 'list-of-item',
        moduleId: 'components/list-of-item',
        nav: true,
        title: 'List Of Item',
        settings: {auth: false}
      },
      {
        route: 'add-list',
        name: 'add-list',
        moduleId: 'components/add-list',
        nav: true,
        title: 'Add List',
        settings: {auth: false}
      },
      {
        route: 'add-item',
        name: 'add-item',
        moduleId: 'components/add-item',
        nav: true,
        title: 'Add Item',
        settings: {auth: false}
      },
      {
        route: 'edit-item',
        name: 'edit-item',
        moduleId: 'components/edit-item',
        nav: true,
        title: 'Edit Item',
        settings: {auth: false}
      },
      {
        route: 'edit-list',
        name: 'edit-list',
        moduleId: 'components/edit-list',
        nav: true,
        title: 'Edit List',
        settings: {auth: false}
      }
    ]);
    config.mapUnknownRoutes({
      route: 'lists',
      moduleId: 'components/lists',
      title: 'Lists',
      settings: {auth: false}
    });
    this.router = router;
  }
  detached() {
    this.subscriptions.forEach(subscription => subscription.dispose());
  }
  attached() {
    this.subscriptions = [
      this.ea.subscribe('GoToDetails:next', (details: Array<Object>) => {
        this.router.navigateToRoute('list-of-item', details);
      }),
      this.ea.subscribe('ListItem:add', () => {
        this.router.navigateToRoute('add-list');
      }),
      this.ea.subscribe('ListItem:save', () => {
        this.router.navigateToRoute('lists');
      }),
      this.ea.subscribe('ListOfItem:add', (id: string) => {
        this.router.navigateToRoute('add-item', {id});
      }),
      this.ea.subscribe('Item:save', (details: Array<Object>) => {
        this.router.navigateToRoute('lists', details);
      }),
      this.ea.subscribe('ListOfItem:edit', (item: ApiItem) => {
        this.router.navigateToRoute('edit-item', item);
      }),
      this.ea.subscribe('ListItem:edit', (list: ApiList)=>{
        this.router.navigateToRoute('edit-list', list);
      })
    ]
  }
}
