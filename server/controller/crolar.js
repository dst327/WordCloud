const processText = require("../tools/processTest");
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
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.bing.microsoft.com/v7.0/news/search?q=${req.params.q}`,
      headers: {
        "Ocp-Apim-Subscription-Key": "17148315f52d4f51b4cce01c7c86d7df",
      },
    };

    const resp = await axios.request(config);

    const val = resp.data.value.reduce(
      (acc, { name, url, image, description }) => {
        acc.push({
          name,
          url,
          image: image?.thumbnail.contentUrl || "",
          description,
        });
        return acc;
      },
      []
    );

    res.render("art", { val });
  } catch (error) {
    console.log(error);
  }
};
