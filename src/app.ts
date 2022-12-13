import "./styles/app.css";
import { EmptyRouter, HashRouter, JetApp } from "webix-jet";
import views from './export_views'

const PRODUCTION = false
const BUILD_AS_MODULE = false
const VERSION = "1.0"
const APPNAME = 'jet-test'

declare global {
  var webix: any;
}

const loadView = function (url) {
  return views[url]
}

export default class App extends JetApp {
  constructor(config?) {
    const defaults = {
      id: APPNAME,
      version: VERSION,
      router: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
      debug: !PRODUCTION,
      views: loadView,
      start: "/top/start"
    };

    super({...defaults, ...config});

  }

}

if (!BUILD_AS_MODULE) {
  webix.ready(() => new App().render());
}
