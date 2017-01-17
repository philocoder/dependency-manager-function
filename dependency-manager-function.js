function implementDefineRequirePattern( baseObject ) {
  var base = baseObject;
  base.defined = {};
  base.required = [];
  base.define = function(name, dependencies, mod) {
    if(!(typeof name === "string")) 
      throw new TypeError("Module's define method | Parameter 1 must be a string");
    if(!(dependencies instanceof Array)) 
      throw new TypeError("Module's define method | Parameter 2 must be an array");
    if(!(name in base.defined)) {
      base.defined[name] = {
        name: name,
        dependencies: dependencies,
        module: mod
      };
    } else {
      throw new Error("Module " + name + " is already defined.");
    };
  };
  base.require = function(name) {
    if(!(name in base.defined)) {
      throw new Error("Module " + name + " included but not defined.");
    }
    if(base.required.indexOf(name) === -1) {
      var mod = base.defined[name];
      for(var a=0; a<mod.dependencies.length; a++) {
        base.require(mod.dependencies[a]);
      }
      base.required.push(name);
    }
    return base.defined[name].module;
  };
  return base;
};
