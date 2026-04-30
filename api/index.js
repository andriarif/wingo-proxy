export default async function handler(req, res) {
  res.status(200).json({
    status: "TOKEN OK",
    token: process.env.TOKEN?.slice(0, 20)
  });
}
