export async function createReport(report) {
  try {
    const response = await fetch("/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(report)
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error(`API called failed: ${response.statusText}`);
  } catch (error) {
    throw new Error(error);
  }
}
