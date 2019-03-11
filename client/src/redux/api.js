export async function createReport(report) {
  const response = await fetch("/reports", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(report)
  });
  return response.json();
}
