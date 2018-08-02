function values(obj) {
    const result = [];
    for(let key in obj) {
      result.push(obj[key]);
    }
    return result;
  }