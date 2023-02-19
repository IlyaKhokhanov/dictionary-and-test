export default function filterData(state, data) {
  const res = [];
  state.forEach((objState) => {
    data.forEach(([sb, arrModulesData]) => {
      if (sb === objState.schoolbook) {
        if (!objState.modules.length) {
          Object.values(arrModulesData).forEach((arrModData) => {
            arrModData.forEach((item) => res.push(item));
          });
        }
        objState.modules.forEach((modulesState) => {
          Object.entries(arrModulesData).forEach(([module, arrModData]) => {
            if (module === modulesState) {
              arrModData.forEach((item) => res.push(item));
            }
          });
        });
      }
    });
  });
  return res;
}
