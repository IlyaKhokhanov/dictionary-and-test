export function renderCheckboxSchoolbooks(totalSchoolbooks) {
  let array = [];
  for (let i = 1; i <= totalSchoolbooks; i++) {
    array.push("Schoolbook " + i);
  }
  return array;
}

export async function downloadModules(schoolbook, setter) {
  try {
    const response = await fetch(`./data/${schoolbook}.json`);
    const data = await response.json();
    setter(data);
  } catch (e) {
    alert("Unfortunately an error has occurred");
  }
}
