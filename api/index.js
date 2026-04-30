export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.55fiveapi.com/api/webapi/GetNoaverageEmerdList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": "Bearer " + process.env.TOKEN,
        "Accept": "application/json, text/plain, */*",
        "Ar-Origin": "https://lopmiva.com",
        "Referer": "https://lopmiva.com/#/home/AllLotteryGames/WinGo?id=1"
      },
      body: JSON.stringify({
        pageSize: 10,
        pageNo: 1,
        typeId: 30,
        language: 1,
        random: Math.random().toString(16).slice(2),
        signature: "DUMMY",
        timestamp: Math.floor(Date.now() / 1000)
      })
    });

    const text = await response.text();

    res.status(200).json({
      status: "RESPON RAW",
      data: text
    });

  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message
    });
  }
}
