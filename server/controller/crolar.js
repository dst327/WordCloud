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

    // const resp = await axios.request(config);
    const resp = [
      {
        name: "Fake robocalls. Doctored videos. Why Facebook is being urged to fix its election problem.",
        url: "https://www.msn.com/en-us/news/politics/fake-robocalls-doctored-videos-why-facebook-is-being-urged-to-fix-its-election-problem/ar-BB1hNRug",
        image: {
          thumbnail: {
            contentUrl:
              "https://www.bing.com/th?id=OVFT.Uk5e9lA32LtUcnnDmK96py&pid=News",
            width: 700,
            height: 466,
          },
        },
        description:
          "As the nation heads into the 2024 presidential election, the independent body that reviews Meta’s content moderation decisions is urging the tech giant to overhaul its policy on manipulated videos to encompass fake or distorted clips that can mislead voters and tamper with elections.",
        about: [
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/49eefe47-bac4-a67c-cf1b-2f5749f9a6d0",
            name: "Fake?",
          },
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/01c02617-b2db-f37c-8398-275eeca5a6e7",
            name: "Robocall",
          },
        ],
        provider: [
          {
            _type: "Organization",
            name: "USA TODAY on MSN.com",
            image: {
              thumbnail: {
                contentUrl:
                  "https://www.bing.com/th?id=ODF.m1iod5ODNIyyKu23kGIllQ&pid=news",
              },
            },
          },
        ],
        datePublished: "2024-02-06T16:54:29.0000000Z",
        category: "ScienceAndTechnology",
      },
      {
        name: "No immunity: Donald Trump can be tried on election interference charges, appeals court says",
        url: "https://news.yahoo.com/no-immunity-donald-trump-tried-152524493.html",
        image: {
          thumbnail: {
            contentUrl:
              "https://www.bing.com/th?id=OVFT.z9qrwSqnrjcgSPZJUUKnSC&pid=News",
            width: 700,
            height: 488,
          },
        },
        description:
          "A federal appeals court ruled Donald Trump is not immune from federal charges he tried to overturn the 2020 election.",
        about: [
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/1a466af2-ed23-25bd-794d-1ca925e4681b",
            name: "Donald Trump",
          },
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/599e96eb-d236-4624-b29d-70f60edfb4a4",
            name: "Election",
          },
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/77aa706e-a6a8-8743-5f63-9909f2e9776e",
            name: "Appellate court",
          },
        ],
        provider: [
          {
            _type: "Organization",
            name: "YAHOO!News",
            image: {
              thumbnail: {
                contentUrl:
                  "https://www.bing.com/th?id=ODF.nYADEgS75l8rdCg9D-p_OQ&pid=news",
              },
            },
          },
        ],
        datePublished: "2024-02-06T15:25:00.0000000Z",
        category: "US",
      },
      {
        name: "City calls for 2024 police chief election — here’s who’s running thus far",
        url: "https://news.yahoo.com/city-calls-2024-police-chief-150512338.html",
        image: {
          thumbnail: {
            contentUrl:
              "https://www.bing.com/th?id=OVFT.0ioD-nQbP-Pjdn6TR50yli&pid=News",
            width: 700,
            height: 393,
          },
        },
        description:
          "The San Angelo City Council officially called for the commencement of the May 2024 general election for chief of police during its Feb. 6 meeting, putting the head role of the San Angelo Police Department up for grabs.",
        provider: [
          {
            _type: "Organization",
            name: "YAHOO!News",
            image: {
              thumbnail: {
                contentUrl:
                  "https://www.bing.com/th?id=ODF.nYADEgS75l8rdCg9D-p_OQ&pid=news",
              },
            },
          },
        ],
        datePublished: "2024-02-06T15:05:00.0000000Z",
        category: "Politics",
      },
      {
        name: "Trump not immune from election subversion charges, US appeals court rules",
        url: "https://www.msn.com/en-ca/news/politics/trump-not-immune-from-election-subversion-charges-us-appeals-court-rules/ar-BB1hRQxz",
        image: {
          thumbnail: {
            contentUrl:
              "https://www.bing.com/th?id=OVFT.nxNiTUjblmJ-Cy-mWBKTdy&pid=News",
            width: 700,
            height: 463,
          },
        },
        description:
          "A federal appeals court Tuesday ruled that Donald Trump does not have immunity from charges that he plotted to overturn his 2020 election defeat, bringing the former U.S. president a step closer to an unprecedented criminal trial.",
        about: [
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/1a466af2-ed23-25bd-794d-1ca925e4681b",
            name: "Donald Trump",
          },
        ],
        mentions: [
          {
            name: "Donald Trump",
          },
          {
            name: "Election",
          },
          {
            name: "Subversion",
          },
        ],
        provider: [
          {
            _type: "Organization",
            name: "Reuters on MSN.com",
            image: {
              thumbnail: {
                contentUrl:
                  "https://www.bing.com/th?id=ODF.jFXbg3L7Ce_1pS4_IOR8CA&pid=news",
              },
            },
          },
        ],
        datePublished: "2024-02-06T15:17:03.0000000Z",
        category: "World",
      },
      {
        name: "This one poll may show why Taylor Swift's influence has MAGA world on edge in 2024 election",
        url: "https://www.usatoday.com/story/news/politics/elections/2024/02/05/poll-shows-why-taylor-swift-has-maga-conservatives-alarmed-about-2024/72437548007/",
        image: {
          thumbnail: {
            contentUrl:
              "https://www.bing.com/th?id=OVFT.S5_yYsYbYAdnw23pAAAahi&pid=News",
            width: 700,
            height: 393,
          },
        },
        description:
          "Why does the world's top performing artist, Taylor Swift, have political conservatives squirming? This one poll may explain why.",
        about: [
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/98004a38-a3ea-b902-b6d3-687b30b54353",
            name: "Taylor Swift",
          },
        ],
        provider: [
          {
            _type: "Organization",
            name: "USA Today",
            image: {
              thumbnail: {
                contentUrl:
                  "https://www.bing.com/th?id=ODF.m1iod5ODNIyyKu23kGIllQ&pid=news",
              },
            },
          },
        ],
        datePublished: "2024-02-05T21:26:00.0000000Z",
        category: "Politics",
      },
      {
        name: "At UN, Russia brings US election into Mideast attacks and US vows to respond to Iran-aligned groups",
        url: "https://www.msn.com/en-us/news/world/at-un-russia-brings-us-election-into-mideast-attacks-and-us-vows-to-respond-to-iran-aligned-groups/ar-BB1hPsOw",
        image: {
          thumbnail: {
            contentUrl:
              "https://www.bing.com/th?id=OVFT.72Jk-Yipg9buaJFIuF_4Fi&pid=News",
            width: 700,
            height: 393,
          },
        },
        description:
          "Russia accused the United States of “aggression” against Iraq and Syria aimed at preserving its global dominance and salvaging the Biden administration’s “image” ahead of U.S. elections",
        about: [
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/ed4fce79-8ad4-352b-205b-e4db36c49bbe",
            name: "Russia",
          },
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/502b5268-992d-26c9-a0d8-6f206338406e",
            name: "Iran",
          },
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/ba4dcd59-7aaf-ab51-0b2c-3186cc75acdc",
            name: "Middle East",
          },
        ],
        provider: [
          {
            _type: "Organization",
            name: "The Associated Press on MSN.com",
            image: {
              thumbnail: {
                contentUrl:
                  "https://www.bing.com/th?id=ODF.AlMAEy7MoWNz0OI_xSWQiw&pid=news",
              },
            },
          },
        ],
        datePublished: "2024-02-06T05:02:00.0000000Z",
      },
      {
        name: "Court rules Trump does not have immunity from 2020 election subversion prosecution",
        url: "https://www.cnn.com/politics/live-news/trump-court-ruling-immunity-election-subversion-prosecution/index.html",
        description:
          "Donald Trump is not immune from prosecution for alleged crimes he committed during his presidency to reverse the 2020 election results, a federal appeals court said Tuesday.",
        about: [
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/1a466af2-ed23-25bd-794d-1ca925e4681b",
            name: "Donald Trump",
          },
        ],
        provider: [
          {
            _type: "Organization",
            name: "CNN",
            image: {
              thumbnail: {
                contentUrl:
                  "https://www.bing.com/th?id=ODF.t0BGYosS4GKZSebCajKQGA&pid=news",
              },
            },
          },
        ],
        datePublished: "2024-02-06T15:30:00.0000000Z",
        category: "Politics",
      },
      {
        name: "What to Watch in Nevada’s Weird Election Week",
        url: "https://www.nytimes.com/2024/02/06/us/politics/nevada-republican-primary-caucus-trump-haley.html",
        image: {
          thumbnail: {
            contentUrl:
              "https://www.bing.com/th?id=OVFT.rG_5iE07tPL1ttvHSx4UzC&pid=News",
            width: 700,
            height: 366,
          },
        },
        description:
          "Tuesday’s primaries feature President Biden with token opposition, while Nikki Haley is aiming not to lose to “none of these candidates.” G.O.P. caucuses, engineered for Donald Trump, are on Thursday.",
        about: [
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/c2157d7e-617e-4517-80f8-1b08113afc14",
            name: "Nevada",
          },
        ],
        provider: [
          {
            _type: "Organization",
            name: "The New York Times",
            image: {
              thumbnail: {
                contentUrl:
                  "https://www.bing.com/th?id=ODF.GzcmUDr41J6Qc1JEQyNTCA&pid=news",
              },
            },
          },
        ],
        datePublished: "2024-02-06T10:04:00.0000000Z",
        category: "Politics",
      },
      {
        name: "Trump immunity claim rejected by appeals court in 2020 election case",
        url: "https://www.msn.com/en-us/news/politics/trump-not-immune-from-prosecution-in-2020-election-case-appeals-court-says/ar-BB1hROLC",
        description:
          "The federal appeals court in Washington said former President Donald Trump is not entitled to immunity from prosecution.",
        about: [
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/1a466af2-ed23-25bd-794d-1ca925e4681b",
            name: "Donald Trump",
          },
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/d92f1360-8879-fdbe-52a3-ca4631db4393",
            name: "Immunity",
          },
        ],
        mentions: [
          {
            name: "Donald Trump",
          },
          {
            name: "Immunity",
          },
          {
            name: "United States presidential election",
          },
        ],
        provider: [
          {
            _type: "Organization",
            name: "CBS News on MSN.com",
            image: {
              thumbnail: {
                contentUrl:
                  "https://www.bing.com/th?id=ODF.lisIXhXb-iy9Ku1HbFcCEw&pid=news",
              },
            },
          },
        ],
        datePublished: "2024-02-06T15:09:00.0000000Z",
        category: "Politics",
      },
      {
        name: "Project Veritas admits there was no evidence of election fraud at Pennsylvania post office in 2020",
        url: "https://www.msn.com/en-gb/news/us/project-veritas-admits-there-was-no-evidence-of-election-fraud-at-pennsylvania-post-office-in-2020/ar-BB1hSeU8",
        description:
          "A conservative group and its former leader are taking the unusual step of publicly acknowledging that claims of ballot mishandling at a Pennsylvania post office in 2020 were wrong.",
        about: [
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/5915bf79-b627-03a0-f8c7-7f311c26d0e5",
            name: "James O'Keefe",
          },
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/6304580e-c803-4266-818a-971619176547",
            name: "Pennsylvania",
          },
          {
            readLink:
              "https://api.bing.microsoft.com/api/v7/entities/b2843a2b-80fd-2fa0-10d0-97b51563ffcb",
            name: "Associated Press",
          },
        ],
        mentions: [
          {
            name: "James O'Keefe",
          },
          {
            name: "Pennsylvania",
          },
          {
            name: "Associated Press",
          },
        ],
        provider: [
          {
            _type: "Organization",
            name: "Associated Press on MSN.com",
            image: {
              thumbnail: {
                contentUrl:
                  "https://www.bing.com/th?id=ODF.AlMAEy7MoWNz0OI_xSWQiw&pid=news",
              },
            },
          },
        ],
        datePublished: "2024-02-06T17:18:00.0000000Z",
        category: "Politics",
      },
    ];
    // const val = resp.data.value.reduce(
    const val = resp.reduce((acc, { name, url, image, description }) => {
      acc.push({
        name,
        url,
        image: image?.thumbnail.contentUrl || "",
        description,
      });
      return acc;
    }, []);

    res.render("art", { val });
  } catch (error) {
    console.log(error);
  }
};
