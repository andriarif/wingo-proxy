export default async function handler(req, res) {

  const BASE = "https://api.55fiveapi.com/api/webapi";

  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Authorization": "Bearer " + process.env.TOKEN,
    "Accept": "application/json"
  };

  const now = Math.floor(Date.now() / 1000);
  const rand = () => Math.random().toString(16).slice(2);

  try {

    const [issueRes, resultRes] = await Promise.all([

      fetch(`${BASE}/GetGameIssue`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          typeId: 30,
          language: 1,
          random: rand(),
          signature: "DDEFCE38021A546AF9876E0655F0450F",
          timestamp: now
        })
      }),

      fetch(`${BASE}/GetNoaverageEmerdList`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          pageSize: 10,
          pageNo: 1,
          typeId: 30,
          language: 1,
          random: rand(),
          signature: "77056BE08F7A83103347C07D06D0639C",
          timestamp: now
        })
      })

    ]);

    const issue = await issueRes.json();
    const result = await resultRes.json();

    const list = result?.data?.list || [];

    res.status(200).json({
      currentPeriode: issue?.data?.issueNumber || null,
      history: list.map(item => ({
        periode: item.issueNumber,
        angka: parseInt(item.number),
        hasil: item.number % 2 === 0 ? "GENAP" : "GANJIL"
      }))
    });

  } catch (e) {
    res.status(500).json({
      error: true,
      message: "API ERROR",
      detail: e.message
    });
  }
}
