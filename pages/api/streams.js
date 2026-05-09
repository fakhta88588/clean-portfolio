export default function handler(req, res) {
  res.status(410).json({
    ok: false,
    mode: "voice-only",
    message: "Stream routes are disabled. Use /api/voice/rooms instead."
  });
}
