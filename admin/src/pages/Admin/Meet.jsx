const Meet = () => {
    return (
      <div style={{ width: "100%", height: "100vh", padding: "20px" }}>
        <iframe
          src="https://meet.jit.si/TalentTwinAdminMeet"
          width="100%"
          height="600px"
          allow="camera; microphone; fullscreen"
          style={{ border: "none", borderRadius: "10px" }}
        />
      </div>
    );
  };

export default Meet;