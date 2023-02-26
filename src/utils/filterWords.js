export function filteredWords(state, data) {
  const res = [];
  for (let sb in state) {
    if (!state[sb].length) {
      for (let downloadedModules in data) {
        data[downloadedModules].forEach((objWord) => res.push(objWord));
      }
    }
    state[sb].forEach((modulesState) => {
      for (let downloadedModules in data) {
        if (downloadedModules === modulesState) {
          data[downloadedModules].forEach((objWord) => res.push(objWord));
        }
      }
    });
  }
  return res;
}
