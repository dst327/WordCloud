const processText = require("../tools/processTest");
const articalText = require("../tools/articals");
const vidoslText = require("../tools/vidos");
const axios = require("axios");
exports.getHomePage = async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getData = async (req, res) => {
  try {
    const processedWords = await processText();

    res.json({ words: processedWords });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getArtic = async (req, res) => {
  try {
    const reqQuary = req.query.t;
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.bing.microsoft.com/v7.0/news/search?q=${req.params.q}`,
      headers: {
        "Ocp-Apim-Subscription-Key": "17148315f52d4f51b4cce01c7c86d7df",
      },
    };

    // const resp = await axios.request(config);
    const resp = articalText();

    const video = vidoslText();

    // const val = resp.data.value.reduce(
    const val = video.reduce(
      (acc, { name, datePublish, thumbnail, description, contentUrl }) => {
        acc.push({
          name,
          datePublish,
          image: thumbnail,
          description,
          contentUrl,
        });
        return acc;
      },
      []
    );
    const va = resp.reduce((acc, { name, url, thumbnail, description }) => {
      acc.push({
        name,
        url,
        image: thumbnail,
        description,
      });
      return acc;
    }, []);

    if (reqQuary == "Articles") res.render("art", { va });
    else res.render("videos", { val });
  } catch (error) {
    console.log(error);
  }
};
