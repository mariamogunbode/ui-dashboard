

export function ZigzagLine() {
  return (
    <div
      style={{
        width: '300px',
        height: '200px',
        borderBottom: '5px solid #fff',
        borderRight: '5px solid #fff',
        background: `
          linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
          linear-gradient(225deg, #708090 21px, #d9ecff 22px, #6f88a1ff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px) 0 64px
        `,
        backgroundColor: '#708090',
        backgroundSize: '64px 128px',
      }}
    >
      Follower Text
    </div>
  );
};

