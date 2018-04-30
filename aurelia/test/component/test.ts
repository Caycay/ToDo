import {StageComponent} from "aurelia-testing";
import {bootstrap} from "aurelia-bootstrapper";

export class MockListService {
  name;
  description;

  getName() {
    return Promise.resolve(this.name)
  }

  getDescription() {
    return Promise.resolve(this.description)
  }
}
describe('Add List Component', () => {
  let component;
  let service = new MockService();
  beforeEach(() => {
    service.name = undefined;
    component = StageComponent
      .withResources('src/components/add-list')
      .inView('<component></component>');
    component.bootstrap(aurelia => {
      aurelia.use.standardConfiguration();
      aurelia.container.registerInstance(Service, service)
    });
  });
  it('should render name', done => {
    service.name = 'Test';

    component.create(bootstrap).then(() => {
      const nameElement = document.querySelector('#inputName');
      expect(nameElement.innerHTML).toBe('Test');
      done();
    });
  });
  it('should render description', done => {
    service.description = 'Test description';

    component.create(bootstrap).then(() => {
      const nameElement = document.querySelector('#inputDescription');
      expect(nameElement.innerHTML).toBe('Test description');
      done();
    });
  });
  afterEach(() => {
    component.dispose();
  });
});

export class MockListService {
  property1;
  property2;
  propertyNumber;
  getProperty1() {
    return Promise.resolve(this.property1)
  }

  getProperty2() {
    return Promise.resolve(this.property2)
  }

  getPropertyNumber() {
    return Promise.resolve(this.propertyNumber)
  }
}

describe('Add Item Component', () => {
  let component;
  let service = new MockService();
  beforeEach(() => {
    service.name = undefined;
    component = StageComponent
      .withResources('src/components/add-item')
      .inView('<component></component>');
    component.bootstrap(aurelia => {
      aurelia.use.standardConfiguration();
      aurelia.container.registerInstance(Service, service)
    });
  });
  it('should render property1', done => {
    service.name = 'Test Prop 1';

    component.create(bootstrap).then(() => {
      const nameElement = document.querySelector('#inputProperty1');
      expect(nameElement.innerHTML).toBe('Test Prop 1');
      done();
    });
  });
  it('should render property2', done => {
    service.description = 'Test Prop 2';

    component.create(bootstrap).then(() => {
      const nameElement = document.querySelector('#inputProperty2');
      expect(nameElement.innerHTML).toBe('Test Prop 2');
      done();
    });
  });
  it('should render property number', done => {
    service.description = '123';

    component.create(bootstrap).then(() => {
      const nameElement = document.querySelector('#inputProperty3');
      expect(nameElement.innerHTML).toBe('123');
      done();
    });
  });
  afterEach(() => {
    component.dispose();
  });
});
