export function renderCheckboxSchoolbooks(totalSchoolbooks) {
  let array = [];
  for (let i = 1; i <= totalSchoolbooks; i++) {
    array.push("Schoolbook " + i);
  }
  return array;
}

export async function fetchJsonModules(schoolbook, seter) {
  try {
    const response = await fetch(`../data/${schoolbook}.json`);
    const data = await response.json();
    seter(Object.keys(data));
  } catch (e) {
    console.error(e);
  }
}
