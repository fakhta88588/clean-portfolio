export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    conversations: [
      { id: "general", title: "General Voice Room", unread: 0 },
      { id: "support", title: "Support Room", unread: 0 }
    ]
  });
}
