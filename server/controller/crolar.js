const { data, processText } = require("../tools/processTest");
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
    const data = req.query.input;

    const processedWords = await processText(data);

    res.json({ words: processedWords });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getArtic = async (req, res) => {
  try {
    const reqQuary = req.query.t;
    const datee = new Date();
    var date;
    if (req.query.day == datee.getDay()) {
      date = `${datee.getDate().toString().padStart(2, "0")}/${(
        datee.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${datee.getFullYear()}`;
    } else {
      let lastWeek = new Date(datee);
      lastWeek.setDate(lastWeek.getDate() - 7);
      date = `${lastWeek.getDate().toString().padStart(2, "0")}/${(
        lastWeek.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${lastWeek.getFullYear()}`;
    }

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.bing.microsoft.com/v7.0/news/search?q=${req.params.q}&sortBy=${date}`,
      headers: {
        "Ocp-Apim-Subscription-Key": "c103f00da0564a3188975792742fd03d",
      },
    };
    let vconfig = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.bing.microsoft.com/v7.0/videos/search?q=${req.params.q}&sortBy=${date}`,
      headers: {
        "Ocp-Apim-Subscription-Key": "c103f00da0564a3188975792742fd03d",
      },
    };
    const resp = await axios.request(config);
    // const resp = articalText();

    const vresp = await axios.request(vconfig);

    // const val = resp.data.value.reduce(
    const val = vresp.data.value.reduce(
      (acc, { name, webSearchUrl, thumbnailUrl, description }) => {
        acc.push({
          name,
          url: webSearchUrl,
          image: thumbnailUrl || "",
          description,
        });
        return acc;
      },
      []
    );

    const va = resp.data.value.reduce(
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

    if (reqQuary == "Articles") res.render("art", { va });
    else res.render("videos", { val });
  } catch (error) {
    console.log(error);
  }
};
