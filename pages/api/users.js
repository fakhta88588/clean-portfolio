const users = [
  { id: "demo-user", name: "Demo User", role: "member", online: true },
  { id: "host", name: "Room Host", role: "host", online: true }
];

export default function handler(req, res) {
  res.status(200).json({ ok: true, users });
}
