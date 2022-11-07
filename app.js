import express from "express";
import cors from "cors";

const APP = express();
APP.use(cors());
APP.use(express.json());

const User = [
  {
    username: "bobesponja",
    avatar:
      "https://yt3.ggpht.com/ytc/AMLnZu9tYPIG3bxki2LZz-NRrvHtLHRL0-wW95Cjgcr2=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    username: "molusco",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzjNP-GewsOZIfbBTd2V_wWcZWPK0025bbg&usqp=CAU",
  },
];

let MainUser = {};

const Tweet = [
  {
    username: "bobesponja",
    avatar:
      "https://yt3.ggpht.com/ytc/AMLnZu9tYPIG3bxki2LZz-NRrvHtLHRL0-wW95Cjgcr2=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    username: "molusco",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzjNP-GewsOZIfbBTd2V_wWcZWPK0025bbg&usqp=CAU",
  },
];

const ShowTweet = [
  {
    username: "bobesponja",
    avatar:
      "https://yt3.ggpht.com/ytc/AMLnZu9tYPIG3bxki2LZz-NRrvHtLHRL0-wW95Cjgcr2=s900-c-k-c0x00ffffff-no-rj",
    tweet: "Amo fazer hambúrguer de siri",
  },
  {
    username: "molusco",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzjNP-GewsOZIfbBTd2V_wWcZWPK0025bbg&usqp=CAU",
    tweet: "Amo tocar clarinete",
  },
];

APP.post("/sign-up", (req, res) => {
  MainUser = { username: req.body.username, avatar: req.body.avatar };
  User.push(MainUser);
  return res.sendStatus(200);
});

APP.post("/tweets", (req, res) => {
  let NewTweet = { username: req.body.username, tweet: req.body.tweet };
  Tweet.unshift(NewTweet);

  NewTweet.avatar = User.find(
    (user) => user.username === NewTweet.username
  ).avatar;
  ShowTweet.unshift(NewTweet);

  return res.sendStatus(200);
});

APP.get("/tweets", (req, res) => {
  if (ShowTweet.length > 10) {
    const Show10Tweet = ShowTweet.slice(0, 10);
    return res.send(Show10Tweet);
  }

  return res.send(ShowTweet);
});

APP.listen(5000, () => console.log("Rodando porta 5000"));
