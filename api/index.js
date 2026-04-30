export default function handler(req, res) {
  res.status(200).json({
    status: "OK API HIDUP",
    time: Date.now() // tambah ini
  });
}
