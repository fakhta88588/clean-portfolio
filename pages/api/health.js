export default function handler(req, res) {
  res.status(200).json({
    status: "healthy",
    service: "backend",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}
