import { Component } from '@angular/core';
import { IframePlugin } from '@remixproject/engine-web';
import { Engine, Manager, Theme } from './plugins';

@Component({
  selector: 'engine-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private engine: Engine,
    private manager: Manager,
    private theme: Theme
  ) {}

  ngAfterViewInit() {
    const iframe = new IframePlugin({ name: 'iframe', url: 'http://localhost:4201', location: 'main' });
    this.engine.onload(() => {
      this.engine.register(iframe);
      this.manager.activatePlugin('iframe');
    });
  }
}
