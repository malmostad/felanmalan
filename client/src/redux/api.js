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
      return await response.json();
    }
    throw new Error(`API call failed: ${response.statusText}`);
  } catch (error) {
    throw new Error(error);
  }
}
