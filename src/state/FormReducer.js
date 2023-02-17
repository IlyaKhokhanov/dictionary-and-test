export default function FormReducer(state, e) {
  console.log(state);
  if (e.target.classList.contains("form-school-checkbox")) {
    if (e.target.checked) {
      return [...state, { schoolbook: e.target.id, modules: [] }];
    } else {
      return state.filter((item) => item.schoolbook !== e.target.id);
    }
  } else if (e.target.classList.contains("form-module-checkbox")) {
    const getSchoolbook = e.target.closest("[data-schoolbook]");
    const indexSchoolbook = state.findIndex(
      (item) => item.schoolbook === getSchoolbook.dataset.schoolbook
    );
    const indexModule = state[indexSchoolbook].modules.findIndex(
      (item) => item === e.target.id
    );
    if (e.target.checked) {
      state[indexSchoolbook].modules.push(e.target.id);
      return [...state];
    } else {
      state[indexSchoolbook].modules.splice(indexModule, 1);
      return [...state];
    }
  }
}
