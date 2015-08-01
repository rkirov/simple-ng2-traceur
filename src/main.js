import {
    ComponentAnnotation as Component,
    ViewAnnotation as View, bootstrap
} from 'angular2/angular2';

@Component({
  selector: 'app',
  viewInjector: [Service]
})
@View({
  template: '{{greeting}} world!'
})
class App {
  constructor(service: Service) {
    this.greeting = service.greeting();
    setTimeout(() => this.greeting = 'Howdy,', 1000);
  }
}

class Service {
  greeting() {
    return 'Hello';
  }
}

bootstrap(App);
