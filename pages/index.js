export default function Home() {
  const rooms = [
    { name: "Public Lounge", users: 128 },
    { name: "Creators Room", users: 42 },
    { name: "Support Room", users: 16 },
  ];

  return (
    <main className="page">
      <nav className="nav">
        <div className="brand"><span className="logo">VC</span><span>VoiceChat</span></div>
        <div className="links">
          <a href="#rooms">Rooms</a>
          <a href="/api/health">Health</a>
          <a className="btn" href="/api">API</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="tag">Voice chat only setup</p>
          <h1>Premium voice room app ready for launch.</h1>
          <p className="text">
            Camera preview, video room and stream UI removed. This page is now focused on voice rooms,
            users, conversations and backend API testing.
          </p>
          <div className="actions">
            <a className="primary" href="#rooms">Open rooms</a>
            <a className="secondary" href="/api/voice/rooms">Test voice API</a>
          </div>
        </div>

        <div className="panel" id="rooms">
          <div className="panelTop"><h2>Rooms Online</h2><span>Voice Only</span></div>
          <div className="wave"><i></i><i></i><i></i><i></i><i></i></div>
          {rooms.map((room) => (
            <div className="room" key={room.name}>
              <b>{room.name}</b><small>{room.users} users online</small><strong>Open</strong>
            </div>
          ))}
          <div className="notice"><b>Video streaming disabled</b><small>Only voice chat modules are active.</small></div>
        </div>
      </section>

      <section className="cards">
        <div><b>No video live</b><p>Stream and camera preview removed from UI.</p></div>
        <div><b>Voice backend</b><p>Health, rooms, users and conversations API added.</p></div>
        <div><b>Vercel ready</b><p>Routes are ready for deployment testing.</p></div>
      </section>

      <style jsx>{`
        .page{min-height:100vh;color:#fff;background:radial-gradient(circle at 15% 10%,#ff4e8a55,transparent 35%),radial-gradient(circle at 85% 15%,#6d5dfc66,transparent 35%),linear-gradient(135deg,#090814,#16162f 55%,#2a1037);font-family:Inter,system-ui,Arial,sans-serif;padding:28px}
        .nav{max-width:1150px;margin:auto;display:flex;align-items:center;justify-content:space-between;padding:16px;border:1px solid #ffffff25;border-radius:24px;background:#ffffff14;backdrop-filter:blur(18px)}
        .brand{display:flex;gap:12px;align-items:center;font-size:20px;font-weight:900}.logo{width:44px;height:44px;display:grid;place-items:center;border-radius:15px;background:linear-gradient(135deg,#ff477e,#7c3aed)}
        .links{display:flex;gap:16px;align-items:center}.links a{color:#fff;text-decoration:none;font-weight:800}.btn{background:#ffffff22;padding:10px 16px;border-radius:999px}
        .hero{max-width:1150px;margin:74px auto 0;display:grid;grid-template-columns:1.05fr .95fr;gap:52px;align-items:center}.tag{display:inline-block;padding:10px 14px;border-radius:999px;background:#ffffff18;border:1px solid #ffffff22;font-weight:900;color:#ffd9e8}
        h1{font-size:clamp(42px,7vw,76px);line-height:.96;margin:20px 0;letter-spacing:-3px}.text{font-size:18px;line-height:1.8;color:#ffffffbf;max-width:650px}.actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:30px}.primary,.secondary{padding:15px 22px;border-radius:999px;text-decoration:none;font-weight:900}.primary{background:#fff;color:#151326}.secondary{color:#fff;background:#ffffff1f;border:1px solid #ffffff28}
        .panel,.cards div{border:1px solid #ffffff24;background:#ffffff15;backdrop-filter:blur(18px);box-shadow:0 25px 80px #0006}.panel{border-radius:38px;padding:26px}.panelTop{display:flex;justify-content:space-between;align-items:center}.panelTop h2{font-size:36px;margin:0}.panelTop span{background:#fff;color:#17152a;border-radius:999px;padding:10px 14px;font-weight:900}
        .wave{height:118px;border-radius:28px;background:#ffffff12;display:flex;gap:10px;align-items:center;justify-content:center;margin:24px 0}.wave i{display:block;width:12px;border-radius:999px;background:linear-gradient(#fff,#ff72b2)}.wave i:nth-child(1){height:40px}.wave i:nth-child(2){height:78px}.wave i:nth-child(3){height:55px}.wave i:nth-child(4){height:90px}.wave i:nth-child(5){height:48px}
        .room{display:grid;grid-template-columns:1fr auto;gap:4px;padding:16px;margin-top:12px;border-radius:22px;background:#ffffff16;border:1px solid #ffffff1f}.room small{color:#ffffffa8}.room strong{grid-row:1/3;grid-column:2;color:#c4b5fd;align-self:center}.notice{margin-top:14px;padding:16px;border-radius:22px;background:#ff477e22;border:1px solid #ff8ab544}.notice b,.notice small{display:block}.notice small{color:#ffffffa8;margin-top:5px}
        .cards{max-width:1150px;margin:70px auto 20px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.cards div{border-radius:26px;padding:24px}.cards b{font-size:22px}.cards p{color:#ffffffa8;line-height:1.6}
        @media(max-width:900px){.page{padding:18px}.hero{grid-template-columns:1fr;margin-top:44px}h1{letter-spacing:-2px}.cards{grid-template-columns:1fr}.links a:not(.btn){display:none}.panelTop{align-items:flex-start;flex-direction:column;gap:12px}}
      `}</style>
    </main>
  );
}
