const styles: Record<string, React.CSSProperties> = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "95vh",
  },
  banner: {
    alignItems: "center",
    color: "gray",
    display: "flex",
    flexDirection: "column",
    flex: "11",
    fontSize: "72px",
    justifyContent: "center",
    userSelect: "none",
  },
  art: {
    alignItems: "center",
    color: "gray",
    display: "flex",
    flexDirection: "column",
    flex: "11",
    fontSize: "50px",
    justifyContent: "center",
    userSelect: "none",
    fontFamily: "monospace",
    whiteSpace: "pre-wrap",
  }
}

export default function FourOFourPage() {
  return (
    <div style={styles.root}>
      <div style={styles.banner}>
        Hello 404!
      </div>
      <div style={styles.art}>
These should line up  v
    some more s       ^
      </div>
    </div>
  );
}
