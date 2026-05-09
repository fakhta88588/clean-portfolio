const rooms = [
  { id: "public-lounge", name: "Public Lounge", type: "voice", usersOnline: 128, videoEnabled: false },
  { id: "creators-room", name: "Creators Room", type: "voice", usersOnline: 42, videoEnabled: false },
  { id: "support-room", name: "Support Room", type: "voice", usersOnline: 16, videoEnabled: false },
];

export default function handler(req, res) {
  res.status(200).json({ ok: true, service: "voice-chat", rooms });
}
