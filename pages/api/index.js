export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    message: "Backend API is running",
    route: "/api",
    method: req.method,
    timestamp: new Date().toISOString(),
  });
}
