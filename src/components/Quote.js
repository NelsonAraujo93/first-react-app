function Quote() {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <p style={{ fontSize: 32, color: '#7e7e7e' }}>Pure mathematics is, in its way, the poetry of logical ideas.</p>
        <p style={{ fontSize: 18, color: 'black', fontWeight: 700 }}>— Albert Einstein.</p>
      </div>
    </>
  );
}

export default Quote;
