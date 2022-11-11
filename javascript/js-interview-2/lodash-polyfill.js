const obj = {
    a: { b: { c: "hello World" } }
  };
  
  const path = "a.b.c";
  
  const defaultValue = "not found";
  
  const get = (obj, path, de) => {
    let p = typeof path === "string" ? path.split(".") : path;
  
    if (p.length === 0) {
      return obj ? obj : de;
    }
  
    return get(obj[p.shift()], p, de);
  };
  console.log(get(obj, path, defaultValue));
  