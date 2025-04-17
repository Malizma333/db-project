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
{"             _._  _-=."}<br/>
{"      -=-_ _-    Y    \\  _."}<br/>
{"     O    \\      |     &\"  =-"}<br/>
{"     |     |          /      )"}<br/>
{"  ==-*                       '"}<br/>
{" -    \\                     |"}<br/>
{"(      -                    *"}<br/>
{" \\_         _        -     /     ?????"}<br/>
{"   -._       \\        |    |"}<br/>
{"      \"\\       \\      |    |"}<br/>
{"        -       |     \\    L     _"}<br/>
{"         '.      \\     | ..#=--\"\" |"}<br/>
{"           \\      \\   _|-          \\"}<br/>
{"            &    _\"-^             _-x"}<br/>
{"            _#--             _.-\"\""}<br/>
{"         <--            _.--\""}<br/>
{"          -        __-\"\""}<br/>
{"           \\   ..-\"              O"}<br/>
{"            x-'"}<br/>
{"                        O"}<br/>
{"                                _.--."}<br/>
{"                              -'"}<br/>
{"                             '"}
      </div>
    </div>
  );
}
