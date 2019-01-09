export async function getChart(action) {
  const response = await fetch(
    `/api/charts/${action.formId}/${action.reportId}`
  );
  return response.json();
}

export async function createSurvey(survey) {
  const response = await fetch("/surveys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(survey)
  });
  return response.json();
}
