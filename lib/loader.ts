import * as module from "module";

module.registerHooks({
  resolve(specifier, context, defaultResolve) {
    if (specifier !== "assemblyscript") {
      return defaultResolve(specifier, context);
    }
    return defaultResolve(`@ye-yu/${specifier}`, context);
  },
  load(url, context, defaultLoad) {
    return defaultLoad(url, context);
  },
});
