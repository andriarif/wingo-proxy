export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.55fiveapi.com/api/webapi/GetNoaverageEmerdList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": "Bearer " + process.env.TOKEN,
        "Accept": "application/json, text/plain, */*",
        "Ar-Origin": "https://lopmiva.com",
        "Referer": "https://lopmiva.com/"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.text();

    res.status(200).send(data);

  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message
    });
  }
}
