const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51M2uPNJ3u0rP0Phpk6C2ojkk9kWrZBUOGjVvIrWCz1XYYmF2FXZXIi03xHlOO4NDEIPtuJjGfK2abLXBfjRE5hGE003RYFrNjo"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  const items = req.body.items;
  let arrayItems = [];
  items.forEach((item) => {
    arrayItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: arrayItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
