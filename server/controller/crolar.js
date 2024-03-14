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
    const resp = [
      {
        name: "Meghan, Duchess of Sussex, Speaks Out About ‘Hateful’ Online Bullying",
        url: "https://www.nytimes.com/2024/03/09/us/meghan-markle-sxsw-online-bullying.html",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.8ZCpSSOwhlsZG1nWiBuTOi&pid=News",
        description:
          "In an appearance at SXSW, Meghan said she experienced the heaviest online abuse during her pregnancies. The glare of public attention has often left Prince Harry and his wife, Meghan, on the receiving end of strong opinions. And Meghan, Duchess of Sussex, pushed back at that directly on Friday, criticizing a culture of bullying on social media.",
        datePublished: "2024-03-09T15:46:00.0000000Z",
      },
      {
        name: "Meghan, Duchess of Sussex, hits out at 'hateful' abuse during pregnancies",
        url: "https://www.msn.com/en-us/news/uknews/meghan-duchess-of-sussex-hits-out-at-hateful-abuse-during-pregnancies/ar-BB1jB8hU",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.QUJS8P9FU9aKBSOVF3V6qi&pid=News",
        description:
          'Meghan, Britain\\\'s Duchess of Sussex, has said she was targeted with "hateful" online abuse during her two pregnancies, criticising the toxicity and lack of humanity on the internet and in parts of the media.',
        datePublished: "2024-03-09T10:21:46.0000000Z",
      },
      {
        name: "Meghan, Duchess of Sussex, says she experienced ‘cruel’ bullying and abuse during her pregnancies",
        url: "https://www.msn.com/en-us/news/world/meghan-duchess-of-sussex-says-she-experienced-cruel-bullying-and-abuse-during-her-pregnancies/ar-BB1jBEXt",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.3flzEtU5LX70pnXvLzOTCS&pid=News",
        description:
          "Meghan, Duchess of Sussex, has said she experienced “cruel” online bullying and abuse ... that and you have to really wrap your head around why people would be so hateful. It’s not catty. It’s cruel,” she added. In March 2019, the British ...",
        datePublished: "2024-03-09T16:36:31.0000000Z",
      },
      {
        name: "Meghan, Duchess of Sussex, addresses ‘hateful’ social media",
        url: "https://www.msn.com/en-us/news/us/meghan-duchess-of-sussex-addresses-hateful-social-media/vi-BB1jBGBG",
        thumbnail:
          "https://www.bing.com/th?id=ODF.t0BGYosS4GKZSebCajKQGA&pid=news",
        description:
          "Speaking at SXSW in Austin, Texas, Meghan, Duchess of Sussex took to the stage to speak candidly about online abuse.",
        datePublished: "2024-03-09T15:41:38.0000000Z",
      },
      {
        name: "Meghan hits out at ‘hateful’ online abuse",
        url: "https://www.bangkokpost.com/world/2755818/meghan-hits-out-at-hateful-online-abuse",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.zX0QbkuwYHKHMjL0N43Uvy&pid=News",
        description:
          "LONDON - Meghan, the Duchess of Sussex, has said she was targeted with “hateful” online abuse during her two pregnancies, criticising the toxic environment and lack of humanity on the internet and in parts of the media.",
        datePublished: "2024-03-09T11:45:00.0000000Z",
      },
      {
        name: "Peter Andre says ‘we have to stick up’ for Meghan Markle after cyber-bullying revelations",
        url: "https://www.msn.com/en-us/lifestyle/lifestyle-buzz/peter-andre-says-we-have-to-stick-up-for-meghan-markle-after-cyber-bullying-revelations/ar-BB1jBsrr",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.O5Ewz9tTOHwg5zP9L2yU5y&pid=News",
        description:
          "Peter Andre believes “we have to stick up” for Meghan Markle after the Duchess of Sussex gave a candid account of her experience of being cyber-bullied. The Duchess spoke of “hateful” and “cruel” attacks when she was pregnant.",
        datePublished: "2024-03-09T12:02:34.0000000Z",
      },
      {
        name: "Meghan: 'Social media bullying is not catty, it's cruel'",
        url: "https://www.bbc.com/news/av/entertainment-arts-68518927",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.OGR6ND62gXU0mLanbt0tXi&pid=News",
        description:
          'The Duchess of Sussex has criticised the "toxicity" of social media, revealing she was targeted while pregnant.',
        datePublished: "2024-03-09T10:23:00.0000000Z",
      },
      {
        name: "'It's not catty, it's cruel': Meghan Markle says she was cyber-bullied while pregnant with Archie and Lilibet as she takes center stage at star-studded International Women's ...",
        url: "https://www.dailymail.co.uk/news/article-13173525/Meghans-cyber-bullying-hell-Duchess-Sussex-opens-hateful-messages-received-pregnant-Archie-Lilibet-SXSW-festival.html",
        thumbnail: "Daily Mail",
        description:
          "Meghan Markle has opened up about the 'hateful' cyber-bullying she received while pregnant with Archie and Lilibet during SXSW festival. The Duchess of Sussex arrived in Texas ... use and claimed most of the online hate she experienced happened ...",
        datePublished: "2024-03-08T19:43:00.0000000Z",
      },
      {
        name: "Prince Harry's 'anxiety' as wife Meghan Markle slams 'hateful abuse' in powerful speech",
        url: "https://www.mirror.co.uk/3am/us-celebrity-news/prince-harrys-anxiety-wife-meghan-32311967",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.IOmvCZza_ICwiLy2z_nu7S&pid=News",
        description:
          'Prince Harry had a "touch of nerves" as he watched wife Meghan Markle deliver a powerful speech, according to a body language expert. The Duchess of Sussex ... bulk of the bullying and abuse that I was experiencing in social media and online, was when ...',
        datePublished: "2024-03-09T10:25:00.0000000Z",
      },
      {
        name: "Duchess of Sussex, others on SXSW panel discuss issues affecting women and mothers",
        url: "https://www.newsday.com/entertainment/meghan-duchess-shields-couric-women-sxsw-w96274",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.jO7duqVyGUsBWG4Qy1om-C&pid=News",
        description:
          "A panel featuring Meghan the Duchess of Sussex came together on International Women's Day to discuss how women and mothers are portrayed in traditional media and across social media, among other issues.",
        datePublished: "2024-03-08T21:03:00.0000000Z",
      },
      {
        name: "President Biden Pokes Fun at His Age and Calls Out Trump in New Campaign Ad",
        url: "https://www.aol.com/president-biden-pokes-fun-age-153616340.html",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.Bv0E6ud53rutYqOSs2IfhS&pid=News",
        description:
          "Biden addresses his age and touts his record on health, economy, infrastructure, climate change, and abortion rights in a new ad.",
        datePublished: "2024-03-09T15:36:00.0000000Z",
      },
      {
        name: "Biden\\'s new ad takes on his age: \"I\\'m not a young guy\"",
        url: "https://www.msn.com/en-us/news/politics/bidens-new-ad-takes-on-his-age-im-not-a-young-guy/ar-BB1jBs6f",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.RXPAgCjn8TzsZOJNnV7FLC&pid=News",
        description:
          "President Biden knows he\\'s old, but it\\'s his experience that matters, he argues in a new ad released Saturday at the informal beginning of the general election campaign. \"Look I\\'m not a young guy. That\\'s no secret,",
        datePublished: "2024-03-09T14:43:06.0000000Z",
      },
      {
        name: "‘I’m Very Young Energetic and Handsome!’ Biden Jokes About Age Concerns In New Post-SOTU Ad",
        url: "https://www.msn.com/en-us/news/politics/i-m-very-young-energetic-and-handsome-biden-jokes-about-age-concerns-in-new-post-sotu-ad/ar-BB1jBJL7",
        thumbnail:
          "https://www.bing.com/th?id=ODF.ZVqBzERcsnA5yJ9tyjczag&pid=news",
        description:
          "The Biden-Harris campaign released a new campaign ad featuring President Joe Biden joking about his age. The TV spot was released just days after Biden gave his rousing State of the Union speech to Congress. The ad begins with a smiling Biden saying, “Look, I’m not a young guy. That’s no secret. But here’s the deal,” The ad continued:",
        datePublished: "2024-03-09T16:48:23.0000000Z",
      },
      {
        name: "New Biden Ad Tackles Age Issue Head-On",
        url: "https://www.msn.com/en-us/news/politics/new-biden-ad-tackles-age-issue-head-on/ar-BB1jBVoR",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.__UCG1SyxttbaD0FCSiPAC&pid=News",
        description:
          "We know Joe Biden is up there in years, you know it, and most voters know it. Now, the 81-year-old president running for a second term is addressing the age issue head-on in a new ad meant to soothe concerns that he doesn't have the stamina for a repeat four years.",
        datePublished: "2024-03-09T16:00:00.0000000Z",
      },
      {
        name: "Biden leans into his age and effectiveness in his first post-Super Tuesday ad in battleground states",
        url: "https://www.msn.com/en-us/news/politics/biden-leans-into-his-age-and-effectiveness-in-his-first-post-super-tuesday-ad-in-battleground-states/ar-BB1jBeCp",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.ZGIElhg1VVCeC2B8WEsW4S&pid=News",
        description:
          "President Joe Biden is making no excuses for his age in the first campaign ad of a $30 million buy across battleground states after Super Tuesday, casting himself as more effective than his predecessor,",
        datePublished: "2024-03-09T15:24:00.0000000Z",
      },
      {
        name: "Election Updates: Biden and Trump kick off the general election campaign in the battleground state of Georgia.",
        url: "https://www.nytimes.com/live/2024/03/09/us/2024-presidential-election",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.zREzFm9eoKEoyyJD3gOT8i&pid=News",
        description:
          "President Biden and former President Donald J. Trump will both campaign in Georgia today, kicking off their likely general-election battle for a state that Mr. Biden won by a tiny margin in 2020.",
        datePublished: "2024-03-09T10:27:00.0000000Z",
      },
      {
        name: "‘SNL’ pokes fun at Biden’s age in cold open",
        url: "https://www.aol.com/snl-pokes-fun-biden-age-132446422.html",
        thumbnail: "AOL",
        description:
          "“Saturday Night Live” (SNL) poked fun at President Biden’s age in its latest cold open as its cast impersonated some of the president’s closest allies to argue that Biden is not too old to ...",
        datePublished: "2024-03-03T08:24:00.0000000Z",
      },
      {
        name: "‘SNL’ pokes fun at Biden’s age in cold open",
        url: "https://ca.news.yahoo.com/snl-pokes-fun-biden-age-132446182.html",
        thumbnail: "Yahoo News Canada",
        description:
          "“Saturday Night Live” (SNL) poked fun at President Biden’s age in its latest cold open as its cast impersonated some of the president’s closest allies to argue that Biden is not too old to ... should care about is his record. Look at what Joe ...",
        datePublished: "2024-03-03T13:24:00.0000000Z",
      },
      {
        name: "Miami Beach Is Done With Spring Breakers: ‘It’s Not Us. It’s You.’",
        url: "https://www.nytimes.com/2024/03/09/us/miami-beach-spring-break.html",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.L-FlV2s0NMn9KZA5e9H8si&pid=News",
        description:
          "Miami Beach is breaking up with spring break, the city announced in a social media ad this week: “This isn’t working anymore,” it begins. “And it’s not us. It’s you ... and more access to lawyers” do not, she said.",
        datePublished: "2024-03-09T10:03:00.0000000Z",
      },
      {
        name: "Miami Beach launches 'Breaking Up with Spring Break' ad to discourage unruly tourists",
        url: "https://www.msn.com/en-us/travel/news/miami-beach-launches-breaking-up-with-spring-break-ad-to-discourage-unruly-tourists/ar-BB1jBlRC",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.n8Q8AXlWmgs7zfGxPgk8gy&pid=News",
        description:
          'Miami Beach wants to break up with spring breakers, according to a new ad.On Friday, the Florida city released a minute-long ad titled "Miami Beach Is Breaking Up With Spring Break" that attacked reckless and unruly tourists for committing crimes and ruining the area.',
        datePublished: "2024-03-09T13:00:31.0000000Z",
      },
      {
        name: "Miami Beach keeps it real about spring breakers in new video ad: 'It's not us, it's you'",
        url: "https://www.msn.com/en-us/news/us/its-not-us-its-you-miami-beach-keeps-it-real-about-spring-breakers-in-new-video-ad/ar-BB1jnMZh",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.HZYrvlkxK5Szvv4UczGH4C&pid=News",
        description:
          "In the one-minute video, spring break is discussed not as the iconic party fest it's become known as, but rather as a dreaded yearly occurrence that is detrimental to Miami Beach locals, law enforcement,",
        datePublished: "2024-03-05T20:19:42.0000000Z",
      },
      {
        name: "Miami Beach ‘breaks up’ with spring breakers in biting new video: ‘It’s not us, it’s you’",
        url: "https://www.msn.com/en-us/health/medical/miami-beach-breaks-up-with-spring-breakers-in-biting-new-video-it-s-not-us-it-s-you/ar-BB1jnlxJ",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.cCLYZnAGdfHB9RFLb952SC&pid=News",
        description:
          "In the footage, captioned “Hey Spring Break, we’re over,” actors portraying exasperated Miami Beach residents say things such as, “Hey, we need to talk,” and",
        datePublished: "2024-03-05T17:19:40.0000000Z",
      },
      {
        name: "Spring breakers from Massachusetts not bothered by Miami trying to keep them away",
        url: "https://www.msn.com/en-us/travel/news/spring-breakers-from-massachusetts-not-bothered-by-miami-trying-to-keep-them-away/ar-BB1jvWTU",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.0ISJz9uTJNcG_NtdWRg5BS&pid=News",
        description:
          'As Miami Beach is trying to "break up" with spring breakers this year, college students flying out of Logan Airport for the holiday said not much can deter them from the sun and fun.',
        datePublished: "2024-03-07T22:39:00.0000000Z",
      },
      {
        name: "Miami Beach To Spring Breakers: ‘We’re Breaking Up With You’",
        url: "https://www.forbes.com/sites/brittanyanas/2024/03/06/miami-beach-to-spring-breakers-were-breaking-up-with-you/",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.wktBJdl7C_mgKPUsx5-8FS&pid=News",
        description:
          "After hundreds of arrests last year, Miami Beach has a message to unruly Spring Breakers: Don’t come this March. An anti-tourism ad delivers the message like a break-up.",
        datePublished: "2024-03-06T18:13:00.0000000Z",
      },
      {
        name: "Miami Beach is breaking up with spring break — or at least trying to",
        url: "https://abcnews.go.com/Business/wireStory/miami-beach-breaking-spring-break-107797177",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.pZ93eo4a3CkDG0hMDiejpi&pid=News",
        description:
          "Miami Beach is trying to break up with spring break, but it’s not yet clear whether ... the city's actions have anything to do with race. “I have a moral obligation to keep people safe, and right now, it is not safe,” Meiner said.",
        datePublished: "2024-03-05T04:18:00.0000000Z",
      },
      {
        name: "Miami breaks up with Spring Break",
        url: "https://www.washingtonexaminer.com/opinion/2908350/miami-breaks-up-with-spring-break/",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.75BLh2-9EXREuyhDmIisTC&pid=News",
        description:
          "In the infamous words of Vice President Kamala Harris, Miami officials have a message for would-be tourists: “Do not come.”",
        datePublished: "2024-03-08T05:00:00.0000000Z",
      },
      {
        name: "'It's not us, it's you:' Miami Beach breaks up with spring breakers in recent ad",
        url: "https://www.yahoo.com/news/not-us-miami-beach-breaks-140202615.html",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.AeBgzd1NIYo6VIGTkkbTWy&pid=News",
        description:
          "Miami Beach is opting out of a toxic relationship in a recent video posted to social media - the city's relationship with spring breakers.",
        datePublished: "2024-03-05T14:01:00.0000000Z",
      },
      {
        name: "Miami Beach breaks up with spring breakers: 'It's not us; it's you'",
        url: "https://www.msn.com/en-us/travel/news/miami-beach-breaks-up-with-spring-breakers-its-not-us-its-you/ar-BB1jkEac",
        thumbnail:
          "https://www.bing.com/th?id=OVFT.yVCGVjd-B8zZjA1WIRORMS&pid=News",
        description:
          "Ever felt the sting of a breakup? Now, imagine a whole city giving you the cold shoulder. That's what this year's spring breakers in Miami Beach are facing after the city sent out a bold breakup message.",
        datePublished: "2024-03-05T00:58:06.0000000Z",
      },
    ];

    const video = [
      {
        name: 'Meghan Markle Talks "CRUEL" Online Bullying During Her Pregnancies | E! News',
        description:
          'The Duchess of Sussex takes part in a panel at SXSW 2024 in Austin, Texas, and discusses online hate directed towards her in the past. Prince Harry is also in the audience to support his wife and Meghan Markle gives him a sweet shoutout, calling him "an amazing partner." Full Story: https://www.eonline.com/news/1396829/meghan-markle-slams-cruel ...',
        thumbnailUrl:
          "https://tse4.mm.bing.net/th?id=OVF.BR6JorsHdPaYylSp5C88AA&pid=Api",
        datePublish:
          "https://tse4.mm.bing.net/th?id=OVF.BR6JorsHdPaYylSp5C88AA&pid=Api",
        contentUrl: "https://www.youtube.com/watch?v=W-1aQh8fKxg",
      },
      {
        name: "Meghan Markle Talks Being Bullied Online While Pregnant w/ Archie & Lili",
        description:
          'Meghan Markle spoke out against hate on social media during a panel on International Women\\\'s Day. On Friday, the Duchess of Sussex took part in a panel at South by Southwest called "Breaking Barriers, Shaping Narratives: How Women Lead On and Off the Screen." During the panel – which included Katie Couric and Brooke Shields, among others ...',
        thumbnailUrl:
          "https://tse3.mm.bing.net/th?id=OVF.KEBq%2fxU1ZnuGIplkzqd9jg&pid=Api",
        datePublish:
          "https://tse3.mm.bing.net/th?id=OVF.KEBq%2fxU1ZnuGIplkzqd9jg&pid=Api",
        contentUrl: "https://www.youtube.com/watch?v=taxaDDuDeDw",
      },
      {
        name: "'It's not catty, it's cruel': Meghan Markle speaks out on 'hateful' cyber-bullying",
        description:
          'Meghan Markle tells the SXSW conference that she suffered "hateful" cyber-bullying attacks while pregnant with Archie and Lilibet.The Duchess of Sussex said she struggled to comprehend the mindset of people hitting out at her.WATCH THE CLIP ABOVE',
        thumbnailUrl:
          "https://tse2.mm.bing.net/th?id=OVF.cIuMki4S3iGpkjOgJiW%2bKw&pid=Api",
        datePublish:
          "https://tse2.mm.bing.net/th?id=OVF.cIuMki4S3iGpkjOgJiW%2bKw&pid=Api",
        contentUrl:
          "https://www.msn.com/en-gb/entertainment/news/it-s-not-catty-it-s-cruel-meghan-markle-speaks-out-on-hateful-cyber-bullying/vi-BB1jBFs1",
      },
      {
        name: "'It's not catty, it's cruel': Meghan Markle says she was cyber-bullied while pregnant with Archie",
        description:
          "'It's not catty, it's cruel': Meghan Markle says she was cyber-bullied while pregnant with Archie 'It's not catty, it's cruel': Meghan Markle says she was cyber-bullied while pregnant with Archie and Lilibet as she takes center stage at star-studded International Women's Day panel - while Prince Harry watches on from the front row Meghan Markle ...",
        thumbnailUrl:
          "https://tse2.mm.bing.net/th?id=OVF.KzLBkdl3NdCV%2fOIs7c32nQ&pid=Api",
        datePublish:
          "https://tse2.mm.bing.net/th?id=OVF.KzLBkdl3NdCV%2fOIs7c32nQ&pid=Api",
        contentUrl: "https://www.youtube.com/watch?v=Hzvjc5nAkJA",
      },
      {
        name: "Meghan, Duchess of Sussex made a brief return to acting to play an intern in an advertisement",
        description:
          "Meghan, Duchess of Sussex dipped her toe back into acting for the ad for the coffee brand she is a private investor of.",
        thumbnailUrl:
          "https://tse3.mm.bing.net/th?id=OVP.kDFYIGP7KUU04a9qfw885QHgEO&pid=Api",
        datePublish:
          "https://tse3.mm.bing.net/th?id=OVP.kDFYIGP7KUU04a9qfw885QHgEO&pid=Api",
        contentUrl:
          "https://www.msn.com/en-us/video/entertainment/meghan-duchess-of-sussex-made-a-brief-return-to-acting-to-play-an-intern-in-an-advertisement/vi-AA1lNWDG",
      },
      {
        name: 'Meghan, Duchess of Sussex is "deeply touched" by her new Nigerian nickname',
        description:
          'Meghan, Duchess of Sussex has been given a new Nigerian nickname during the Invictus Games, and she is "deeply touched".',
        thumbnailUrl:
          "https://tse1.mm.bing.net/th?id=OVP.fLMdnnTUmGluXVP8gjHA7wEsDD&pid=Api",
        datePublish:
          "https://tse1.mm.bing.net/th?id=OVP.fLMdnnTUmGluXVP8gjHA7wEsDD&pid=Api",
        contentUrl:
          "https://www.msn.com/en-us/entertainment/entertainment-celebrity/meghan-duchess-of-sussex-is-deeply-touched-by-her-new-nigerian-nickname/vi-AA1gIvEd",
      },
      {
        name: "'She Really is Beautiful Innit!': Schoolboy Wowed by Duchess of Sussex",
        description:
          'Meghan, Duchess of Sussex, visited Robert Clack School in Dagenham, east London on Friday to speak with pupils ahead of International Women\\\'s Day. 16-year-old Aker Okoye, who was invited on stage to speak about the importance of the day, said of Meghan: "She really is beautiful innit". #DuchessOfSussex #MeghanMarkle #RoyalFamily Report by ...',
        thumbnailUrl:
          "https://tse3.mm.bing.net/th?id=OVP.nzpo2Uwt5-HRem_DButTQAHgFo&pid=Api",
        datePublish:
          "https://tse3.mm.bing.net/th?id=OVP.nzpo2Uwt5-HRem_DButTQAHgFo&pid=Api",
        contentUrl: "https://www.youtube.com/watch?v=Irn32AXgSDM",
      },
      {
        name: "Meghan, Duchess of Sussex visits Royal Variety charity care home",
        description:
          "A visibly pregnant Meghan, Duchess of Sussex visits the Royal Variety Charity's residential nursing and care home and unveils a plaque. Report by Simon Anderson.",
        thumbnailUrl:
          "https://tse3.mm.bing.net/th?id=OVP.e2A_b5I_sfM8vVcRapTlBQEsDh&pid=Api",
        datePublish:
          "https://tse3.mm.bing.net/th?id=OVP.e2A_b5I_sfM8vVcRapTlBQEsDh&pid=Api",
        contentUrl: "https://www.youtube.com/watch?v=Byed8MVNVJY",
      },
      {
        name: "Meghan Markle's liberation from the royals",
        description:
          'In an exclusive first look on "CBS This Morning," Meghan, the Duchess of Sussex, explains why she is ready to speak her truth in Sunday\\\'s highly-anticipated interview with Oprah, airing on CBS. Subscribe to the "CBS This Morning" YouTube channel: https://bit.ly/3ceNNCX Watch more "CBS This Morning": http://bit.ly/1T88yAR Like "CBS This Morning ...',
        thumbnailUrl:
          "https://tse1.mm.bing.net/th?id=OVP.KD8664A2vZF84fydOS-g7QHgFo&pid=Api",
        datePublish:
          "https://tse1.mm.bing.net/th?id=OVP.KD8664A2vZF84fydOS-g7QHgFo&pid=Api",
        contentUrl: "https://www.youtube.com/watch?v=e4pqOrP8a6E",
      },
      {
        name: "Prince Harry and Meghan Markle speak out",
        description:
          "In their first wide-ranging interview since leaving the royal family, Prince Harry and Meghan, Duchess of Sussex discuss that decision, plus bouts of depression, racism, family infighting and much more with Oprah Winfrey. Gayle King reports. Watch Oprah's full primetime special with Meghan and Prince Harry here: https://bit.ly/3t24kAK Subscribe ...",
        thumbnailUrl:
          "https://tse2.mm.bing.net/th?id=OVP.GAYhZrNtGigG_O0VA4-p4QHgFo&pid=Api",
        datePublish:
          "https://tse2.mm.bing.net/th?id=OVP.GAYhZrNtGigG_O0VA4-p4QHgFo&pid=Api",
        contentUrl: "https://www.youtube.com/watch?v=_4kWaiDuTYU",
      },
      {
        name: "'It's not catty, it's cruel': Meghan Markle speaks out on 'hateful' cyber-bullying",
        description:
          'Meghan Markle tells the SXSW conference that she suffered "hateful" cyber-bullying attacks while pregnant with Archie and Lilibet.The Duchess of Sussex said she struggled to comprehend the mindset of people hitting out at her.WATCH THE CLIP ABOVE',
        thumbnailUrl:
          "https://tse1.mm.bing.net/th?id=OVF.PgridXNmXSKJrrXE7IeL9g&pid=Api",
        datePublish:
          "https://tse1.mm.bing.net/th?id=OVF.PgridXNmXSKJrrXE7IeL9g&pid=Api",
        contentUrl:
          "https://www.msn.com/en-gb/entertainment/news/its-not-catty-its-cruel-meghan-markle-speaks-out-on-hateful-cyber-bullying/vi-BB1jBFs1",
      },
      {
        name: "Meghan: Duchess of Sussex tells of miscarriage 'pain and grief' - BBC News",
        description:
          'The Duchess of Sussex has revealed she had a miscarriage in July, writing in an article of feeling "an almost unbearable grief". "I knew, as I clutched my firstborn child, that I was losing my second," Meghan said in a piece for the New York Times. She went on to describe how she watched "my husband\\\'s heart break as he tried to hold the ...',
        thumbnailUrl:
          "https://tse2.mm.bing.net/th?id=OVP.1DUCerFueDdXSwi8VanqjAHgFo&pid=Api",
        datePublish:
          "https://tse2.mm.bing.net/th?id=OVP.1DUCerFueDdXSwi8VanqjAHgFo&pid=Api",
        contentUrl: "https://www.youtube.com/watch?v=zlAMoe2unME",
      },
      {
        name: "Duke and Duchess of Sussex lament 'devastating' online bullying consequences",
        description:
          "While appearing at the Archewell Foundation Parents' Summit on Mental Wellness in a Digital Age, held in New York City on Tuesday, Prince Harry and his wife Meghan, Duchess of Sussex opened up about raising children with access to social media. During a discussion, the couple revealed that they have been working alongside tech companies and ...",
        thumbnailUrl:
          "https://tse4.mm.bing.net/th?id=OVP.4y3kki8eHq9xZDp5yijK2gHgEO&pid=Api",
        datePublish:
          "https://tse4.mm.bing.net/th?id=OVP.4y3kki8eHq9xZDp5yijK2gHgEO&pid=Api",
        contentUrl:
          "https://www.msn.com/en-gb/news/uknews/duke-and-duchess-of-sussex-lament-devastating-online-bullying-consequences/vi-AA1i1Q2t",
      },
      {
        name: "Meghan Markle Reveals Kate Middleton Made Her CRY Ahead of Wedding",
        description:
          "Meghan Markle sets the record straight on rumors that she made Kate Middleton cry during Sunday’s ‘Oprah With Meghan and Harry: A CBS Primetime Special.’ The Duchess of Sussex says that it was actually the reverse and that Middleton apologized and sent her flowers. Markle also told Winfrey about why she didn’t feel protected by the ...",
        thumbnailUrl:
          "https://tse4.mm.bing.net/th?id=OVP.d9ImrqYTTioESElCF-dTiQHgFo&pid=Api",
        datePublish:
          "https://tse4.mm.bing.net/th?id=OVP.d9ImrqYTTioESElCF-dTiQHgFo&pid=Api",
        contentUrl: "https://www.youtube.com/watch?v=j-ZI82iBf9s",
      },
      {
        name: 'Meghan, Duchess of Sussex\\\'s father has sent "all the good wishes in the world" to King Charles',
        description:
          "Thomas Markle, the father of Meghan, Duchess of Sussex, has sent a message of support to King Charles following his cancer diagnosis.",
        thumbnailUrl:
          "https://tse4.mm.bing.net/th?id=OVP.hHXasNUl2l0J5zNPGnkGGAJYGG&pid=Api",
        datePublish:
          "https://tse4.mm.bing.net/th?id=OVP.hHXasNUl2l0J5zNPGnkGGAJYGG&pid=Api",
        contentUrl:
          "https://www.yahoo.com/entertainment/meghan-duchess-sussexs-father-sent-120230227.html",
      },
      {
        name: "Duchess of Sussex Reveals Struggles of Motherhood",
        description:
          "The Duke and Duchess of Sussex speak about the causes and issues they care most about, as they deal with the challenges of being modern royals. ITV News At Ten anchor Tom Bradby followed the royal couple for the duration of their recent tour of Africa, where they brought with them their baby son Archie. In an exclusive documentary ‘Harry ...",
        thumbnailUrl:
          "https://tse3.mm.bing.net/th?id=OVP.Ynosd8vU7yRyqaVxzu_pyQHgFo&pid=Api",
        datePublish:
          "https://tse3.mm.bing.net/th?id=OVP.Ynosd8vU7yRyqaVxzu_pyQHgFo&pid=Api",
        contentUrl: "https://www.youtube.com/watch?v=T6krnJ_oyQg",
      },
      {
        name: 'Meghan, Duchess of Sussex is "deeply touched" by her new Nigerian nickname',
        description:
          'Meghan, Duchess of Sussex has been given a new Nigerian nickname during the Invictus Games, and she is "deeply touched".',
        thumbnailUrl:
          "https://tse4.mm.bing.net/th?id=OVP.ieP1TmCaDfz4p3XvhcuSRQIIFS&pid=Api",
        datePublish:
          "https://tse4.mm.bing.net/th?id=OVP.ieP1TmCaDfz4p3XvhcuSRQIIFS&pid=Api",
        contentUrl:
          "https://www.msn.com/en-us/video/peopleandplaces/meghan-duchess-of-sussex-is-deeply-touched-by-her-new-nigerian-nickname/vi-AA1gItBO",
      },
      {
        name: "Meghan, Duchess of Sussex slammed by late Queen’s childhood friend",
        description:
          "Three years after ‘Megxit’, one of the late Queen Elizabeth’s best friends has slammed Meghan, Duchess of Sussex for thinking life in the royal family ws going to be a 24/7 glamathon.",
        thumbnailUrl:
          "https://tse2.mm.bing.net/th?id=OVP.P-cnoIaNRba70NrR-yhgbAHgEO&pid=Api",
        datePublish:
          "https://tse2.mm.bing.net/th?id=OVP.P-cnoIaNRba70NrR-yhgbAHgEO&pid=Api",
        contentUrl:
          "https://www.msn.com/en-us/entertainment/entertainment-celebrity/meghan-duchess-of-sussex-slammed-by-late-queens-childhood-friend/vi-AA1iKHbS",
      },
      {
        name: "Meghan Markle & Prince Harry's Former Chief of Staff Speaks Out About Working for Them | PEOPLE",
        description:
          'Meghan Markle and Prince Harry\\\'s former chief of staff is opening up about her "incredible experience" working for the couple. Catherine St-Laurent — who worked for the Bill & Melinda Gates Foundation before working with Meghan and Prince Harry to steer the Archewell Foundation in early 2020 — told The Cut that she predicts the Duke and ...',
        thumbnailUrl:
          "https://tse3.mm.bing.net/th?id=OVP.s6Q9gt809xtW8nh7LjJcJwHgFo&pid=Api",
        datePublish:
          "https://tse3.mm.bing.net/th?id=OVP.s6Q9gt809xtW8nh7LjJcJwHgFo&pid=Api",
        contentUrl: "https://www.youtube.com/watch?v=lLKc-0Nk6RY",
      },
      {
        name: "Prince Harry speaks Irish in Dublin",
        description:
          "Prince Harry speaks Irish in Dublin as he and his new wife Meghan, Duchess of Sussex, embark on their first foreign trip as a married couple. Report by Sarah Duffy.",
        thumbnailUrl:
          "https://tse4.mm.bing.net/th?id=OVP.zeoQQiVP7CBsTIs-AqUQvgHgFo&pid=Api",
        datePublish:
          "https://tse4.mm.bing.net/th?id=OVP.zeoQQiVP7CBsTIs-AqUQvgHgFo&pid=Api",
        contentUrl: "https://www.youtube.com/watch?v=EZ5xH6IU-W8",
      },
      {
        name: "Meghan, Duchess of Sussex 'excited' about future Netflix projects: 'It’s really fun'",
        description:
          'Meghan, Duchess of Sussex, has teased she and Prince Harryhave a number of "exciting" projects in the pipeline for Netflix.',
        thumbnailUrl:
          "https://tse4.mm.bing.net/th?id=OVP.1hdPeFWnFSrZtzXH70vbUQHgEO&pid=Api",
        datePublish:
          "https://tse4.mm.bing.net/th?id=OVP.1hdPeFWnFSrZtzXH70vbUQHgEO&pid=Api",
        contentUrl:
          "https://www.yahoo.com/entertainment/meghan-duchess-sussex-excited-future-131135494.html",
      },
      {
        name: "Meghan, Duchess of Sussex, says friends told her not to marry Prince Harry",
        description:
          "The Duke and Duchess of Sussex speak to ITV about the pressure of living in the media's spotlight.",
        thumbnailUrl:
          "https://tse4.mm.bing.net/th?id=OVP.h3YaKGF9f1TQjGDoa364gQEsCo&pid=Api",
        datePublish:
          "https://tse4.mm.bing.net/th?id=OVP.h3YaKGF9f1TQjGDoa364gQEsCo&pid=Api",
        contentUrl: "https://www.bbc.co.uk/news/uk-50119219",
      },
      {
        name: "Prince Harry and Meghan, Duchess of Sussex, reportedly adopted Sussex title as children's surname",
        description:
          "The Duke and Duchess of Sussex, who relaunched their rebranded website, sussex.com, this week, reportedly want their children to be known as Prince Archie Sussex, four, and Princess Lilibet Sussex, two, instead of Mountbatten-Windsor. A source told The Times that the children have been known by the new monikers since Harry's father was crowned ...",
        thumbnailUrl:
          "https://tse1.mm.bing.net/th?id=OVP.SL3eBMzo8dHvhvymwlvCsAIIEk&pid=Api",
        datePublish:
          "https://tse1.mm.bing.net/th?id=OVP.SL3eBMzo8dHvhvymwlvCsAIIEk&pid=Api",
        contentUrl:
          "https://www.msn.com/en-gb/news/uknews/prince-harry-and-meghan-duchess-of-sussex-reportedly-adopted-sussex-title-as-children-s-surname/vi-BB1imVXX",
      },
      {
        name: "Meghan, Duchess of Sussex is said to have accused two \\xadpeople of raising “concerns” about her son Archie’s skin colour",
        description:
          "In an upcoming book about the royals by her friend Omid Scobie, Meghan, Duchess of Sussex is said to have accused two \\xadpeople of raising “concerns” about her son Archie’s skin colour.",
        thumbnailUrl:
          "https://tse4.mm.bing.net/th?id=OVP.iq-ddHw6TWYABfVktMl-RQIIFS&pid=Api",
        datePublish:
          "https://tse4.mm.bing.net/th?id=OVP.iq-ddHw6TWYABfVktMl-RQIIFS&pid=Api",
        contentUrl:
          "https://www.msn.com/en-us/video/news/meghan-duchess-of-sussex-is-said-to-have-accused-two-%C2%ADpeople-of-raising-%E2%80%9Cconcerns%E2%80%9D-about-her-son-archie%E2%80%99s-skin-colour/vi-AA1kuwGl",
      },
      {
        name: 'Meghan, Duchess of Sussex\\\'s father has sent "all the good wishes in the world" to King Charles',
        description:
          "Thomas Markle, the father of Meghan, Duchess of Sussex, has sent a message of support to King Charles following his cancer diagnosis.",
        thumbnailUrl:
          "https://tse1.mm.bing.net/th?id=OVP.0e1lbCZFKlTKdHnxIK0KKgJYGG&pid=Api",
        datePublish:
          "https://tse1.mm.bing.net/th?id=OVP.0e1lbCZFKlTKdHnxIK0KKgJYGG&pid=Api",
        contentUrl:
          "https://www.msn.com/en-us/video/peopleandplaces/meghan-duchess-of-sussex-s-father-has-sent-all-the-good-wishes-in-the-world-to-king-charles/vi-BB1hQGJN",
      },
      {
        name: "Meghan Markle: Duchess of Sussex gives first UK speech since LA move",
        description:
          "Meghan, the Duchess of Sussex, speaks at the One Young World 2022 summit in Manchester.",
        thumbnailUrl:
          "https://tse3.mm.bing.net/th?id=OVP.Vg9HDgffzsF8g2Oh4GLs0gEsCo&pid=Api",
        datePublish:
          "https://tse3.mm.bing.net/th?id=OVP.Vg9HDgffzsF8g2Oh4GLs0gEsCo&pid=Api",
        contentUrl:
          "https://www.msn.com/el-gr/news/other/meghan-markle-duchess-of-sussex-gives-first-uk-speech-since-la-move/vi-AA11vMWo",
      },
      {
        name: "Meghan, Duchess of Sussex praises own website rebrand",
        description:
          "She may not have spoken publicly to her fans about the digital rebrand she and Prince Harry embarked on this week, but Meghan did manage to pen an endorsement for the web designers and developers who created sussex.com. Digital branding agency Article posted a glowing testimonial from Meghan for their work on not only the new website and the ...",
        thumbnailUrl:
          "https://tse4.mm.bing.net/th?id=OVP.ZFrK1hl3wYlHecqgv3QIQAIIEk&pid=Api",
        datePublish:
          "https://tse4.mm.bing.net/th?id=OVP.ZFrK1hl3wYlHecqgv3QIQAIIEk&pid=Api",
        contentUrl:
          "https://www.msn.com/en-za/video/news/meghan-duchess-of-sussex-praises-own-website-rebrand/vi-BB1ijFCc",
      },
      {
        name: "When Joe Biden was a young senator at age 30",
        description:
          "ABC News' Bob Clark profiled Joe Biden in 1972, when he was just old enough to serve as a U.S. senator.",
        thumbnailUrl:
          "https://tse4.mm.bing.net/th?id=OVP.rEIWvvDRWKuTeAZHUnvc9AHgFo&pid=Api",
        datePublish:
          "https://tse4.mm.bing.net/th?id=OVP.rEIWvvDRWKuTeAZHUnvc9AHgFo&pid=Api",
        contentUrl: "https://www.youtube.com/watch?v=cCZ5_XwqchE",
      },
    ];
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
