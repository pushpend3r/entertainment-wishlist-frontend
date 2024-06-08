/*
1. non 404 error need to be show via `toastify`
2. 404 error need to handled
  2.1 once first 404 error comes trigger refresh token mutation to get new tokens
  2.2 if 404 error occurs from /LOGIN mutation then skip getting new tokens
  2.3 if refresh token also expired then fail all pending apis
3. successfully get the response from api
*/

vi.mock("react-toastify");

import * as rt from "react-toastify";
import apolloClient from "..";
import { GET_TRENDING } from "../../pages/Home/queries.graphql";

const SUCCESS_RESPONSE_GET_TRENDING_QUERY = {
  data: {
    trending: {
      movies: [
        {
          id: 786892,
          name: "Furiosa: A Mad Max Saga",
          overview:
            "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
          posterUrl: "https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
          releaseDate: "2024-05-22",
          __typename: "Movie",
        },
        {
          id: 940721,
          name: "Godzilla Minus One",
          overview:
            "In postwar Japan, Godzilla brings new devastation to an already scorched landscape. With no military intervention or government help in sight, the survivors must join together in the face of despair and fight back against an unrelenting horror.",
          posterUrl: "https://image.tmdb.org/t/p/w500/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
          releaseDate: "2023-11-03",
          __typename: "Movie",
        },
        {
          id: 614933,
          name: "Atlas",
          overview:
            "A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry.",
          posterUrl: "https://image.tmdb.org/t/p/w500/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
          releaseDate: "2024-05-23",
          __typename: "Movie",
        },
        {
          id: 929590,
          name: "Civil War",
          overview:
            "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
          posterUrl: "https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
          releaseDate: "2024-04-10",
          __typename: "Movie",
        },
        {
          id: 693134,
          name: "Dune: Part Two",
          overview:
            "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
          posterUrl: "https://image.tmdb.org/t/p/w500/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg",
          releaseDate: "2024-02-27",
          __typename: "Movie",
        },
        {
          id: 823464,
          name: "Godzilla x Kong: The New Empire",
          overview:
            "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
          posterUrl: "https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
          releaseDate: "2024-03-27",
          __typename: "Movie",
        },
        {
          id: 437342,
          name: "The First Omen",
          overview:
            "When a young American woman is sent to Rome to begin a life of service to the church, she encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.",
          posterUrl: "https://image.tmdb.org/t/p/w500/uGyiewQnDHPuiHN9V4k2t9QBPnh.jpg",
          releaseDate: "2024-04-03",
          __typename: "Movie",
        },
        {
          id: 746036,
          name: "The Fall Guy",
          overview:
            "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
          posterUrl: "https://image.tmdb.org/t/p/w500/tSz1qsmSJon0rqjHBxXZmrotuse.jpg",
          releaseDate: "2024-04-24",
          __typename: "Movie",
        },
        {
          id: 719221,
          name: "Tarot",
          overview:
            "When a group of friends recklessly violate the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.",
          posterUrl: "https://image.tmdb.org/t/p/w500/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
          releaseDate: "2024-05-01",
          __typename: "Movie",
        },
        {
          id: 937287,
          name: "Challengers",
          overview:
            'Tennis player turned coach Tashi has taken her husband, Art, and transformed him into a world-famous Grand Slam champion. To jolt him out of his recent losing streak, she signs him up for a "Challenger" event — close to the lowest level of pro tournament — where he finds himself standing across the net from his former best friend and Tashi\'s former boyfriend.',
          posterUrl: "https://image.tmdb.org/t/p/w500/H6vke7zGiuLsz4v4RPeReb9rsv.jpg",
          releaseDate: "2024-04-18",
          __typename: "Movie",
        },
        {
          id: 653346,
          name: "Kingdom of the Planet of the Apes",
          overview:
            "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
          posterUrl: "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
          releaseDate: "2024-05-08",
          __typename: "Movie",
        },
        {
          id: 882059,
          name: "Boy Kills World",
          overview:
            "When his family is murdered, a deaf-mute named Boy escapes to the jungle and is trained by a mysterious shaman to repress his childish imagination and become an instrument of death.",
          posterUrl: "https://image.tmdb.org/t/p/w500/25JskXmchcYwj3jHRmcPm738MpB.jpg",
          releaseDate: "2024-04-24",
          __typename: "Movie",
        },
        {
          id: 1111873,
          name: "Abigail",
          overview:
            "A group of criminals kidnaps a teenage ballet dancer, the daughter of a notorious gang leader, in order to obtain a ransom of $50 million, but over time, they discover that she is not just an ordinary girl. After the kidnappers begin to diminish, one by one, they discover, to their increasing horror, that they are locked inside with an unusual girl.",
          posterUrl: "https://image.tmdb.org/t/p/w500/5gKKSoD3iezjoL7YqZONjmyAiRA.jpg",
          releaseDate: "2024-04-18",
          __typename: "Movie",
        },
        {
          id: 967847,
          name: "Ghostbusters: Frozen Empire",
          overview:
            "When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age.",
          posterUrl: "https://image.tmdb.org/t/p/w500/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
          releaseDate: "2024-03-20",
          __typename: "Movie",
        },
        {
          id: 998846,
          name: "Back to Black",
          overview:
            "The extraordinary story of Amy Winehouse’s early rise to fame from her early days in Camden through the making of her groundbreaking album, Back to Black that catapulted Winehouse to global fame. Told through Amy’s eyes and inspired by her deeply personal lyrics, the film explores and embraces the many layers of the iconic artist and the tumultuous love story at the center of one of the most legendary albums of all time.",
          posterUrl: "https://image.tmdb.org/t/p/w500/xHQEeUT3Ac4fTY72UeNrI75xLtE.jpg",
          releaseDate: "2024-04-11",
          __typename: "Movie",
        },
        {
          id: 7451,
          name: "xXx",
          overview:
            'Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government "recruits" him to go on a mission, he\'s not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.',
          posterUrl: "https://image.tmdb.org/t/p/w500/xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg",
          releaseDate: "2002-08-09",
          __typename: "Movie",
        },
        {
          id: 573435,
          name: "Bad Boys: Ride or Die",
          overview:
            "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
          posterUrl: "https://image.tmdb.org/t/p/w500/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
          releaseDate: "2024-06-05",
          __typename: "Movie",
        },
        {
          id: 76341,
          name: "Mad Max: Fury Road",
          overview:
            "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
          posterUrl: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
          releaseDate: "2015-05-13",
          __typename: "Movie",
        },
        {
          id: 748783,
          name: "The Garfield Movie",
          overview:
            "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.",
          posterUrl: "https://image.tmdb.org/t/p/w500/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
          releaseDate: "2024-04-30",
          __typename: "Movie",
        },
        {
          id: 1022789,
          name: "Inside Out 2",
          overview:
            "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
          posterUrl: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
          releaseDate: "2024-06-12",
          __typename: "Movie",
        },
      ],
      tvshows: [
        {
          id: 95842,
          name: "Joy of Life",
          overview:
            "Zhang Qing, a present-day college student in culture and history major wants to study in professor Ye's postgraduate class, so he decides to write a historical fiction to elaborate his perspective of analyzing ancient literature history with modern concept. In the fiction, Zhang himself acts as a young man Fan Xian with mysterious life who lives in a remote seaside town of Kingdom Qing in his childhood, under the help of a mysterious mentor and a blindfolded watchman. Fan goes to the capital when he grows up, where he experiences plenty of ordeal and temper. Fan persists in adhering the rule of justice and goodness and lives his own glorious life.",
          posterUrl: "https://image.tmdb.org/t/p/w500/vlHJfLsduZiILN8eYdN57kHZTcQ.jpg",
          startAirDate: "2019-11-26",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 239770,
          name: "Doctor Who",
          overview:
            "The Doctor and his companion travel across time and space encountering incredible friends and foes.",
          posterUrl: "https://image.tmdb.org/t/p/w500/8FHthx4Vu81J4X5BTLhJYK9Gtbs.jpg",
          startAirDate: "2024-05-11",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 114479,
          name: "The Acolyte",
          overview:
            "An investigation into a shocking crime spree pits a respected Jedi Master against a dangerous warrior from his past. As more clues emerge, they travel down a dark path where sinister forces reveal all is not what it seems.",
          posterUrl: "https://image.tmdb.org/t/p/w500/mztdt3y6GBsJR69zHtszFezTCLT.jpg",
          startAirDate: "2024-06-04",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 217667,
          name: "Eric",
          overview:
            "A desperate father battles his demons on the vibrant, dangerous, and intoxicating streets of '80s New York in a race to bring home his missing son.",
          posterUrl: "https://image.tmdb.org/t/p/w500/9OV6McrRh1BAnrak3yVP9xYuUId.jpg",
          startAirDate: "2024-05-30",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 196322,
          name: "Dark Matter",
          overview:
            "Jason Dessen is abducted into an alternate version of his life. To get back to his true family, he embarks on a harrowing journey to save them from the most terrifying foe imaginable: himself.",
          posterUrl: "https://image.tmdb.org/t/p/w500/c6MRUtPk0nEPQ9FBD9RdRKt2rIm.jpg",
          startAirDate: "2024-05-07",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 57243,
          name: "Doctor Who",
          overview:
            "The Doctor is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel. The Doctor saves planets for a living—more of a hobby actually, and the Doctor's very, very good at it.",
          posterUrl: "https://image.tmdb.org/t/p/w500/4edFyasCrkH4MKs6H4mHqlrxA6b.jpg",
          startAirDate: "2005-03-26",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 37854,
          name: "One Piece",
          overview:
            'Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous "One Piece" behind. Whoever claims the "One Piece" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a "Devil Fruit," decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he\'s surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!',
          posterUrl: "https://image.tmdb.org/t/p/w500/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
          startAirDate: "1999-10-20",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 106379,
          name: "Fallout",
          overview:
            "The story of haves and have-nots in a world in which there’s almost nothing left to have. 200 years after the apocalypse, the gentle denizens of luxury fallout shelters are forced to return to the irradiated hellscape their ancestors left behind — and are shocked to discover an incredibly complex, gleefully weird, and highly violent universe waiting for them.",
          posterUrl: "https://image.tmdb.org/t/p/w500/AnsSKR9LuK0T9bAOcPVA3PUvyWj.jpg",
          startAirDate: "2024-04-10",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 91239,
          name: "Bridgerton",
          overview:
            "Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
          posterUrl: "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
          startAirDate: "2020-12-25",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 67198,
          name: "Star Trek: Discovery",
          overview:
            "Follow the voyages of Starfleet on their missions to discover new worlds and new life forms, and one Starfleet officer who must learn that to truly understand all things alien, you must first understand yourself.",
          posterUrl: "https://image.tmdb.org/t/p/w500/zh7GLsorxecv0D8d7QAVkQUe1ju.jpg",
          startAirDate: "2017-09-24",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 85937,
          name: "Demon Slayer: Kimetsu no Yaiba",
          overview:
            "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
          posterUrl: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
          startAirDate: "2019-04-06",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 1399,
          name: "Game of Thrones",
          overview:
            "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
          posterUrl: "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
          startAirDate: "2011-04-17",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 156484,
          name: "The 8 Show",
          overview:
            "Eight individuals trapped in a mysterious 8-story building participate in a tempting but dangerous show where they earn money as time passes.",
          posterUrl: "https://image.tmdb.org/t/p/w500/sXSF14MJyBL3nUshdiN9gnKqSFA.jpg",
          startAirDate: "2024-05-17",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 126308,
          name: "Shōgun",
          overview:
            "In Japan in the year 1600, at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village.",
          posterUrl: "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
          startAirDate: "2024-02-27",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 242876,
          name: "Raising Voices",
          overview:
            "When a 17-year-old reports a sexual assault at her high school, an investigation upends her life and tests her relationships.",
          posterUrl: "https://image.tmdb.org/t/p/w500/zPFuNgt97Cej8jjZjMtAbL65Dor.jpg",
          startAirDate: "2024-05-31",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 94997,
          name: "House of the Dragon",
          overview:
            "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
          posterUrl: "https://image.tmdb.org/t/p/w500/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg",
          startAirDate: "2022-08-21",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 76479,
          name: "The Boys",
          overview:
            "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
          posterUrl: "https://image.tmdb.org/t/p/w500/7Ns6tO3aYjppI5bFhyYZurOYGBT.jpg",
          startAirDate: "2019-07-25",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 252605,
          name: "Geek Girl",
          overview:
            "Awkward teen Harriet has always wanted to fit in. Until she gets scouted by a top London model agent and learns that some people are meant to stand out.",
          posterUrl: "https://image.tmdb.org/t/p/w500/g9v0yiDRpx6KQ3EGKDSAdFoNN0y.jpg",
          startAirDate: "2024-05-30",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 1429,
          name: "Attack on Titan",
          overview:
            "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
          posterUrl: "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
          startAirDate: "2013-04-07",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
        {
          id: 138502,
          name: "X-Men '97",
          overview:
            "The X-Men, a band of mutants who use their uncanny gifts to protect a world that hates and fears them, are challenged like never before, forced to face a dangerous and unexpected new future.",
          posterUrl: "https://image.tmdb.org/t/p/w500/2gxb0BtvqR9abbVgmF1SaW4j1bh.jpg",
          startAirDate: "2024-03-20",
          lastAirDate: null,
          inProduction: null,
          __typename: "TVShow",
        },
      ],
      __typename: "Trending",
    },
  },
};

const FAILED_RESPONSE_GET_TRENDING_QUERY = {
  errors: [
    {
      message: "some other error message",
      extensions: {
        code: "SOME_OTHER_ERROR_CODE",
      },
    },
  ],
};

global.fetch = vi.fn();

describe("apollo client", () => {
  test("successful api response", async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    vi.mocked(global.fetch).mockResolvedValue({
      text: () => Promise.resolve(JSON.stringify(SUCCESS_RESPONSE_GET_TRENDING_QUERY)),
    });
    const response = await apolloClient.mutate({
      mutation: GET_TRENDING,
    });
    expect(response).toEqual(SUCCESS_RESPONSE_GET_TRENDING_QUERY);
  });

  test("non 401 error need to be show messages via `toastify`", async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    vi.mocked(global.fetch).mockResolvedValue({
      status: 404, // any code will work expect 401
      text: () => Promise.resolve(JSON.stringify(FAILED_RESPONSE_GET_TRENDING_QUERY)),
    });

    try {
      await apolloClient.mutate({
        mutation: GET_TRENDING,
      });
    } catch (error) {
      // no need
    }
    const toastErrorFuncCalls = vi.mocked(rt.toast.error).mock.calls;
    const expectedErrorMessages = FAILED_RESPONSE_GET_TRENDING_QUERY.errors.map((item) => [item.message]);
    expect(toastErrorFuncCalls).toEqual(expectedErrorMessages);
  });
});
