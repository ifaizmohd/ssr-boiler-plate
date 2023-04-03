class Hydrator {
  routeContext: any;
  constructor(context?: any) {
    this.routeContext = context;
  }

  setRouteContext(context: any) {
    this.routeContext = context;
  }

  getRouteContext() {
    return this.routeContext;
  }
}

export default Hydrator;
