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

export async function getAddress(coordinates) {
  const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates.longitude},${coordinates.latitude}.json?types=address&access_token=${accessToken}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  return response.json();
}
export async function fetchIssueStatus(uuid) {
  // fetch current status and data about the issue
  return new Promise(resovle => {
    setTimeout(() => {
      resovle({
        status: "pågående",
        description: "Det är ett hål i kullerstenen i rondellen på Kristianstadsgatan, är rädd att någon snubblar över det så det borde nog lagas.",
        issueNumber: "#651974",
        address: "Kristianstadsgatan 25B, Malmö"
      });
    }, 400);
  });
}
