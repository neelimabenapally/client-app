# Assignment 1 - ReactJS app.

Name: Neelima Benapally

## Overview.

Media-Fanpage app lists movies or series based on the user selection.

+ User can select a list of either Movies or Series.
+ Users are required to be authenticated to access the media-fanpage and get list of movies or series.
+ Users can sort the list based on popularity, rating or release year.
+ All the filtering and sorting of the lists are done through the URL.
+ Users can get a list of similar movies or series based on their selection.
+ Users get the details of cast also when getting the details about a movie or series
+ Profile Page of the User


## Setup requirements.

. . . . Briefly state (to a third party) the setup steps necessary to run your app/client. [You need only reference the server-side repo's URL for completeness - its README will detail server-side initialization requirements.]


## Data Model Design.

+ Get Series List : https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>&language=en-US&include_adult=false&page=1
+ Series Sample Response : {
  "page": 1,
  "total_results": 10000,
  "total_pages": 500,
  "results": [
    {
      "original_name": "The Flemish Bandits",
      "genre_ids": [
        18,
        9648,
        10759
      ],
      "name": "Thieves of the Wood",
      "popularity": 241.849,
      "origin_country": [
        "BE"
      ],
      "vote_count": 94,
      "first_air_date": "2020-01-02",
      "backdrop_path": "/gVVaukIifGJD78llZKgyT5FQbAe.jpg",
      "original_language": "nl",
      "id": 93533,
      "vote_average": 5.9,
      "overview": "Charismatic highwayman Jan de Lichte leads the oppressed and downtrodden in a revolt against the corrupt aristocracy of 18th-century Belgium.",
      "poster_path": "/jQNOzoiaIQWxJAx8OUighnvnhRA.jpg"
    },
    {
      "original_name": "Marvel's Iron Fist",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "name": "Marvel's Iron Fist",
      "popularity": 175.885,
      "origin_country": [
        "US"
      ],
      "vote_count": 984,
      "first_air_date": "2017-03-17",
      "backdrop_path": "/xHCfWGlxwbtMeeOnTvxUCZRGnkk.jpg",
      "original_language": "en",
      "id": 62127,
      "vote_average": 6.2,
      "overview": "Danny Rand resurfaces 15 years after being presumed dead. Now, with the power of the Iron Fist, he seeks to reclaim his past and fulfill his destiny.",
      "poster_path": "/4l6KD9HhtD6nCDEfg10Lp6C6zah.jpg"
    },
    {
      "original_name": "Law & Order: Special Victims Unit",
      "genre_ids": [
        80,
        18
      ],
      "name": "Law & Order: Special Victims Unit",
      "popularity": 151.649,
      "origin_country": [
        "US"
      ],
      "vote_count": 1013,
      "first_air_date": "1999-09-20",
      "backdrop_path": "/cD9PxbrdWYgL7MUpD9eOYuiSe2P.jpg",
      "original_language": "en",
      "id": 2734,
      "vote_average": 6.9,
      "overview": "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
      "poster_path": "/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg"
    },
    {
      "original_name": "The Flash",
      "genre_ids": [
        18,
        10765
      ],
      "name": "The Flash",
      "popularity": 139.861,
      "origin_country": [
        "US"
      ],
      "vote_count": 4149,
      "first_air_date": "2014-10-07",
      "backdrop_path": "/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg",
      "original_language": "en",
      "id": 60735,
      "vote_average": 7.2,
      "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
      "poster_path": "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
    },
    {
      "original_name": "The Last Kingdom",
      "genre_ids": [
        18,
        10759
      ],
      "name": "The Last Kingdom",
      "popularity": 126.435,
      "origin_country": [
        "GB"
      ],
      "vote_count": 410,
      "first_air_date": "2015-10-10",
      "backdrop_path": "/QbtctI8EzlhsyFDMUMyG3fli8B.jpg",
      "original_language": "en",
      "id": 63333,
      "vote_average": 7.9,
      "overview": "A show of heroic deeds and epic battles with a thematic depth that embraces politics, religion, warfare, courage, love, loyalty and our universal search for identity. Combining real historical figures and events with fictional characters, it is the story of how a people combined their strength under one of the most iconic kings of history in order to reclaim their land for themselves and build a place they call home.",
      "poster_path": "/wUFIEJCSmurmXPX0mP0cEgoltrk.jpg"
    },
    {
      "original_name": "外星女生柴小七",
      "genre_ids": [
        35,
        10765
      ],
      "name": "My Girlfriend is an Alien",
      "popularity": 122.232,
      "origin_country": [
        "CN"
      ],
      "vote_count": 9,
      "first_air_date": "2019-08-19",
      "backdrop_path": "/kCl7piWv3pypgYfyLFi7ZgFGlYV.jpg",
      "original_language": "zh",
      "id": 92779,
      "vote_average": 7.8,
      "overview": "The alien girl Chai Xiaoqi tells the story of Fang Xiaoqi, the overbearing president of the alien girl who died from the \"Cape Town Planet\", who was suffering from the \"rainy weather heterosexual amnesia\". A high-energy hilarious and romantic cross-star love story. The female host Chai Xiaoqi is not only an alien, but also a true-handed witch. Once she inhales the hormones emitted by the males in the earth, she will fall into the \"flowery state\" and suffer from various diseases. The fun and ridiculously ridiculous romance will restore the singularity of the girl in the perfection of the girl. In order to survive on the human earth, Chai Xiaoqi will use his various super powers to solve one accident after another, like a roller coaster. The ups and downs will make the audience hooked. The male lord is cold and is an alternative overbearing president. When it rains, he will forget the opposite sex that appears around him. For this reason, he and the female host will launch various \"fighting and fighting\" laughter dramas. The experience of high sweetness and romance is expected to be Strongly slammed the girl's heart when it was broadcast.",
      "poster_path": "/5e2owvs9TWVsuIacTFxJGPp6KVW.jpg"
    },
    {
      "original_name": "Westworld",
      "genre_ids": [
        878,
        37
      ],
      "name": "Westworld",
      "popularity": 120.943,
      "origin_country": [
        "US"
      ],
      "vote_count": 2493,
      "first_air_date": "2016-10-02",
      "backdrop_path": "/yGNnjoIGOdQy3douq60tULY8teK.jpg",
      "original_language": "en",
      "id": 63247,
      "vote_average": 8.2,
      "overview": "A dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past, it explores a world in which every human appetite, no matter how noble or depraved, can be indulged.",
      "poster_path": "/y55oBgf6bVMI7sFNXwJDrSIxPQt.jpg"
    },
    {
      "original_name": "La casa de papel",
      "genre_ids": [
        80,
        18
      ],
      "name": "Money Heist",
      "popularity": 106.216,
      "origin_country": [
        "ES"
      ],
      "vote_count": 5567,
      "first_air_date": "2017-05-02",
      "backdrop_path": "/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg",
      "original_language": "es",
      "id": 71446,
      "vote_average": 8.4,
      "overview": "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",
      "poster_path": "/MoEKaPFHABtA1xKoOteirGaHl1.jpg"
    },
    {
      "original_name": "刀語",
      "id": 46374,
      "name": "Katanagatari",
      "popularity": 98.357,
      "vote_count": 12,
      "vote_average": 8.4,
      "first_air_date": "2010-01-25",
      "poster_path": "/jk11mCSE5sNlfuN4DHsSvRYMc8M.jpg",
      "genre_ids": [
        10759,
        16,
        18
      ],
      "original_language": "ja",
      "backdrop_path": "/aWy7haQdhl3iZNEnrUVPZBzHKh9.jpg",
      "overview": "The historical epic centers on Shichika Yasuri, the seventh generational head of the Kyotō-ryū school of martial arts in medieval Japan. He and his older sister Nanami live on an isolated island, until a military advisor named Togame tells him of the final 12 swords forged by a legendary swordsmith. At Togame's bidding, Shichika embarks on a journey to find all 12 of the swords.",
      "origin_country": [
        "JP"
      ]
    },
    {
      "original_name": "Riverdale",
      "genre_ids": [
        18,
        9648
      ],
      "name": "Riverdale",
      "popularity": 97.059,
      "origin_country": [
        "US"
      ],
      "vote_count": 2005,
      "first_air_date": "2017-01-26",
      "backdrop_path": "/9hvhGtcsGhQY58pukw8w55UEUbL.jpg",
      "original_language": "en",
      "id": 69050,
      "vote_average": 8.3,
      "overview": "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
      "poster_path": "/4X7o1ssOEvp4BFLim1AZmPNcYbU.jpg"
    },
    {
      "original_name": "The Simpsons",
      "genre_ids": [
        16,
        35
      ],
      "name": "The Simpsons",
      "popularity": 91.96,
      "origin_country": [
        "US"
      ],
      "vote_count": 3108,
      "first_air_date": "1989-12-17",
      "backdrop_path": "/5zS9trn5k6T6Oew85ZIEKUfRo91.jpg",
      "original_language": "en",
      "id": 456,
      "vote_average": 7.4,
      "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
      "poster_path": "/qcr9bBY6MVeLzriKCmJOv1562uY.jpg"
    },
    {
      "original_name": "Supernatural",
      "genre_ids": [
        18,
        9648,
        10765
      ],
      "name": "Supernatural",
      "popularity": 85.716,
      "origin_country": [
        "US"
      ],
      "vote_count": 2731,
      "first_air_date": "2005-09-13",
      "backdrop_path": "/nVRyd8hlg0ZLxBn9RaI7mUMQLnz.jpg",
      "original_language": "en",
      "id": 1622,
      "vote_average": 7.7,
      "overview": "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
      "poster_path": "/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg"
    },
    {
      "original_name": "Breaking Bad",
      "genre_ids": [
        18
      ],
      "name": "Breaking Bad",
      "popularity": 84.004,
      "origin_country": [
        "US"
      ],
      "vote_count": 4370,
      "first_air_date": "2008-01-20",
      "backdrop_path": "/wKHImjeHwVIiWJWFIJtWUKkA5QJ.jpg",
      "original_language": "en",
      "id": 1396,
      "vote_average": 8.5,
      "overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
      "poster_path": "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
    },
    {
      "original_name": "ドラゴンボール",
      "genre_ids": [
        16,
        35,
        10759,
        10765
      ],
      "name": "Dragon Ball",
      "popularity": 83.479,
      "origin_country": [
        "JP"
      ],
      "vote_count": 706,
      "first_air_date": "1986-02-26",
      "backdrop_path": "/yXggMemopUDHwPgmi6X9Wh2BQra.jpg",
      "original_language": "ja",
      "id": 12609,
      "vote_average": 7.6,
      "overview": "Long ago in the mountains, a fighting master known as Gohan discovered a strange boy whom he named Goku. Gohan raised him and trained Goku in martial arts until he died. The young and very strong boy was on his own, but easily managed. Then one day, Goku met a teenage girl named Bulma, whose search for the mystical Dragon Balls brought her to Goku's home. Together, they set off to find all seven and to grant her wish.",
      "poster_path": "/v05IZAksQFpVumfw1fwpfcqXidA.jpg"
    },
    {
      "original_name": "Waco",
      "genre_ids": [
        18
      ],
      "name": "Waco",
      "popularity": 82.924,
      "origin_country": [
        "US"
      ],
      "vote_count": 67,
      "first_air_date": "2018-01-24",
      "backdrop_path": "/48wAayV7X6XKvkM5cgTTmwYV81N.jpg",
      "original_language": "en",
      "id": 74140,
      "vote_average": 7.9,
      "overview": "The harrowing true story of the 1993 standoff between the FBI, ATF and the Branch Davidians, a spiritual sect led by David Koresh in Waco, TX that resulted in a deadly shootout and fire.",
      "poster_path": "/14q24aBfJPrjumuWjKKA6Bwml2A.jpg"
    },
    {
      "original_name": "Vis a vis",
      "genre_ids": [
        18
      ],
      "name": "Locked Up",
      "popularity": 81.278,
      "origin_country": [
        "ES"
      ],
      "vote_count": 542,
      "first_air_date": "2015-04-20",
      "backdrop_path": "/ck4WJ3dLXzUd3cNgujxuuk0QvlW.jpg",
      "original_language": "es",
      "id": 62455,
      "vote_average": 8,
      "overview": "Set up to take the blame for corporate fraud, young Macarena Ferreiro is locked up in a high-security women's prison surrounded by tough, ruthless criminals in this tense, provocative Spanish thriller.",
      "poster_path": "/7mfPWKrNInkTbjVwp0EkaFYRHqD.jpg"
    },
    {
      "original_name": "NCIS",
      "genre_ids": [
        80,
        18,
        10759
      ],
      "name": "NCIS",
      "popularity": 80.897,
      "origin_country": [
        "US"
      ],
      "vote_count": 999,
      "first_air_date": "2003-09-23",
      "backdrop_path": "/4VuCtYBvZGq6Rk3gloigwlsTefE.jpg",
      "original_language": "en",
      "id": 4614,
      "vote_average": 7,
      "overview": "From murder and espionage to terrorism and stolen submarines, a team of special agents investigates any crime that has a shred of evidence connected to Navy and Marine Corps personnel, regardless of rank or position.",
      "poster_path": "/fi8EvaWtL5CvoielOjjVvTr7ux3.jpg"
    },
    {
      "original_name": "The Blacklist",
      "genre_ids": [
        80,
        18,
        9648
      ],
      "name": "The Blacklist",
      "popularity": 78.737,
      "origin_country": [
        "US"
      ],
      "vote_count": 1295,
      "first_air_date": "2013-09-23",
      "backdrop_path": "/8YWQ1JrA4fihMwf9kYvGtd6mSe0.jpg",
      "original_language": "en",
      "id": 46952,
      "vote_average": 7,
      "overview": "Raymond \"Red\" Reddington, one of the FBI's most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he's made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this \"The Blacklist\". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler.",
      "poster_path": "/bgbQCW4fE9b6wSOSC6Fb4FfVzsW.jpg"
    },
    {
      "original_name": "The Walking Dead",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "name": "The Walking Dead",
      "popularity": 77.797,
      "origin_country": [
        "US"
      ],
      "vote_count": 5680,
      "first_air_date": "2010-10-31",
      "backdrop_path": "/wXXaPMgrv96NkH8KD1TMdS2d7iq.jpg",
      "original_language": "en",
      "id": 1402,
      "vote_average": 7.6,
      "overview": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
      "poster_path": "/5l10EjdgPxu8Gbl5Ww6SWkVQH6T.jpg"
    },
    {
      "original_name": "Game of Thrones",
      "genre_ids": [
        18,
        10765
      ],
      "name": "Game of Thrones",
      "popularity": 75.148,
      "origin_country": [
        "US"
      ],
      "vote_count": 7941,
      "first_air_date": "2011-04-17",
      "backdrop_path": "/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
      "original_language": "en",
      "id": 1399,
      "vote_average": 8.2,
      "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
      "poster_path": "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
    }
  ]
}

+ Get Movie Cast : https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
+ Cast Sample Response : {
  "id": 419704,
  "cast": [
    {
      "cast_id": 271,
      "character": "Roy McBride",
      "credit_id": "5e93b22dd55e4d001a19f94a",
      "gender": 2,
      "id": 287,
      "name": "Brad Pitt",
      "order": 1,
      "profile_path": "/tJiSUYst4ddIaz1zge2LqCtu9tw.jpg"
    },
    {
      "cast_id": 272,
      "character": "H. Clifford McBride",
      "credit_id": "5e93b248875d1a001944ef1d",
      "gender": 2,
      "id": 2176,
      "name": "Tommy Lee Jones",
      "order": 2,
      "profile_path": "/rdKKuq8zWCDYlKSxIfwGo2RUjpN.jpg"
    },
    {
      "cast_id": 273,
      "character": "Helen Lantos",
      "credit_id": "5e93b2afd55e4d001a19fa27",
      "gender": 1,
      "id": 17018,
      "name": "Ruth Negga",
      "order": 3,
      "profile_path": "/aL4nmTVtQU2uQDNdBCarTy413CZ.jpg"
    },
    {
      "cast_id": 274,
      "character": "Lieutenant General Rivas",
      "credit_id": "5e93b30c54508d001a177e3a",
      "gender": 2,
      "id": 40543,
      "name": "John Ortiz",
      "order": 4,
      "profile_path": "/o2SOFI53N6Gv5S3fDEBNbeimbzY.jpg"
    },
    {
      "cast_id": 275,
      "character": "Eve",
      "credit_id": "5e93b31f54508d001517734e",
      "gender": 1,
      "id": 882,
      "name": "Liv Tyler",
      "order": 5,
      "profile_path": "/jrOj6t9pH8TqO65pnsRuvRNhwqx.jpg"
    },
    {
      "cast_id": 276,
      "character": "Thomas Pruitt",
      "credit_id": "5e93b33154508d001a177e6a",
      "gender": 2,
      "id": 55636,
      "name": "Donald Sutherland",
      "order": 6,
      "profile_path": "/pvk7fjJNg9kZQTeuG6ZlfJ8t2Ze.jpg"
    },
    {
      "cast_id": 277,
      "character": "Chip Garnes",
      "credit_id": "5e93b52184448e001a90f074",
      "gender": 2,
      "id": 231,
      "name": "Greg Bryk",
      "order": 7,
      "profile_path": "/1I3SxKFvQSam6KOMT4j5f0nFxRg.jpg"
    },
    {
      "cast_id": 278,
      "character": "Donald Stanford",
      "credit_id": "5e93b531cedac4001bebaead",
      "gender": 2,
      "id": 11628,
      "name": "Loren Dean",
      "order": 8,
      "profile_path": "/zCYDwYJjrY4lpeueZYSzAXKLD5h.jpg"
    },
    {
      "cast_id": 279,
      "character": "Lorraine Deavers",
      "credit_id": "5e93b5428e87020014cd5d03",
      "gender": 1,
      "id": 55314,
      "name": "Kimberly Elise",
      "order": 9,
      "profile_path": "/pAYWZdsWYrGc9lvMCivUU7STSWf.jpg"
    },
    {
      "cast_id": 280,
      "character": "Brigadier General Stroud",
      "credit_id": "5e93b570ccb15f00136fe748",
      "gender": 2,
      "id": 9277,
      "name": "John Finn",
      "order": 10,
      "profile_path": "/caCHMsqfpfEcK1tUlkLWV9KkEbS.jpg"
    },
    {
      "cast_id": 281,
      "character": "Adjutant General Vogel",
      "credit_id": "5e93b58584448e001a90f131",
      "gender": 1,
      "id": 64908,
      "name": "LisaGay Hamilton",
      "order": 11,
      "profile_path": "/bqfowff4gF0cGaQ1c7F89HAL3DH.jpg"
    },
    {
      "cast_id": 282,
      "character": "Captain Lawrence Tanner",
      "credit_id": "5e93b5da8e87020013cd3fb1",
      "gender": 2,
      "id": 83223,
      "name": "Donnie Keshawarz",
      "order": 12,
      "profile_path": null
    },
    {
      "cast_id": 283,
      "character": "Franklin Yoshida",
      "credit_id": "5e93b5eb54508d001a17813f",
      "gender": 2,
      "id": 1545016,
      "name": "Bobby Nish",
      "order": 13,
      "profile_path": "/fuJyCgr9iZwFT5fEXuf0s4noCRg.jpg"
    },
    {
      "cast_id": 284,
      "character": "Willie Levant",
      "credit_id": "5e93b601d55e4d00151a24ee",
      "gender": 2,
      "id": 62093,
      "name": "Sean Blakemore",
      "order": 14,
      "profile_path": null
    },
    {
      "cast_id": 285,
      "character": "Captain Lu",
      "credit_id": "5e93b6128e87020016ccf1fa",
      "gender": 1,
      "id": 51754,
      "name": "Freda Foh Shen",
      "order": 15,
      "profile_path": null
    },
    {
      "cast_id": 286,
      "character": "Female Flight Attendant",
      "credit_id": "5e93b642ccb15f00156fc88a",
      "gender": 1,
      "id": 1518164,
      "name": "Kayla Adams",
      "order": 16,
      "profile_path": "/7nB3pQYuyC64Mv5XmjllOb0LJlf.jpg"
    },
    {
      "cast_id": 287,
      "character": "Arjun Dhariwal",
      "credit_id": "5e93b65f8e87020013cd406d",
      "gender": 0,
      "id": 1041408,
      "name": "Ravi Kapoor",
      "order": 17,
      "profile_path": null
    },
    {
      "cast_id": 288,
      "character": "Woman in White Pants-Shirt",
      "credit_id": "5e93b6752cde980014c4b306",
      "gender": 0,
      "id": 1754778,
      "name": "Elisa Perry",
      "order": 18,
      "profile_path": "/xAYRz1DHEikObddnCFEKFiQppu3.jpg"
    },
    {
      "cast_id": 289,
      "character": "Sal",
      "credit_id": "5e93b68f875d1a001244dee3",
      "gender": 2,
      "id": 101165,
      "name": "Daniel Sauli",
      "order": 19,
      "profile_path": "/bl3dSCbXTdnKwQpvT3jEKcYUUmh.jpg"
    },
    {
      "cast_id": 290,
      "character": "Sergeant Romano",
      "credit_id": "5e93b69c84448e001a90f195",
      "gender": 1,
      "id": 1497921,
      "name": "Kimmy Shields",
      "order": 20,
      "profile_path": "/gXYQ7h22Q0FCx9T2XZDbXWm7gQQ.jpg"
    },
    {
      "cast_id": 291,
      "character": "Technician One",
      "credit_id": "5e93b6ab875d1a001444b963",
      "gender": 2,
      "id": 2422160,
      "name": "Kunal Dudheker",
      "order": 21,
      "profile_path": "/uwRGVuRsAUYfb0dMKnQC6GrlxtP.jpg"
    },
    {
      "cast_id": 292,
      "character": "Janice Collins",
      "credit_id": "5e93b6fad55e4d00131a3a56",
      "gender": 1,
      "id": 19262,
      "name": "Alyson Reed",
      "order": 22,
      "profile_path": "/iSWg3DSnsc0FVWJsDR3eNjkAlqw.jpg"
    },
    {
      "cast_id": 293,
      "character": "Female Team Member",
      "credit_id": "5e93b70a2cde980014c4b544",
      "gender": 0,
      "id": 1350927,
      "name": "Sasha Compère",
      "order": 23,
      "profile_path": null
    },
    {
      "cast_id": 294,
      "character": "Male Team Member",
      "credit_id": "5e93b715875d1a001444ba35",
      "gender": 0,
      "id": 1446014,
      "name": "Justin Dray",
      "order": 24,
      "profile_path": null
    },
    {
      "cast_id": 295,
      "character": "Woman on Screen",
      "credit_id": "5e93b780875d1a001444bb69",
      "gender": 1,
      "id": 2422163,
      "name": "Alexandria Rousset",
      "order": 25,
      "profile_path": "/f2sirEuqhAvV6FT5LUb3mqJHW6T.jpg"
    },
    {
      "cast_id": 296,
      "character": "Tanya Pincus",
      "credit_id": "5e93b7b6d55e4d00151a293b",
      "gender": 1,
      "id": 10871,
      "name": "Natasha Lyonne",
      "order": 26,
      "profile_path": "/Abtdt76k3oAmag6Femlic4A3zR6.jpg"
    },
    {
      "cast_id": 297,
      "character": "Spacecom Employee",
      "credit_id": "5e93b7c6ccb15f061c6f181a",
      "gender": 0,
      "id": 2422164,
      "name": "Zoro Saro Manuel Daghlian",
      "order": 27,
      "profile_path": null
    },
    {
      "cast_id": 298,
      "character": "Young Roy",
      "credit_id": "5e93b7d52cde980014c4b797",
      "gender": 2,
      "id": 2422165,
      "name": "Jacob Sandler",
      "order": 28,
      "profile_path": "/zlayN5U2MyE2li7goSTvX9iKnjw.jpg"
    },
    {
      "cast_id": 299,
      "character": "Cepheus (voice)",
      "credit_id": "5e93b7e3ccb15f00136ff3e8",
      "gender": 1,
      "id": 1662346,
      "name": "Elizabeth Willaman",
      "order": 29,
      "profile_path": null
    }
  ],
  "crew": [
    {
      "credit_id": "5a94d2699251413261001e84",
      "department": "Production",
      "gender": 2,
      "id": 287,
      "job": "Producer",
      "name": "Brad Pitt",
      "profile_path": "/tJiSUYst4ddIaz1zge2LqCtu9tw.jpg"
    },
    {
      "credit_id": "5df0839f6a34480014c762d1",
      "department": "Production",
      "gender": 2,
      "id": 376,
      "job": "Producer",
      "name": "Arnon Milchan",
      "profile_path": "/b2hBExX4NnczNAnLuTBF4kmNhZm.jpg"
    },
    {
      "credit_id": "5d86778b336e010029153d70",
      "department": "Sound",
      "gender": 2,
      "id": 2216,
      "job": "Sound Designer",
      "name": "Gary Rydstrom",
      "profile_path": null
    },
    {
      "credit_id": "5d8677825a469000299b01ad",
      "department": "Sound",
      "gender": 2,
      "id": 2216,
      "job": "Supervising Sound Editor",
      "name": "Gary Rydstrom",
      "profile_path": null
    },
    {
      "credit_id": "5d867793172d7f001f475bc7",
      "department": "Sound",
      "gender": 2,
      "id": 2216,
      "job": "Sound Re-Recording Mixer",
      "name": "Gary Rydstrom",
      "profile_path": null
    },
    {
      "credit_id": "5df08929eda4b700180428f1",
      "department": "Editing",
      "gender": 0,
      "id": 3190,
      "job": "Consulting Editor",
      "name": "Hank Corwin",
      "profile_path": null
    },
    {
      "credit_id": "5d8677b5e78e2d0021752ce2",
      "department": "Sound",
      "gender": 2,
      "id": 3996,
      "job": "Sound Re-Recording Mixer",
      "name": "Tom Johnson",
      "profile_path": null
    },
    {
      "credit_id": "5a94d2e1c3a36811fb002149",
      "department": "Production",
      "gender": 2,
      "id": 5669,
      "job": "Casting",
      "name": "Douglas Aibel",
      "profile_path": null
    },
    {
      "credit_id": "5df08c5e1dbc880014ac828c",
      "department": "Art",
      "gender": 1,
      "id": 6922,
      "job": "Supervising Art Director",
      "name": "Christa Munro",
      "profile_path": null
    },
    {
      "credit_id": "5a94d2f7925141326a001f1d",
      "department": "Art",
      "gender": 0,
      "id": 20585,
      "job": "Set Decoration",
      "name": "Karen O'Hara",
      "profile_path": null
    },
    {
      "credit_id": "5df08f2bdc86470019c8cf17",
      "department": "Crew",
      "gender": 2,
      "id": 8684,
      "job": "Stunt Coordinator",
      "name": "Dan Bradley",
      "profile_path": null
    },
    {
      "credit_id": "5df08f21ce4ddc001862f9e2",
      "department": "Directing",
      "gender": 2,
      "id": 8684,
      "job": "Second Unit Director",
      "name": "Dan Bradley",
      "profile_path": null
    },
    {
      "credit_id": "5df086ec6a34480014c76867",
      "department": "Costume & Make-Up",
      "gender": 2,
      "id": 8885,
      "job": "Costume Designer",
      "name": "Albert Wolsky",
      "profile_path": null
    },
    {
      "credit_id": "5e40363f6dea3a001344d13c",
      "department": "Sound",
      "gender": 0,
      "id": 15225,
      "job": "Music Editor",
      "name": "Darrell Hall",
      "profile_path": null
    },
    {
      "credit_id": "5d4de5dd0d5d8500143d6b66",
      "department": "Art",
      "gender": 2,
      "id": 16467,
      "job": "Art Direction",
      "name": "Kevin Constant",
      "profile_path": null
    },
    {
      "credit_id": "5bcbb8ce925141559e006c05",
      "department": "Production",
      "gender": 1,
      "id": 20458,
      "job": "Producer",
      "name": "Dede Gardner",
      "profile_path": "/miYzjRkwcHWI8h1CPODj3bW6Q7W.jpg"
    },
    {
      "credit_id": "57f62a3692514136100055d9",
      "department": "Writing",
      "gender": 2,
      "id": 20561,
      "job": "Screenplay",
      "name": "James Gray",
      "profile_path": "/6oRlizIlhI2exF3OEGvtB6M7KmZ.jpg"
    },
    {
      "credit_id": "5e925556ca4f6700147f4d42",
      "department": "Directing",
      "gender": 2,
      "id": 20561,
      "job": "Director",
      "name": "James Gray",
      "profile_path": "/6oRlizIlhI2exF3OEGvtB6M7KmZ.jpg"
    },
    {
      "credit_id": "5a94d2a60e0a26087800233d",
      "department": "Production",
      "gender": 2,
      "id": 20561,
      "job": "Producer",
      "name": "James Gray",
      "profile_path": "/6oRlizIlhI2exF3OEGvtB6M7KmZ.jpg"
    },
    {
      "credit_id": "5a94d2b29251413276001e6e",
      "department": "Production",
      "gender": 2,
      "id": 20567,
      "job": "Executive Producer",
      "name": "Marc Butan",
      "profile_path": null
    },
    {
      "credit_id": "5a94d2cd0e0a26086f001ef7",
      "department": "Editing",
      "gender": 2,
      "id": 20568,
      "job": "Editor",
      "name": "John Axelrad",
      "profile_path": null
    },
    {
      "credit_id": "5d4de5977c6de30012a4faf2",
      "department": "Production",
      "gender": 0,
      "id": 22498,
      "job": "Executive Producer",
      "name": "Michael Schaefer",
      "profile_path": null
    },
    {
      "credit_id": "5e384bd1ac8e6b0011c74785",
      "department": "Art",
      "gender": 0,
      "id": 42281,
      "job": "Set Designer",
      "name": "Scott Herbertson",
      "profile_path": null
    },
    {
      "credit_id": "5a94d2ed925141326f001f8c",
      "department": "Art",
      "gender": 2,
      "id": 19755,
      "job": "Production Design",
      "name": "Kevin Thompson",
      "profile_path": null
    },
    {
      "credit_id": "5df0867f0257640014586629",
      "department": "Sound",
      "gender": 2,
      "id": 52161,
      "job": "Music Supervisor",
      "name": "Randall Poster",
      "profile_path": null
    },
    {
      "credit_id": "5c6b83fa92514120d5ffcf31",
      "department": "Sound",
      "gender": 2,
      "id": 46266,
      "job": "Original Music Composer",
      "name": "Max Richter",
      "profile_path": "/keYPSx2YlyRCk8KY7YaZ81fZ1Y3.jpg"
    },
    {
      "credit_id": "5bcbb8dfc3a368238c007d07",
      "department": "Production",
      "gender": 2,
      "id": 60187,
      "job": "Producer",
      "name": "Anthony Katagas",
      "profile_path": null
    },
    {
      "credit_id": "5df08810025764001458673c",
      "department": "Production",
      "gender": 2,
      "id": 60187,
      "job": "Unit Production Manager",
      "name": "Anthony Katagas",
      "profile_path": null
    },
    {
      "credit_id": "5d4de5a7839d930013abda60",
      "department": "Production",
      "gender": 2,
      "id": 71067,
      "job": "Executive Producer",
      "name": "Yu Dong",
      "profile_path": null
    },
    {
      "credit_id": "5bcbba300e0a2627be007961",
      "department": "Camera",
      "gender": 2,
      "id": 74401,
      "job": "Director of Photography",
      "name": "Hoyte van Hoytema",
      "profile_path": null
    },
    {
      "credit_id": "5df08d31dc86470011c8cfe3",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 75081,
      "job": "Makeup Department Head",
      "name": "Nana Fischer",
      "profile_path": null
    },
    {
      "credit_id": "5df08d22ce4ddc00136320f8",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 75081,
      "job": "Makeup & Hair",
      "name": "Nana Fischer",
      "profile_path": null
    },
    {
      "credit_id": "5e36fa156beaea0013910785",
      "department": "Production",
      "gender": 2,
      "id": 184314,
      "job": "ADR Voice Casting",
      "name": "Mark Sussman",
      "profile_path": null
    },
    {
      "credit_id": "5d4de51b7c6de30014a4f7e0",
      "department": "Production",
      "gender": 0,
      "id": 592565,
      "job": "Executive Producer",
      "name": "Jeffrey Chan",
      "profile_path": null
    },
    {
      "credit_id": "5df086c31dbc880016acb3ef",
      "department": "Crew",
      "gender": 2,
      "id": 929145,
      "job": "Additional Music",
      "name": "Lorne Balfe",
      "profile_path": "/6PzSv56I9mRe7QKuAsGU9JjlIu2.jpg"
    },
    {
      "credit_id": "5bcbb8ebc3a36823a1008679",
      "department": "Production",
      "gender": 2,
      "id": 967387,
      "job": "Producer",
      "name": "Jeremy Kleiner",
      "profile_path": null
    },
    {
      "credit_id": "5c6c341a92514120d50171f2",
      "department": "Visual Effects",
      "gender": 0,
      "id": 999812,
      "job": "Visual Effects Supervisor",
      "name": "Bradley Parker",
      "profile_path": null
    },
    {
      "credit_id": "5e384bad43250f0015c4681f",
      "department": "Art",
      "gender": 1,
      "id": 1047108,
      "job": "Set Designer",
      "name": "Sarah Contant",
      "profile_path": null
    },
    {
      "credit_id": "5e384c384ca676001754d333",
      "department": "Art",
      "gender": 0,
      "id": 1068056,
      "job": "Set Designer",
      "name": "Easton Michael Smith",
      "profile_path": null
    },
    {
      "credit_id": "5df08bbfc5c1ef0013a175fc",
      "department": "Crew",
      "gender": 0,
      "id": 1080216,
      "job": "Stunt Coordinator",
      "name": "Samuel Le",
      "profile_path": null
    },
    {
      "credit_id": "5e4035e43dd126001853e0f3",
      "department": "Sound",
      "gender": 2,
      "id": 1087512,
      "job": "Music Editor",
      "name": "Richard Ziegler",
      "profile_path": null
    },
    {
      "credit_id": "5df08eef1dbc880016acbf49",
      "department": "Camera",
      "gender": 0,
      "id": 1177850,
      "job": "Still Photographer",
      "name": "François Duhamel",
      "profile_path": "/3N3pFKYflQxxo3b0aRXh8adwVIU.jpg"
    },
    {
      "credit_id": "5df08693ce4ddc0013631756",
      "department": "Sound",
      "gender": 2,
      "id": 1192700,
      "job": "Music Supervisor",
      "name": "George Drakoulias",
      "profile_path": null
    },
    {
      "credit_id": "5e4037979603310017ed83b0",
      "department": "Production",
      "gender": 1,
      "id": 1267580,
      "job": "Production Accountant",
      "name": "Vicki L. Sawyer",
      "profile_path": null
    },
    {
      "credit_id": "5e399b3dac8e6b0011c8a970",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1278791,
      "job": "Animation Supervisor",
      "name": "Chris Stenner",
      "profile_path": null
    },
    {
      "credit_id": "5bcbb969c3a3682396007772",
      "department": "Production",
      "gender": 2,
      "id": 1300796,
      "job": "Producer",
      "name": "Rodrigo Teixeira",
      "profile_path": "/jCI3zbBuNV6aaR8KxLvYniNS8rg.jpg"
    },
    {
      "credit_id": "5e3458ff98f1f1001802b359",
      "department": "Camera",
      "gender": 1,
      "id": 1324652,
      "job": "Still Photographer",
      "name": "Melinda Sue Gordon",
      "profile_path": null
    },
    {
      "credit_id": "5e36f4d1ac8e6b0011c5a441",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 1324828,
      "job": "Key Makeup Artist",
      "name": "Galaxy San Juan",
      "profile_path": null
    },
    {
      "credit_id": "5e384bfd0c271000157370cf",
      "department": "Art",
      "gender": 0,
      "id": 1339444,
      "job": "Set Designer",
      "name": "Anne Porter",
      "profile_path": null
    },
    {
      "credit_id": "5e36fb3198f1f10014050a18",
      "department": "Art",
      "gender": 2,
      "id": 1339445,
      "job": "Construction Coordinator",
      "name": "Chris Snyder",
      "profile_path": null
    },
    {
      "credit_id": "5df08f490257640018580116",
      "department": "Camera",
      "gender": 2,
      "id": 1347763,
      "job": "Second Unit Director of Photography",
      "name": "Chris Moseley",
      "profile_path": null
    },
    {
      "credit_id": "5d4de634839d930015abdfee",
      "department": "Art",
      "gender": 0,
      "id": 1350459,
      "job": "Art Direction",
      "name": "Gary Warshaw",
      "profile_path": null
    },
    {
      "credit_id": "5df08dd40257640014586d45",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1357062,
      "job": "Special Effects Supervisor",
      "name": "Scott R. Fisher",
      "profile_path": null
    },
    {
      "credit_id": "5e384bbea7e3630013e934a5",
      "department": "Art",
      "gender": 0,
      "id": 1360093,
      "job": "Set Designer",
      "name": "Tim Croshaw",
      "profile_path": null
    },
    {
      "credit_id": "5e384be498f1f100140711c5",
      "department": "Art",
      "gender": 1,
      "id": 1360094,
      "job": "Set Designer",
      "name": "Noelle King",
      "profile_path": null
    },
    {
      "credit_id": "5e384c9737b3a90013b1041e",
      "department": "Art",
      "gender": 0,
      "id": 1375907,
      "job": "Set Dresser",
      "name": "Jeremy Cisneros",
      "profile_path": null
    },
    {
      "credit_id": "5e36f5f54ca676001753184d",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 1379170,
      "job": "Assistant Costume Designer",
      "name": "Susan Hall",
      "profile_path": null
    },
    {
      "credit_id": "5df08fd36a34480018c7892e",
      "department": "Sound",
      "gender": 0,
      "id": 1388864,
      "job": "Supervising Sound Editor",
      "name": "Brad Semenoff",
      "profile_path": null
    },
    {
      "credit_id": "5e39a2050c2710001874c75e",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1388870,
      "job": "Visual Effects Producer",
      "name": "Allison Paul",
      "profile_path": null
    },
    {
      "credit_id": "5df0866185da1200174e788e",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1390364,
      "job": "Visual Effects Supervisor",
      "name": "Allen Maris",
      "profile_path": null
    },
    {
      "credit_id": "5e402f2d41465c001acc47bb",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1394282,
      "job": "Visual Effects Supervisor",
      "name": "Allan Magled",
      "profile_path": null
    },
    {
      "credit_id": "5df08dfedc86470011c8d024",
      "department": "Directing",
      "gender": 1,
      "id": 1395290,
      "job": "Script Supervisor",
      "name": "Sharron Reynolds-Enriquez",
      "profile_path": null
    },
    {
      "credit_id": "5df08f89c5c1ef0013a17b28",
      "department": "Camera",
      "gender": 2,
      "id": 1398972,
      "job": "Underwater Director of Photography",
      "name": "Pete Romano",
      "profile_path": null
    },
    {
      "credit_id": "5e36fa6b98f1f100140509c5",
      "department": "Production",
      "gender": 1,
      "id": 1399072,
      "job": "Casting Associate",
      "name": "Deborah Maxwell Dion",
      "profile_path": "/jQWGeFBODysSht018BTkfqQCi8F.jpg"
    },
    {
      "credit_id": "5e402f1b9603310015ee3419",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1403876,
      "job": "Visual Effects Supervisor",
      "name": "Olaf Wendt",
      "profile_path": null
    },
    {
      "credit_id": "5e4036183dd126001653f26e",
      "department": "Sound",
      "gender": 0,
      "id": 1408528,
      "job": "Music Editor",
      "name": "Philip Tallman",
      "profile_path": null
    },
    {
      "credit_id": "5d4de586a1074b001226c61f",
      "department": "Production",
      "gender": 0,
      "id": 1409986,
      "job": "Executive Producer",
      "name": "Lourenço Sant'Anna",
      "profile_path": null
    },
    {
      "credit_id": "5e4035ff6dea3a001344d0f2",
      "department": "Sound",
      "gender": 0,
      "id": 1410316,
      "job": "Music Editor",
      "name": "Terry Wilson",
      "profile_path": null
    },
    {
      "credit_id": "5e36faf598f1f100140509f9",
      "department": "Art",
      "gender": 0,
      "id": 1413087,
      "job": "Art Department Coordinator",
      "name": "Carla S. Nemec",
      "profile_path": null
    },
    {
      "credit_id": "5e36facf43250f0015c2bbee",
      "department": "Art",
      "gender": 1,
      "id": 1414993,
      "job": "Art Department Coordinator",
      "name": "Heather Elwell",
      "profile_path": null
    },
    {
      "credit_id": "5e384b2c4ca67600145394a7",
      "department": "Art",
      "gender": 0,
      "id": 1414996,
      "job": "Set Decoration Buyer",
      "name": "Jack Blanchard",
      "profile_path": null
    },
    {
      "credit_id": "5e3d94bd43250f0013ca900b",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1415979,
      "job": "Visual Effects Production Manager",
      "name": "Tim Pounds-Cornish",
      "profile_path": null
    },
    {
      "credit_id": "5e402e980c271000157da6b1",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1420157,
      "job": "Visual Effects Supervisor",
      "name": "Ryan Tudhope",
      "profile_path": null
    },
    {
      "credit_id": "5e3454b676eecf00158deb2e",
      "department": "Camera",
      "gender": 0,
      "id": 1424177,
      "job": "Aerial Director of Photography",
      "name": "Michael FitzMaurice",
      "profile_path": null
    },
    {
      "credit_id": "5df08bd985da12001a4e416d",
      "department": "Crew",
      "gender": 2,
      "id": 1425113,
      "job": "Additional Music",
      "name": "Nils Frahm",
      "profile_path": "/hZTmhu5ptsYbATSo5ekUr6Ewi9b.jpg"
    },
    {
      "credit_id": "5e39a13343250f0015c5bca7",
      "department": "Crew",
      "gender": 2,
      "id": 1436688,
      "job": "Visual Effects Editor",
      "name": "Andrew Loschin",
      "profile_path": null
    },
    {
      "credit_id": "5e402f083dd126001653ea7c",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1439094,
      "job": "Visual Effects Supervisor",
      "name": "Guillaume Rocheron",
      "profile_path": null
    },
    {
      "credit_id": "5e402ef73dd126001a53cd51",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1442132,
      "job": "Visual Effects Supervisor",
      "name": "Christopher Downs",
      "profile_path": null
    },
    {
      "credit_id": "5df08b70688cd0001222d463",
      "department": "Crew",
      "gender": 2,
      "id": 1444239,
      "job": "Stunt Coordinator",
      "name": "Robert Alonzo",
      "profile_path": null
    },
    {
      "credit_id": "5e402cfc0c271000137d5ba2",
      "department": "Visual Effects",
      "gender": 2,
      "id": 1445483,
      "job": "Visual Effects Supervisor",
      "name": "Eran Dinur",
      "profile_path": "/1AdmFwdU6wg9cz84NnWb7siJEY8.jpg"
    },
    {
      "credit_id": "5e36f51a6beaea0015910aa5",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 1451902,
      "job": "Makeup Artist",
      "name": "Akiko Matsumoto",
      "profile_path": null
    },
    {
      "credit_id": "5e36f6b2ac8e6b0015c54463",
      "department": "Costume & Make-Up",
      "gender": 1,
      "id": 1460380,
      "job": "Costumer",
      "name": "Amy Elise Roberts",
      "profile_path": null
    },
    {
      "credit_id": "5e402d6c9603310015ee31c3",
      "department": "Visual Effects",
      "gender": 2,
      "id": 1460653,
      "job": "Visual Effects Supervisor",
      "name": "Matthew Kemper",
      "profile_path": null
    },
    {
      "credit_id": "5e384c4a98f1f100180762a3",
      "department": "Art",
      "gender": 0,
      "id": 1463380,
      "job": "Set Designer",
      "name": "Trinh Vu",
      "profile_path": null
    },
    {
      "credit_id": "5e36fa4d98f1f100140509ab",
      "department": "Production",
      "gender": 0,
      "id": 1468070,
      "job": "Casting Associate",
      "name": "Henry Russell Bergstein",
      "profile_path": null
    },
    {
      "credit_id": "5e402d1341465c0018cc010a",
      "department": "Visual Effects",
      "gender": 2,
      "id": 1472788,
      "job": "Visual Effects Supervisor",
      "name": "Jamie Hallett",
      "profile_path": null
    },
    {
      "credit_id": "5e39a291d1a893001ad04b9c",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1483579,
      "job": "Visual Effects Producer",
      "name": "Martin Wiseman",
      "profile_path": null
    },
    {
      "credit_id": "5e34553a43250f0015bf932d",
      "department": "Camera",
      "gender": 0,
      "id": 1494208,
      "job": "Camera Operator",
      "name": "Peter Gulla",
      "profile_path": null
    },
    {
      "credit_id": "5e399b8343250f0015c5b558",
      "department": "Crew",
      "gender": 0,
      "id": 1496427,
      "job": "CG Supervisor",
      "name": "Rémy Normand",
      "profile_path": null
    },
    {
      "credit_id": "5df0901285da1200174e87f8",
      "department": "Sound",
      "gender": 0,
      "id": 1512665,
      "job": "Foley Artist",
      "name": "Heikki Kossi",
      "profile_path": null
    },
    {
      "credit_id": "5e384abba7e3630015e94f44",
      "department": "Art",
      "gender": 0,
      "id": 1533054,
      "job": "Property Master",
      "name": "Kris Peck",
      "profile_path": null
    },
    {
      "credit_id": "5e36f9e4ac8e6b001ac5502a",
      "department": "Production",
      "gender": 0,
      "id": 1535105,
      "job": "ADR Voice Casting",
      "name": "Patty Majorczak-Connolly",
      "profile_path": null
    },
    {
      "credit_id": "5e3454f115376c0017a77340",
      "department": "Camera",
      "gender": 2,
      "id": 1537471,
      "job": "Camera Operator",
      "name": "Kris Krosskove",
      "profile_path": null
    },
    {
      "credit_id": "5e399f6198f1f1000f08f30d",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1543586,
      "job": "Lead Animator",
      "name": "Mike Dacko",
      "profile_path": null
    },
    {
      "credit_id": "5df08c4085da1200174e8225",
      "department": "Sound",
      "gender": 2,
      "id": 1547309,
      "job": "Production Sound Mixer",
      "name": "Mark Ulano",
      "profile_path": null
    },
    {
      "credit_id": "5e39a269ac8e6b0011c8aeed",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1548474,
      "job": "Visual Effects Producer",
      "name": "Rebecca West",
      "profile_path": null
    },
    {
      "credit_id": "5e34566076eecf00138ded45",
      "department": "Camera",
      "gender": 0,
      "id": 1548880,
      "job": "First Assistant Camera",
      "name": "Ray Milazzo",
      "profile_path": null
    },
    {
      "credit_id": "5e39a1ad0c2710001574a732",
      "department": "Crew",
      "gender": 0,
      "id": 1548933,
      "job": "Visual Effects Editor",
      "name": "Christopher Collis",
      "profile_path": null
    },
    {
      "credit_id": "5e402f836dea3a001144cc10",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1548962,
      "job": "Visual Effects Supervisor",
      "name": "Anders Langlands",
      "profile_path": null
    },
    {
      "credit_id": "5e384cab4ca676001253935a",
      "department": "Art",
      "gender": 2,
      "id": 1551648,
      "job": "Set Dresser",
      "name": "Chuck Courrieu",
      "profile_path": null
    },
    {
      "credit_id": "5e402d809603310013ed785e",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1554387,
      "job": "Visual Effects Supervisor",
      "name": "Jeremiah Sweeney",
      "profile_path": null
    },
    {
      "credit_id": "5e384d1bac8e6b0011c74862",
      "department": "Art",
      "gender": 0,
      "id": 1573474,
      "job": "Storyboard Artist",
      "name": "Warren Drummond",
      "profile_path": null
    },
    {
      "credit_id": "5e384cc637b3a90019b12221",
      "department": "Art",
      "gender": 0,
      "id": 1574780,
      "job": "Set Dresser",
      "name": "Chad R. Davis",
      "profile_path": null
    },
    {
      "credit_id": "5a94d2d50e0a260872002048",
      "department": "Editing",
      "gender": 0,
      "id": 1588421,
      "job": "Editor",
      "name": "Lee Haugen",
      "profile_path": null
    },
    {
      "credit_id": "5e36f8f5ac8e6b0018c5564f",
      "department": "Costume & Make-Up",
      "gender": 1,
      "id": 1594001,
      "job": "Set Costumer",
      "name": "Cesha Ventre",
      "profile_path": null
    },
    {
      "credit_id": "5e39a1994ca676001a55ed1c",
      "department": "Crew",
      "gender": 0,
      "id": 1594640,
      "job": "Visual Effects Editor",
      "name": "Barbara Holmes",
      "profile_path": null
    },
    {
      "credit_id": "5df08e6585da1200144ecab5",
      "department": "Camera",
      "gender": 0,
      "id": 1599618,
      "job": "Key Grip",
      "name": "Herb Ault",
      "profile_path": null
    },
    {
      "credit_id": "5e345695ac8e6b0011c2468d",
      "department": "Camera",
      "gender": 2,
      "id": 1608765,
      "job": "First Assistant \"A\" Camera",
      "name": "Keith B. Davis",
      "profile_path": null
    },
    {
      "credit_id": "5e4034da41465c0016cb900a",
      "department": "Editing",
      "gender": 0,
      "id": 1616398,
      "job": "First Assistant Editor",
      "name": "Traci Duran",
      "profile_path": null
    },
    {
      "credit_id": "5e4034be41465c001acc4b73",
      "department": "Editing",
      "gender": 0,
      "id": 1634464,
      "job": "Digital Intermediate Editor",
      "name": "Ray Ruotolo",
      "profile_path": null
    },
    {
      "credit_id": "5e40345c41465c0014cb7ab2",
      "department": "Editing",
      "gender": 0,
      "id": 1634466,
      "job": "Colorist",
      "name": "Matt Wallach",
      "profile_path": null
    },
    {
      "credit_id": "5df08d43c5c1ef0013a1782f",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 1635484,
      "job": "Hair Department Head",
      "name": "Jaime Leigh McIntosh",
      "profile_path": null
    },
    {
      "credit_id": "5e39a2170c2710001874c786",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1637298,
      "job": "Visual Effects Producer",
      "name": "Cynthia Mourou",
      "profile_path": null
    },
    {
      "credit_id": "5e34573f43250f0015bf959b",
      "department": "Lighting",
      "gender": 0,
      "id": 1651210,
      "job": "Key Rigging Grip",
      "name": "Dhamarata Dhiensuwana",
      "profile_path": null
    },
    {
      "credit_id": "5e36f35e6beaea0015910895",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 1659710,
      "job": "Additional Hairstylist",
      "name": "Stacy Bisel",
      "profile_path": null
    },
    {
      "credit_id": "5df08e4a025764001857ffee",
      "department": "Lighting",
      "gender": 0,
      "id": 1661938,
      "job": "Gaffer",
      "name": "R. Adam Chambers",
      "profile_path": null
    },
    {
      "credit_id": "5df089606a34480014c76c00",
      "department": "Production",
      "gender": 0,
      "id": 1662136,
      "job": "Co-Producer",
      "name": "Doug Torres",
      "profile_path": "/wKkHy2GE55YwBcjFScYddRSuCmh.jpg"
    },
    {
      "credit_id": "5df08844688cd000142321d6",
      "department": "Directing",
      "gender": 0,
      "id": 1662136,
      "job": "First Assistant Director",
      "name": "Doug Torres",
      "profile_path": "/wKkHy2GE55YwBcjFScYddRSuCmh.jpg"
    },
    {
      "credit_id": "5df08cf085da1200144ec979",
      "department": "Art",
      "gender": 1,
      "id": 1673973,
      "job": "Graphic Designer",
      "name": "Karen Teneyck",
      "profile_path": null
    },
    {
      "credit_id": "5e36f9fd6beaea0017912ac1",
      "department": "Production",
      "gender": 2,
      "id": 1684502,
      "job": "ADR Voice Casting",
      "name": "Johnny Gidcomb",
      "profile_path": null
    },
    {
      "credit_id": "5e36f69b0c2710001571e42f",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 1720772,
      "job": "Costumer",
      "name": "Matthew Jerome",
      "profile_path": null
    },
    {
      "credit_id": "5e34571fac8e6b0011c247de",
      "department": "Camera",
      "gender": 1,
      "id": 1722373,
      "job": "Key Grip",
      "name": "Loren Corl",
      "profile_path": null
    },
    {
      "credit_id": "5a94d2819251413266001db0",
      "department": "Production",
      "gender": 1,
      "id": 1722532,
      "job": "Executive Producer",
      "name": "Sophie Mas",
      "profile_path": null
    },
    {
      "credit_id": "5df08b8a0257640014586a30",
      "department": "Crew",
      "gender": 0,
      "id": 1735551,
      "job": "Stunt Coordinator",
      "name": "Jake Dewitt",
      "profile_path": null
    },
    {
      "credit_id": "5e399bceac8e6b001ac83049",
      "department": "Crew",
      "gender": 0,
      "id": 1736871,
      "job": "CG Supervisor",
      "name": "Trey Harrell",
      "profile_path": null
    },
    {
      "credit_id": "5e399fbdac8e6b0018c827e7",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1737643,
      "job": "Matchmove Supervisor",
      "name": "Jin Yong Kim",
      "profile_path": null
    },
    {
      "credit_id": "5e402e466dea3a001144c9cb",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1737648,
      "job": "Visual Effects Supervisor",
      "name": "Aidan Fraser",
      "profile_path": null
    },
    {
      "credit_id": "5e39a247d1a8930016d04266",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1738653,
      "job": "Visual Effects Producer",
      "name": "Molly Pabian",
      "profile_path": null
    },
    {
      "credit_id": "58ebe98e92514152ac042adb",
      "department": "Writing",
      "gender": 2,
      "id": 1750900,
      "job": "Screenplay",
      "name": "Ethan Gross",
      "profile_path": null
    },
    {
      "credit_id": "5e4033e69603310015ee381d",
      "department": "Editing",
      "gender": 0,
      "id": 1755105,
      "job": "Assistant Editor",
      "name": "Jason F. Voss",
      "profile_path": null
    },
    {
      "credit_id": "5e402f5a41465c0014cb7224",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1757613,
      "job": "Visual Effects Supervisor",
      "name": "Keith Sellers",
      "profile_path": null
    },
    {
      "credit_id": "5df0887ec5c1ef0013a17234",
      "department": "Directing",
      "gender": 1,
      "id": 1764257,
      "job": "Second Assistant Director",
      "name": "Christina Fong",
      "profile_path": null
    },
    {
      "credit_id": "5e36f47998f1f10012053ace",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 1766006,
      "job": "Key Hair Stylist",
      "name": "Julie Rea",
      "profile_path": null
    },
    {
      "credit_id": "5e39a046d1a8930016d0416e",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1781513,
      "job": "Matte Painter",
      "name": "Laura Martín",
      "profile_path": null
    },
    {
      "credit_id": "5e34585776eecf00158def13",
      "department": "Camera",
      "gender": 0,
      "id": 1789765,
      "job": "Second Assistant Camera",
      "name": "Rio Noel Zumwalt",
      "profile_path": null
    },
    {
      "credit_id": "5e384d050c2710001a7381e8",
      "department": "Art",
      "gender": 0,
      "id": 1790002,
      "job": "Set Dresser",
      "name": "Fante Zamora",
      "profile_path": null
    },
    {
      "credit_id": "5e34594715376c0015a75a32",
      "department": "Crew",
      "gender": 0,
      "id": 1790024,
      "job": "Techno Crane Operator",
      "name": "Bogdan Iofciulescu",
      "profile_path": null
    },
    {
      "credit_id": "5a94d323c3a3681202001da0",
      "department": "Crew",
      "gender": 0,
      "id": 1790028,
      "job": "Driver",
      "name": "Erik Coutts",
      "profile_path": null
    },
    {
      "credit_id": "5e399baa98f1f1001808f00e",
      "department": "Crew",
      "gender": 0,
      "id": 1790947,
      "job": "CG Supervisor",
      "name": "Laurent Taillefer",
      "profile_path": null
    },
    {
      "credit_id": "5e36fa836beaea0015910fac",
      "department": "Production",
      "gender": 2,
      "id": 1791946,
      "job": "Extras Casting",
      "name": "Rich King",
      "profile_path": null
    },
    {
      "credit_id": "5e36f7220c2710001a71eec9",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 1826923,
      "job": "Key Costumer",
      "name": "Krista Guggia",
      "profile_path": null
    },
    {
      "credit_id": "5e34557a15376c0017a773fc",
      "department": "Camera",
      "gender": 0,
      "id": 1826925,
      "job": "Dolly Grip",
      "name": "Ryan Monro",
      "profile_path": null
    },
    {
      "credit_id": "5e36f3b26beaea00159108dd",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 1831370,
      "job": "Additional Hairstylist",
      "name": "Matthew Holman",
      "profile_path": null
    },
    {
      "credit_id": "5e384cd937b3a90019b1223b",
      "department": "Art",
      "gender": 0,
      "id": 1842140,
      "job": "Set Dresser",
      "name": "Andre Freimann",
      "profile_path": null
    },
    {
      "credit_id": "5e36f3760c2710001a71e804",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 1842256,
      "job": "Additional Hairstylist",
      "name": "Christi Cagle",
      "profile_path": null
    },
    {
      "credit_id": "5e384b000c27100013735870",
      "department": "Art",
      "gender": 1,
      "id": 1847477,
      "job": "Set Decoration Buyer",
      "name": "Karen Riemenschneider",
      "profile_path": null
    },
    {
      "credit_id": "5e402d9b0c271000187d929d",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1886261,
      "job": "Visual Effects Supervisor",
      "name": "Emilien Lazaron",
      "profile_path": null
    },
    {
      "credit_id": "5e39a1f3d1a8930018d0429e",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1901062,
      "job": "Visual Effects Producer",
      "name": "Annie Normandin",
      "profile_path": null
    },
    {
      "credit_id": "5e36f4e86beaea0017911846",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 1917997,
      "job": "Makeup Artist",
      "name": "Victor Del Castillo",
      "profile_path": null
    },
    {
      "credit_id": "5e39a2284ca6760017560765",
      "department": "Visual Effects",
      "gender": 0,
      "id": 1934882,
      "job": "Visual Effects Producer",
      "name": "Sarah McLauchlan",
      "profile_path": null
    },
    {
      "credit_id": "5e39a25898f1f1000f08f951",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2000424,
      "job": "Visual Effects Producer",
      "name": "Kelly McCarthy",
      "profile_path": null
    },
    {
      "credit_id": "5df08cbeeda4b70018042d30",
      "department": "Art",
      "gender": 1,
      "id": 2007598,
      "job": "Assistant Art Director",
      "name": "Sandra Doyle Carmola",
      "profile_path": null
    },
    {
      "credit_id": "5e399b97ac8e6b0018c82098",
      "department": "Crew",
      "gender": 0,
      "id": 2010377,
      "job": "CG Supervisor",
      "name": "Eric Schoellnast",
      "profile_path": null
    },
    {
      "credit_id": "5e39a1be4ca676001455045e",
      "department": "Crew",
      "gender": 0,
      "id": 2010429,
      "job": "Visual Effects Editor",
      "name": "Jonathan D. Martin",
      "profile_path": null
    },
    {
      "credit_id": "5e399f180c27100013748dae",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2014474,
      "job": "Creature Technical Director",
      "name": "Chay Johansson",
      "profile_path": null
    },
    {
      "credit_id": "5e36f508ac8e6b0018c55082",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 2025927,
      "job": "Makeup Artist",
      "name": "Cassie Lyons",
      "profile_path": null
    },
    {
      "credit_id": "5d4de62af9475b00164fc9e0",
      "department": "Art",
      "gender": 2,
      "id": 2045377,
      "job": "Art Direction",
      "name": "David E. Scott",
      "profile_path": null
    },
    {
      "credit_id": "5e39a080ac8e6b0018c82927",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2050106,
      "job": "Matte Painter",
      "name": "Sun Lee",
      "profile_path": null
    },
    {
      "credit_id": "5e36f3036beaea0017910fce",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 2051301,
      "job": "Additional Hairstylist",
      "name": "Lynnae Duley",
      "profile_path": null
    },
    {
      "credit_id": "5e39a02c43250f0013c55073",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2055196,
      "job": "Matte Painter",
      "name": "Dhamindra Jeevan",
      "profile_path": null
    },
    {
      "credit_id": "5e384a2d4ca67600145393d7",
      "department": "Art",
      "gender": 0,
      "id": 2068404,
      "job": "Concept Artist",
      "name": "Sean Samuels",
      "profile_path": null
    },
    {
      "credit_id": "5e5f4c8f55c9260013573335",
      "department": "Sound",
      "gender": 0,
      "id": 2069176,
      "job": "Additional Production Sound Mixer",
      "name": "Chris Howland",
      "profile_path": null
    },
    {
      "credit_id": "5df08ca66a34480014c76f07",
      "department": "Art",
      "gender": 0,
      "id": 2080015,
      "job": "Assistant Art Director",
      "name": "Alison Sadler",
      "profile_path": null
    },
    {
      "credit_id": "5e384b1598f1f1001407114c",
      "department": "Art",
      "gender": 0,
      "id": 2080554,
      "job": "Set Decoration Buyer",
      "name": "Wendy Weaver",
      "profile_path": null
    },
    {
      "credit_id": "5e3456a915376c0017a77846",
      "department": "Camera",
      "gender": 0,
      "id": 2080793,
      "job": "First Assistant \"B\" Camera",
      "name": "Sarah Brandes",
      "profile_path": null
    },
    {
      "credit_id": "5e39a0564ca676001a55eb24",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2091569,
      "job": "Matte Painter",
      "name": "Nadim Zaidi",
      "profile_path": null
    },
    {
      "credit_id": "5e3849df37b3a90017b125da",
      "department": "Art",
      "gender": 0,
      "id": 2096097,
      "job": "Concept Artist",
      "name": "Ben Grangereau",
      "profile_path": null
    },
    {
      "credit_id": "5e3849f50c2710001a737cef",
      "department": "Art",
      "gender": 0,
      "id": 2096098,
      "job": "Concept Artist",
      "name": "Finnian Macmanus",
      "profile_path": null
    },
    {
      "credit_id": "5e384a5dac8e6b0018c6c903",
      "department": "Art",
      "gender": 0,
      "id": 2096102,
      "job": "Concept Artist",
      "name": "Stephen Zavala",
      "profile_path": null
    },
    {
      "credit_id": "5e3457a398f1f1001802b199",
      "department": "Lighting",
      "gender": 0,
      "id": 2098235,
      "job": "Lighting Technician",
      "name": "Erica Kim",
      "profile_path": null
    },
    {
      "credit_id": "5e399c5c4ca676001254d8cd",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2118482,
      "job": "Compositing Supervisor",
      "name": "Darren Christie",
      "profile_path": null
    },
    {
      "credit_id": "5e36fa3243250f0015c2b9fa",
      "department": "Production",
      "gender": 0,
      "id": 2139266,
      "job": "Casting Assistant",
      "name": "Ryan Drake",
      "profile_path": null
    },
    {
      "credit_id": "5e399bbe98f1f1001808f0ee",
      "department": "Crew",
      "gender": 0,
      "id": 2139600,
      "job": "CG Supervisor",
      "name": "Oliver Winwood",
      "profile_path": null
    },
    {
      "credit_id": "5e3454e198f1f1001202314b",
      "department": "Camera",
      "gender": 1,
      "id": 2145026,
      "job": "Camera Operator",
      "name": "Kristen Correll",
      "profile_path": null
    },
    {
      "credit_id": "5e399be7d1a8930016d03e73",
      "department": "Crew",
      "gender": 0,
      "id": 2146145,
      "job": "CG Supervisor",
      "name": "Catherine Hébert",
      "profile_path": null
    },
    {
      "credit_id": "5e402e846dea3a001744c5ea",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2150609,
      "job": "Visual Effects Supervisor",
      "name": "Jedediah Smith",
      "profile_path": null
    },
    {
      "credit_id": "5e402f6d3dd126001853db58",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2173003,
      "job": "Visual Effects Supervisor",
      "name": "Jiwoong Kim",
      "profile_path": null
    },
    {
      "credit_id": "5e36f7780c2710001571e5a5",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 2195119,
      "job": "Set Costumer",
      "name": "Emily Dominguez",
      "profile_path": null
    },
    {
      "credit_id": "5df08c13dc86470019c8cc30",
      "department": "Production",
      "gender": 0,
      "id": 2234128,
      "job": "Associate Producer",
      "name": "Christina Oh",
      "profile_path": null
    },
    {
      "credit_id": "5c7192c39251415ef5b10c61",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 2241372,
      "job": "Costume Supervisor",
      "name": "John Casey",
      "profile_path": null
    },
    {
      "credit_id": "5e36f4f843250f0015c2b1d1",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 2254082,
      "job": "Makeup Artist",
      "name": "Gunn Espegard",
      "profile_path": null
    },
    {
      "credit_id": "5e39a0d8ac8e6b0018c82a64",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2255708,
      "job": "Pre-Visualization Supervisor",
      "name": "Clint G. Reagan",
      "profile_path": null
    },
    {
      "credit_id": "5e40343c0c271000187d97f1",
      "department": "Editing",
      "gender": 0,
      "id": 2261970,
      "job": "Colorist",
      "name": "Greg Fisher",
      "profile_path": null
    },
    {
      "credit_id": "5e399a6d0c2710001a75061f",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2285844,
      "job": "2D Supervisor",
      "name": "Eric Andrusyszyn",
      "profile_path": null
    },
    {
      "credit_id": "5e30bd9f0f21c60017695c31",
      "department": "Production",
      "gender": 0,
      "id": 2382642,
      "job": "Executive Producer",
      "name": "Yariv Milchan",
      "profile_path": null
    },
    {
      "credit_id": "5d4de54da1074b001526bb7a",
      "department": "Production",
      "gender": 0,
      "id": 2382643,
      "job": "Executive Producer",
      "name": "Paul Conway",
      "profile_path": null
    },
    {
      "credit_id": "5d4de575839d930012abdd0e",
      "department": "Production",
      "gender": 0,
      "id": 2382644,
      "job": "Executive Producer",
      "name": "Anthony Mosawi",
      "profile_path": null
    },
    {
      "credit_id": "5e3457df4ca676001a4f6dbb",
      "department": "Lighting",
      "gender": 0,
      "id": 2464787,
      "job": "Rigging Grip",
      "name": "Ray Valerio",
      "profile_path": null
    },
    {
      "credit_id": "5e3457c043250f0017bf9bfe",
      "department": "Lighting",
      "gender": 0,
      "id": 2476642,
      "job": "Rigging Gaffer",
      "name": "Ricky Carrillo",
      "profile_path": null
    },
    {
      "credit_id": "5df08bf4dc86470011c8ce82",
      "department": "Crew",
      "gender": 0,
      "id": 2480064,
      "job": "Additional Music",
      "name": "Robert Charles Mann",
      "profile_path": null
    },
    {
      "credit_id": "5df08d61ce4ddc001862f7e3",
      "department": "Art",
      "gender": 0,
      "id": 2480079,
      "job": "Property Master",
      "name": "Kris E. Peck",
      "profile_path": null
    },
    {
      "credit_id": "5e36f41643250f0013c27b02",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 2481095,
      "job": "Contact Lens Designer",
      "name": "Jessica Nelson",
      "profile_path": null
    },
    {
      "credit_id": "5e4036576dea3a001344d185",
      "department": "Sound",
      "gender": 1,
      "id": 2497689,
      "job": "Music Editor",
      "name": "Lena Glikson",
      "profile_path": null
    },
    {
      "credit_id": "5e36f52d4ca676001252106a",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 2518540,
      "job": "Makeup Artist",
      "name": "Keiko Wedding",
      "profile_path": null
    },
    {
      "credit_id": "5e34558b76eecf00158deb73",
      "department": "Lighting",
      "gender": 0,
      "id": 2525829,
      "job": "Electrician",
      "name": "Giovanni Vargas",
      "profile_path": null
    },
    {
      "credit_id": "5e34588a98f1f10012023489",
      "department": "Camera",
      "gender": 0,
      "id": 2525834,
      "job": "Second Assistant Camera",
      "name": "Blake Collins",
      "profile_path": null
    },
    {
      "credit_id": "5e3458a043250f0019bf7704",
      "department": "Camera",
      "gender": 0,
      "id": 2525835,
      "job": "Second Assistant Camera",
      "name": "Kevin Miles",
      "profile_path": null
    },
    {
      "credit_id": "5e36f640ac8e6b0015c543a7",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 2527726,
      "job": "Costume Assistant",
      "name": "Sharmila Ray",
      "profile_path": null
    },
    {
      "credit_id": "5e36f6ce43250f0017c25fa3",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 2527729,
      "job": "Costumer",
      "name": "Allie Venrick",
      "profile_path": null
    },
    {
      "credit_id": "5e36f90843250f0013c284e9",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 2527739,
      "job": "Set Costumer",
      "name": "Sarah Wachel",
      "profile_path": null
    },
    {
      "credit_id": "5e36f9256beaea0019911cc5",
      "department": "Costume & Make-Up",
      "gender": 0,
      "id": 2527740,
      "job": "Wardrobe Assistant",
      "name": "Kacie Guggia",
      "profile_path": null
    },
    {
      "credit_id": "5e384a4da7e3630015e94edf",
      "department": "Art",
      "gender": 0,
      "id": 2528722,
      "job": "Concept Artist",
      "name": "Russell Story",
      "profile_path": null
    },
    {
      "credit_id": "5e384b4537b3a90019b11fae",
      "department": "Art",
      "gender": 0,
      "id": 2528723,
      "job": "Set Decorating Coordinator",
      "name": "Chelsey Morin",
      "profile_path": null
    },
    {
      "credit_id": "5e384cf0a7e3630015e95092",
      "department": "Art",
      "gender": 0,
      "id": 2528727,
      "job": "Set Dresser",
      "name": "Linda Herrera",
      "profile_path": null
    },
    {
      "credit_id": "5e399aa1d1a8930018d037c5",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2529411,
      "job": "Animation Supervisor",
      "name": "Merlin Bela Wassiij Maertz",
      "profile_path": null
    },
    {
      "credit_id": "5e399bfcd1a8930014d04b66",
      "department": "Crew",
      "gender": 0,
      "id": 2529419,
      "job": "CG Supervisor",
      "name": "Jonathan Swartz",
      "profile_path": null
    },
    {
      "credit_id": "5e399c4898f1f1000f08f0f2",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2529423,
      "job": "Compositing Supervisor",
      "name": "Mani Trump",
      "profile_path": null
    },
    {
      "credit_id": "5e39a01bd1a893001ad048e4",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2529441,
      "job": "Matte Painter",
      "name": "Vincent Boucher-Cormier",
      "profile_path": null
    },
    {
      "credit_id": "5e39a06b0c2710001374902d",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2529442,
      "job": "Matte Painter",
      "name": "Ben Zylberman",
      "profile_path": null
    },
    {
      "credit_id": "5e39a0c043250f0019c62add",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2529444,
      "job": "Pre-Visualization Coordinator",
      "name": "Alexandria Johnson",
      "profile_path": null
    },
    {
      "credit_id": "5e39a146ac8e6b0018c82b63",
      "department": "Crew",
      "gender": 0,
      "id": 2529447,
      "job": "Visual Effects Editor",
      "name": "Stephen Trepanier",
      "profile_path": null
    },
    {
      "credit_id": "5e39a1644ca67600145503b2",
      "department": "Crew",
      "gender": 0,
      "id": 2529448,
      "job": "Visual Effects Editor",
      "name": "Rosa Sanchez",
      "profile_path": null
    },
    {
      "credit_id": "5e39a1764ca676001a55ed08",
      "department": "Crew",
      "gender": 0,
      "id": 2529449,
      "job": "Visual Effects Editor",
      "name": "Emilie Arcand",
      "profile_path": null
    },
    {
      "credit_id": "5e39a1880c27100013749109",
      "department": "Crew",
      "gender": 0,
      "id": 2529450,
      "job": "Visual Effects Editor",
      "name": "Jackson Chow",
      "profile_path": null
    },
    {
      "credit_id": "5e39a23798f1f1001808faf6",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2529454,
      "job": "Visual Effects Producer",
      "name": "Samantha Banack",
      "profile_path": null
    },
    {
      "credit_id": "5e39a27eac8e6b0015c868f4",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2529455,
      "job": "Visual Effects Producer",
      "name": "Matthew Dravitzki",
      "profile_path": null
    },
    {
      "credit_id": "5e3d944f9603310017ea0e30",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2531801,
      "job": "Visual Effects Production Assistant",
      "name": "Heather Hennessey",
      "profile_path": null
    },
    {
      "credit_id": "5e3d946c98f1f100120d2880",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2531802,
      "job": "Visual Effects Production Assistant",
      "name": "Stephanie Brandolini",
      "profile_path": null
    },
    {
      "credit_id": "5e3d948443250f0015cb3ecf",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2531803,
      "job": "Visual Effects Production Assistant",
      "name": "Nunzia Lombardo",
      "profile_path": null
    },
    {
      "credit_id": "5e3d94a043250f0013ca8fe4",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2531805,
      "job": "Visual Effects Production Assistant",
      "name": "Shania Gharagozlou",
      "profile_path": null
    },
    {
      "credit_id": "5e3d94d6e04aca0018d59542",
      "department": "Visual Effects",
      "gender": 0,
      "id": 2531806,
      "job": "Visual Effects Production Manager",
      "name": "Amber Davy",
      "profile_path": null
    },
    {
      "credit_id": "5e4033376dea3a001544c852",
      "department": "Editing",
      "gender": 0,
      "id": 2533589,
      "job": "Additional Editing",
      "name": "Scott Morris",
      "profile_path": null
    },
    {
      "credit_id": "5e4033bf3dd1260014540e21",
      "department": "Editing",
      "gender": 0,
      "id": 2533591,
      "job": "Assistant Editor",
      "name": "Jared Simon",
      "profile_path": null
    },
    {
      "credit_id": "5e4033d241465c0016cb8efa",
      "department": "Editing",
      "gender": 0,
      "id": 2533593,
      "job": "Assistant Editor",
      "name": "Jonathan Thornhill",
      "profile_path": null
    },
    {
      "credit_id": "5e4035383dd126001853e086",
      "department": "Production",
      "gender": 0,
      "id": 2533599,
      "job": "Location Manager",
      "name": "Christopher Kusiak",
      "profile_path": null
    },
    {
      "credit_id": "5e4037250c271000157db057",
      "department": "Directing",
      "gender": 0,
      "id": 2533602,
      "job": "Continuity",
      "name": "Mark Valenzuela",
      "profile_path": null
    },
    {
      "credit_id": "5e4038159603310019eda12f",
      "department": "Production",
      "gender": 0,
      "id": 2533605,
      "job": "Production Accountant",
      "name": "Sarah Medley",
      "profile_path": null
    }
  ]
}

+ Get Series Cast : https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=<<api_key>>
+ Cast Sample Response : {
  "cast": [
    {
      "character": "Tincke",
      "credit_id": "5d7ab545af43243b22975d99",
      "id": 231643,
      "name": "Stef Aerts",
      "gender": 0,
      "profile_path": null,
      "order": 500
    },
    {
      "character": "",
      "credit_id": "5d7ab55baf43247fa1979224",
      "id": 1259085,
      "name": "Ruth Beeckmans",
      "gender": 0,
      "profile_path": "/gr9WtnbqVK6XOjBvA1QhEUdgy1j.jpg",
      "order": 500
    },
    {
      "character": "",
      "credit_id": "5d7ab571a843c10011e7b19b",
      "id": 1519579,
      "name": "Dick Carlier",
      "gender": 0,
      "profile_path": null,
      "order": 500
    },
    {
      "character": "",
      "credit_id": "5d7ab581a843c13b13e76fce",
      "id": 1414507,
      "name": "Peter De Graef",
      "gender": 0,
      "profile_path": null,
      "order": 500
    },
    {
      "character": "",
      "credit_id": "5d7ab59ba843c10012e7aa15",
      "id": 1165551,
      "name": "Manou Kersting",
      "gender": 0,
      "profile_path": null,
      "order": 500
    },
    {
      "character": "Vangenende",
      "credit_id": "5d7ab5bfaf43243b21977d22",
      "id": 932343,
      "name": "Iwein Segers",
      "gender": 0,
      "profile_path": null,
      "order": 500
    }
  ],
  "crew": [],
  "id": 93533
}








+ Get Similar Movies : https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1
+ Similar Movies Response: {
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/jrudoaXcoLyHRPdolyOGemXgPEs.jpg",
      "genre_ids": [
        36,
        18
      ],
      "id": 369972,
      "original_language": "en",
      "original_title": "First Man",
      "overview": "A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.",
      "poster_path": "/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg",
      "release_date": "2018-10-11",
      "title": "First Man",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 3275,
      "popularity": 23.401
    },
    {
      "id": 95,
      "video": false,
      "vote_count": 5031,
      "vote_average": 6.7,
      "title": "Armageddon",
      "release_date": "1998-07-01",
      "original_language": "en",
      "original_title": "Armageddon",
      "genre_ids": [
        28,
        12,
        878,
        53
      ],
      "backdrop_path": "/462oYCZHNr4ptNEqLNsuOjusEdj.jpg",
      "adult": false,
      "overview": "When an asteroid threatens to collide with Earth, NASA honcho Dan Truman determines the only way to stop it is to drill into its surface and detonate a nuclear bomb. This leads him to renowned driller Harry Stamper, who agrees to helm the dangerous space mission provided he can bring along his own hotshot crew. Among them is the cocksure A.J. who Harry thinks isn't good enough for his daughter, until the mission proves otherwise.",
      "poster_path": "/fMtOCd0EAdAzKtGLQiHjSUvbdNc.jpg",
      "popularity": 24.734
    },
    {
      "id": 568,
      "video": false,
      "vote_count": 3418,
      "vote_average": 7.4,
      "title": "Apollo 13",
      "release_date": "1995-06-30",
      "original_language": "en",
      "original_title": "Apollo 13",
      "genre_ids": [
        18,
        36
      ],
      "backdrop_path": "/AfGp6Ev3BVdEd7L99kGQzOzsqRb.jpg",
      "adult": false,
      "overview": "The true story of technical troubles that scuttle the Apollo 13 lunar mission in 1970, risking the lives of astronaut Jim Lovell and his crew, with the failed journey turning into a thrilling saga of heroism. Drifting more than 200,000 miles from Earth, the astronauts work furiously with the ground crew to avert tragedy.",
      "poster_path": "/9V6ZjTXFkQpKuhrBHSnLu5JCbnk.jpg",
      "popularity": 27.314
    },
    {
      "id": 286217,
      "video": false,
      "vote_count": 13869,
      "vote_average": 7.7,
      "title": "The Martian",
      "release_date": "2015-09-30",
      "original_language": "en",
      "original_title": "The Martian",
      "genre_ids": [
        12,
        18,
        878
      ],
      "backdrop_path": "/3dPhs7hUnQLphDFzdkD407VZDYo.jpg",
      "adult": false,
      "overview": "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
      "poster_path": "/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
      "popularity": 41.853
    },
    {
      "id": 157336,
      "video": false,
      "vote_count": 22042,
      "vote_average": 8.3,
      "title": "Interstellar",
      "release_date": "2014-11-05",
      "original_language": "en",
      "original_title": "Interstellar",
      "genre_ids": [
        12,
        18,
        878
      ],
      "backdrop_path": "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      "adult": false,
      "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      "popularity": 66.385
    },
    {
      "adult": false,
      "backdrop_path": "/3No5nC3lwppGHxjcEbJGyFtTJvR.jpg",
      "genre_ids": [
        878
      ],
      "id": 2067,
      "original_language": "en",
      "original_title": "Mission to Mars",
      "overview": "When contact is lost with the crew of the first Mars expedition, a rescue mission is launched to discover their fate.",
      "poster_path": "/beDWEWxgFlt1UWvf2al9cjDol2i.jpg",
      "release_date": "2000-03-10",
      "title": "Mission to Mars",
      "video": false,
      "vote_average": 5.9,
      "vote_count": 789,
      "popularity": 11.896
    },
    {
      "adult": false,
      "backdrop_path": "/zKThV9H9hw5A2syYqLQFQqGmbf3.jpg",
      "genre_ids": [
        18,
        878,
        9648,
        10749
      ],
      "id": 2103,
      "original_language": "en",
      "original_title": "Solaris",
      "overview": "A troubled psychologist is sent to investigate the crew of an isolated research station orbiting a bizarre planet.",
      "poster_path": "/o839RFIxPrpgOMKQ21SOQl4908t.jpg",
      "release_date": "2002-11-27",
      "title": "Solaris",
      "video": false,
      "vote_average": 6,
      "vote_count": 761,
      "popularity": 9.913
    },
    {
      "id": 395992,
      "video": false,
      "vote_count": 4868,
      "vote_average": 6.4,
      "title": "Life",
      "release_date": "2017-03-22",
      "original_language": "en",
      "original_title": "Life",
      "genre_ids": [
        27,
        878,
        53
      ],
      "backdrop_path": "/nNh7vHHISVAaziJEqAq0P9iL52w.jpg",
      "adult": false,
      "overview": "The six-member crew of the International Space Station is tasked with studying a sample from Mars that may be the first proof of extra-terrestrial life, which proves more intelligent than ever expected.",
      "poster_path": "/dr561Avhhmf5YaEqem5rfBa7JNy.jpg",
      "popularity": 24.51
    },
    {
      "id": 62,
      "video": false,
      "vote_count": 7073,
      "vote_average": 8.1,
      "title": "2001: A Space Odyssey",
      "release_date": "1968-04-09",
      "original_language": "en",
      "original_title": "2001: A Space Odyssey",
      "genre_ids": [
        12,
        9648,
        878
      ],
      "backdrop_path": "/spoZUN4X1KiOc5S0plOyGAXLNtb.jpg",
      "adult": false,
      "overview": "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
      "poster_path": "/zmmYdPa8Lxx999Af9vnVP4XQ1V6.jpg",
      "popularity": 34.34
    },
    {
      "id": 2900,
      "video": false,
      "vote_count": 544,
      "vote_average": 5.5,
      "title": "The Astronaut's Wife",
      "release_date": "1999-08-26",
      "original_language": "en",
      "original_title": "The Astronaut's Wife",
      "genre_ids": [
        18,
        878,
        53
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "When astronaut Spencer Armacost returns to Earth after a mission that nearly cost him his life, he decides to take a desk job in order to see his beautiful wife, Jillian, more often. Gradually, Jillian notices that Spencer's personality seems to have changed, but her concerns fade when she discovers that she's pregnant. As Jillian grows closer to becoming a mother, her suspicions about Spencer return. Why does it seem as if he's a different person?",
      "poster_path": "/rEATfBs4exRHDGA15QkZH7TDXLv.jpg",
      "popularity": 11.04
    },
    {
      "adult": false,
      "backdrop_path": "/nEtnuQWLRnbJPLqGCLUgobFc2P7.jpg",
      "genre_ids": [
        53,
        878
      ],
      "id": 4437,
      "original_language": "en",
      "original_title": "2010",
      "overview": "While planet Earth poises on the brink of nuclear self-destruction, a team of Russian and American scientists aboard the Leonov hurtles to a rendezvous with the still-orbiting Discovery spacecraft and it's sole known survivor, the homicidal computer HAL.",
      "poster_path": "/mEWKXuCMv7mFMxXVSTI3v8UOQuq.jpg",
      "release_date": "1984-12-06",
      "title": "2010",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 516,
      "popularity": 11.077
    },
    {
      "adult": false,
      "backdrop_path": "/w2KUVzeOC1u6cQwvUV0qqi7QYxs.jpg",
      "genre_ids": [
        18,
        36
      ],
      "id": 9549,
      "original_language": "en",
      "original_title": "The Right Stuff",
      "overview": "A chronicle of the original Mercury astronauts in the formation of America's space program: Alan Shepherd, the first American in space; Gus Grissom, the benighted astronaut for whom nothing works out as planned; John Glenn, the straight-arrow 'boy scout' of the bunch who was the first American to orbit the earth; and the remaining pilots: Deke Slayton, Scott Carpenter and Wally Schirra.",
      "poster_path": "/btqTjNRxecYgQ1FGfVlLqSSNjz.jpg",
      "release_date": "1983-10-20",
      "title": "The Right Stuff",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 468,
      "popularity": 11.066
    },
    {
      "id": 10679,
      "video": false,
      "vote_count": 978,
      "vote_average": 5.7,
      "title": "Iron Sky",
      "release_date": "2012-03-10",
      "original_language": "en",
      "original_title": "Iron Sky",
      "genre_ids": [
        28,
        35,
        878
      ],
      "backdrop_path": "/y7RMsHw1d5gtfedHPBoaOKuY6vy.jpg",
      "adult": false,
      "overview": "In the last moments of World War II, a secret Nazi space program evaded destruction by fleeing to the Dark Side of the Moon. During 70 years of utter secrecy, the Nazis construct a gigantic space fortress with a massive armada of flying saucers.",
      "poster_path": "/tX5h6TZ84loTbU1YAWO0JhfzAaM.jpg",
      "popularity": 11.464
    },
    {
      "id": 601,
      "video": false,
      "vote_count": 7598,
      "vote_average": 7.5,
      "title": "E.T. the Extra-Terrestrial",
      "release_date": "1982-06-11",
      "original_language": "en",
      "original_title": "E.T. the Extra-Terrestrial",
      "genre_ids": [
        12,
        14,
        878,
        10751
      ],
      "backdrop_path": "/mXLVA0YL6tcXi6SJSuAh9ONXFj5.jpg",
      "adult": false,
      "overview": "After a gentle alien becomes stranded on Earth, the being is discovered and befriended by a young boy named Elliott. Bringing the extraterrestrial into his suburban California house, Elliott introduces E.T., as the alien is dubbed, to his brother and his little sister, Gertie, and the children decide to keep its existence a secret. Soon, however, E.T. falls ill, resulting in government intervention and a dire situation for both Elliott and the alien.",
      "poster_path": "/cBfkE3HSH1NOyy1ftxlPw2l3ukb.jpg",
      "popularity": 31.639
    },
    {
      "id": 19995,
      "video": false,
      "vote_count": 21068,
      "vote_average": 7.4,
      "title": "Avatar",
      "release_date": "2009-12-10",
      "original_language": "en",
      "original_title": "Avatar",
      "genre_ids": [
        28,
        12,
        14,
        878
      ],
      "backdrop_path": "/wcC7kCICL6x6zHUlUyNp9pWoqW1.jpg",
      "adult": false,
      "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
      "poster_path": "/btnl50ZDJDSCal2NLQIYWw0XxvH.jpg",
      "popularity": 32.164
    },
    {
      "id": 340104,
      "video": false,
      "vote_count": 35,
      "vote_average": 5.2,
      "title": "Lucy in the Sky",
      "release_date": "2019-09-20",
      "original_language": "en",
      "original_title": "Lucy in the Sky",
      "genre_ids": [
        18
      ],
      "backdrop_path": "/rtpDfc1bYmSHLp8VK8xjxkolQY4.jpg",
      "adult": false,
      "overview": "Astronaut Lucy Cola returns to Earth after a transcendent experience during a mission to space – and begins to lose touch with reality in a world that now seems too small.",
      "poster_path": "/qqYEiEbwAlif3k954uTS92UqUQz.jpg",
      "popularity": 11.666
    },
    {
      "id": 49047,
      "video": false,
      "vote_count": 11052,
      "vote_average": 7.2,
      "title": "Gravity",
      "release_date": "2013-10-03",
      "original_language": "en",
      "original_title": "Gravity",
      "genre_ids": [
        18,
        878,
        53
      ],
      "backdrop_path": "/npFPqZeHlEPOlLEpykP6kuSsi6v.jpg",
      "adult": false,
      "overview": "Dr. Ryan Stone, a brilliant medical engineer on her first Shuttle mission, with veteran astronaut Matt Kowalsky in command of his last flight before retiring. But on a seemingly routine spacewalk, disaster strikes. The Shuttle is destroyed, leaving Stone and Kowalsky completely alone-tethered to nothing but each other and spiraling out into the blackness of space. The deafening silence tells them they have lost any link to Earth and any chance for rescue. As fear turns to panic, every gulp of air eats away at what little oxygen is left. But the only way home may be to go further out into the terrifying expanse of space.",
      "poster_path": "/bO6h1R8xTFBX0jRoXolOYm93fp6.jpg",
      "popularity": 24.266
    },
    {
      "id": 8656,
      "video": false,
      "vote_count": 1724,
      "vote_average": 6.1,
      "title": "Deep Impact",
      "release_date": "1998-05-08",
      "original_language": "en",
      "original_title": "Deep Impact",
      "genre_ids": [
        28,
        18,
        878
      ],
      "backdrop_path": "/w53FK3MoMLavk1sxErUiGMnLpf2.jpg",
      "adult": false,
      "overview": "A seven-mile-wide space rock is hurtling toward Earth, threatening to obliterate the planet. Now, it's up to the president of the United States to save the world. He appoints a tough-as-nails veteran astronaut to lead a joint American-Russian crew into space to destroy the comet before impact. Meanwhile, an enterprising reporter uses her smarts to uncover the scoop of the century.",
      "poster_path": "/a3vQS7JKqlOb3MdVJHuTCP9s7Mg.jpg",
      "popularity": 12.819
    },
    {
      "adult": false,
      "backdrop_path": "/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
      "genre_ids": [
        27,
        878
      ],
      "id": 348,
      "original_language": "en",
      "original_title": "Alien",
      "overview": "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
      "poster_path": "/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
      "release_date": "1979-05-25",
      "title": "Alien",
      "video": false,
      "vote_average": 8.1,
      "vote_count": 8901,
      "popularity": 33.479
    },
    {
      "id": 126889,
      "video": false,
      "vote_count": 5631,
      "vote_average": 5.9,
      "title": "Alien: Covenant",
      "release_date": "2017-05-09",
      "original_language": "en",
      "original_title": "Alien: Covenant",
      "genre_ids": [
        27,
        878,
        53
      ],
      "backdrop_path": "/6jajFcaY2YsfGQstJ5HaqZNVseX.jpg",
      "adult": false,
      "overview": "Bound for a remote planet on the far side of the galaxy, the crew of the colony ship 'Covenant' discovers what is thought to be an uncharted paradise, but is actually a dark, dangerous world—which has a sole inhabitant: the 'synthetic', David, survivor of the doomed Prometheus expedition.",
      "poster_path": "/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg",
      "popularity": 27.999
    }
  ],
  "total_pages": 9,
  "total_results": 178
}

+ Get Similar Series : https://api.themoviedb.org/3/tv/{tv_id}/similar?api_key=<<api_key>>&language=en-US&page=1
+ Similar Series Response:{
  "page": 1,
  "results": [
    {
      "original_name": "Revenge",
      "id": 39358,
      "name": "Revenge",
      "vote_count": 264,
      "vote_average": 7.2,
      "first_air_date": "2011-09-21",
      "poster_path": "/qx7XytRgg1F03NN5BoK8jx3Cyft.jpg",
      "genre_ids": [
        18,
        9648,
        10766
      ],
      "original_language": "en",
      "backdrop_path": "/u7XADmNNOyuza7UkoAa94bycqp3.jpg",
      "overview": "When Emily Thorne moves to the Hamptons, everyone wonders about the new girl, but she knows everything about them, including what they did to her family. Years ago, they took everything from her. Now, one by one, she's going to make them pay.",
      "origin_country": [
        "US"
      ],
      "popularity": 14.539
    },
    {
      "backdrop_path": "/ubggJhb6QysnXVercF4ij9RLJJu.jpg",
      "first_air_date": "1971-10-24",
      "genre_ids": [
        16,
        10765,
        35,
        10759
      ],
      "id": 31572,
      "name": "Lupin the Third",
      "origin_country": [
        "JP"
      ],
      "original_language": "ja",
      "original_name": "ルパン三世",
      "overview": "Arsene Lupin III is the grandson of the master thief Arsene Lupin. With his cohorts Daisuke Jigen and Goemon Ishikawa XIII and his love interest Fujiko Mine, he pulls off the greatest heists of all time while always escaping the grasp of Inspector Koichi Zenigata.",
      "poster_path": "/sGN9eHc5QJarWlDOSznQPcsHixm.jpg",
      "vote_average": 8.4,
      "vote_count": 22,
      "popularity": 22.791
    },
    {
      "original_name": "The Saint",
      "id": 4333,
      "name": "The Saint",
      "vote_count": 41,
      "vote_average": 7.2,
      "first_air_date": "1962-10-04",
      "poster_path": "/zwNVpAJkE4Gu1jv922IH7GOQlen.jpg",
      "genre_ids": [
        35,
        10759
      ],
      "original_language": "en",
      "backdrop_path": "/cMHgfuHTN6GN7eA8ljSNNw7cUCQ.jpg",
      "overview": "Simon Templar is The Saint, a handsome, sophisticated, debonair, modern-day Robin Hood who recovers ill-gotten wealth and redistributes it to those in need.",
      "origin_country": [
        "GB"
      ],
      "popularity": 15.071
    },
    {
      "original_name": "Twin Peaks",
      "id": 1920,
      "name": "Twin Peaks",
      "vote_count": 908,
      "vote_average": 8.2,
      "first_air_date": "1990-04-08",
      "poster_path": "/ypeuD2LJiHSotbwy5C7wFeZSBhv.jpg",
      "genre_ids": [
        18,
        9648
      ],
      "original_language": "en",
      "backdrop_path": "/d6sUSb83506swwVLq7WOKMwE01W.jpg",
      "overview": "The body of Laura Palmer is washed up on a beach near the small Washington state town of Twin Peaks. FBI Special Agent Dale Cooper is called in to investigate her strange demise only to uncover a web of mystery that ultimately leads him deep into the heart of the surrounding woodland and his very own soul.",
      "origin_country": [
        "US"
      ],
      "popularity": 28.49
    },
    {
      "backdrop_path": "/fJbERbUgWwBScDTmumpH1Lsl5aJ.jpg",
      "first_air_date": "1995-09-24",
      "genre_ids": [
        18
      ],
      "id": 1457,
      "name": "Pride and Prejudice",
      "origin_country": [
        "GB"
      ],
      "original_language": "en",
      "original_name": "Pride and Prejudice",
      "overview": "Set in England in the early 19th century, Pride and Prejudice tells the story of Mr and Mrs Bennet's five unmarried daughters after the rich and eligible Mr Bingley and his status-conscious friend, Mr Darcy, have moved into their neighbourhood. While Bingley takes an immediate liking to the eldest Bennet daughter, Jane, Darcy has difficulty adapting to local society and repeatedly clashes with the second-eldest Bennet daughter, Elizabeth.",
      "poster_path": "/rlqOyCEaZuKoYTI1vhZ0kVyCTV7.jpg",
      "vote_average": 8.2,
      "vote_count": 158,
      "popularity": 19.342
    },
    {
      "original_name": "Taboo",
      "id": 65708,
      "name": "Taboo",
      "vote_count": 569,
      "vote_average": 7.9,
      "first_air_date": "2017-01-07",
      "poster_path": "/om1wVOuEtwH3krHutIWO9sJzkS5.jpg",
      "genre_ids": [
        18,
        9648
      ],
      "original_language": "en",
      "backdrop_path": "/tGQ9pbyyaB9mYqp8DoUijRniLwv.jpg",
      "overview": "Adventurer James Keziah Delaney returns to London from Africa in 1814 along with fourteen stolen diamonds to seek vengeance after the death of his father.",
      "origin_country": [
        "GB",
        "US"
      ],
      "popularity": 15.481
    },
    {
      "original_name": "Outlander",
      "id": 56570,
      "name": "Outlander",
      "vote_count": 739,
      "vote_average": 7.6,
      "first_air_date": "2014-08-09",
      "poster_path": "/70PRIpG1phOyphejeLwi0K8zdJo.jpg",
      "genre_ids": [
        12,
        18,
        14,
        10749
      ],
      "original_language": "en",
      "backdrop_path": "/Ai6HryU8R00XSgiCTeQoF75um84.jpg",
      "overview": "The story of Claire Randall, a married combat nurse from 1945 who is mysteriously swept back in time to 1743, where she is immediately thrown into an unknown world where her life is threatened. When she is forced to marry Jamie, a chivalrous and romantic young Scottish warrior, a passionate affair is ignited that tears Claire's heart between two vastly different men in two irreconcilable lives.",
      "origin_country": [
        "US"
      ],
      "popularity": 47.761
    },
    {
      "original_name": "Leverage",
      "id": 7482,
      "name": "Leverage",
      "vote_count": 161,
      "vote_average": 7.5,
      "first_air_date": "2008-12-07",
      "poster_path": "/7EJkH5tjrV6zDphg39sh6lOrJ9l.jpg",
      "genre_ids": [
        35,
        18,
        10759
      ],
      "original_language": "en",
      "backdrop_path": "/cubucYolMq8sFhw8V5e8zBoAcjD.jpg",
      "overview": "A five-person team comprised of a thief, a grifter, a hacker, and a retrieval specialist, led by former insurance investigator Nathan Ford, use their skills to fight corporate and governmental injustices inflicted on ordinary citizens.",
      "origin_country": [
        "US"
      ],
      "popularity": 17.681
    },
    {
      "original_name": "Poldark",
      "id": 62084,
      "name": "Poldark",
      "vote_count": 152,
      "vote_average": 7.8,
      "first_air_date": "2015-03-08",
      "poster_path": "/fTJZHMzlIGSJVPSe7Xz4p5SRwYP.jpg",
      "genre_ids": [
        18
      ],
      "original_language": "en",
      "backdrop_path": "/p8A1HMw3f3djxMwQRccCuxdy754.jpg",
      "overview": "Britain is in the grip of a chilling recession... falling wages, rising prices, civil unrest - only the bankers are smiling. It's 1783 and Ross Poldark returns from the American War of Independence to his beloved Cornwall to find his world in ruins: his father dead, the family mine long since closed, his house wrecked and his sweetheart pledged to marry his cousin. But Ross finds that hope and love can be found when you are least expecting it in the wild but beautiful Cornish landscape.",
      "origin_country": [
        "GB"
      ],
      "popularity": 20.717
    },
    {
      "original_name": "Blood & Treasure",
      "id": 88118,
      "name": "Blood & Treasure",
      "vote_count": 36,
      "vote_average": 5.2,
      "first_air_date": "2019-05-21",
      "poster_path": "/xbWqfPKBhqOZQEGq7HdDkX0Bjib.jpg",
      "genre_ids": [
        18,
        10759
      ],
      "original_language": "en",
      "backdrop_path": "/lKyhQWV1XJ6rRFYj2ZgTOTIWFw6.jpg",
      "overview": "An antiquities expert teams up with an art thief to catch a terrorist who funds his attacks using stolen artifacts.",
      "origin_country": [
        "US"
      ],
      "popularity": 13.809
    },
    {
      "original_name": "Frontier",
      "id": 64555,
      "name": "Frontier",
      "vote_count": 106,
      "vote_average": 6.3,
      "first_air_date": "2016-11-06",
      "poster_path": "/mhIeCeYgG4WJHNzaw2EyRpvmGX8.jpg",
      "genre_ids": [
        18,
        10759
      ],
      "original_language": "en",
      "backdrop_path": "/sVAJI4DT4nJxtyKCEGBDimv0aoK.jpg",
      "overview": "The chaotic and violent struggle to control wealth and power in the North American fur trade in late 18th century Canada. Told from multiple perspectives, Frontier takes place in a world where business negotiations might be resolved with close-quarter hatchet fights, and where delicate relations between native tribes and Europeans can spark bloody conflicts.",
      "origin_country": [
        "CA"
      ],
      "popularity": 20.463
    },
    {
      "original_name": "The Angry Beavers",
      "id": 3579,
      "name": "The Angry Beavers",
      "vote_count": 91,
      "vote_average": 7.1,
      "first_air_date": "1997-04-20",
      "poster_path": "/9KYUA9tZrVNVXk2LTaYNMqGpHUj.jpg",
      "genre_ids": [
        16,
        35,
        10751
      ],
      "original_language": "en",
      "backdrop_path": null,
      "overview": "The Angry Beavers is an American animated television series created by Mitch Schauer for the Nickelodeon channel. The series revolves around Daggett and Norbert Beaver, two young beaver brothers who have left their home to become bachelors in the forest near the fictional Wayouttatown, Oregon. The show premiered in the United States on April 19, 1997. The show started airing on the Nickelodeon Canada channel when it launched on November 2, 2009. The series aired on The '90s Are All That block on TeenNick in the US on October 7, 2011 as part of the block's U Pick with Stick line-up. The series was also up for a U Pick with Stick showdown on The '90s Are All That for the weekend of February 3, 2012, but lost to Rocko's Modern Life and did not air. The series was added to the Sunday line-up on The '90s Are All That on TeenNick, and aired from February 10, 2013, to March 3, 2013. The series returned to The '90s Are All That on TeenNick on March 25, 2013, but has since left the line-up again. The series is also currently being released on DVD.",
      "origin_country": [
        "US"
      ],
      "popularity": 13.801
    },
    {
      "original_name": "Planet Earth II",
      "id": 68595,
      "name": "Planet Earth II",
      "vote_count": 408,
      "vote_average": 8.3,
      "first_air_date": "2016-11-06",
      "poster_path": "/gTvArgUjEUDxYMqJHSwVlrn1Cjk.jpg",
      "genre_ids": [
        99
      ],
      "original_language": "en",
      "backdrop_path": "/pzkuv68GcI2PIYLLdPuKxFbT81H.jpg",
      "overview": "David Attenborough presents a documentary series exploring how animals meet the challenges of surviving in the most iconic habitats on earth.",
      "origin_country": [
        "GB"
      ],
      "popularity": 14.48
    },
    {
      "original_name": "TURN: Washington's Spies",
      "id": 57276,
      "name": "TURN: Washington's Spies",
      "vote_count": 146,
      "vote_average": 7.2,
      "first_air_date": "2014-04-06",
      "poster_path": "/AehTUycX0VSvCkOOkZzurLnjHsS.jpg",
      "genre_ids": [
        18,
        10768
      ],
      "original_language": "en",
      "backdrop_path": "/fhIxXKTzGptL09psh3myhtndADD.jpg",
      "overview": "The story of New York farmer, Abe Woodhull, who bands together with a group of childhood friends to form The Culper Ring, an unlikely group of spies who turn the tide in America’s fight for independence.",
      "origin_country": [
        "US"
      ],
      "popularity": 15.935
    },
    {
      "original_name": "Daniel Boone",
      "id": 11053,
      "name": "Daniel Boone",
      "vote_count": 14,
      "vote_average": 7.1,
      "first_air_date": "1964-09-24",
      "poster_path": "/lL4XDk4wRELIqciMtjcrD4TQ5m6.jpg",
      "genre_ids": [
        37,
        10759
      ],
      "original_language": "en",
      "backdrop_path": "/ocGIgjb53YKuPoLykhxO2orKrlc.jpg",
      "overview": "Daniel Boone is an American action-adventure television series starring Fess Parker as Daniel Boone that aired from September 24, 1964 to September 10, 1970 on NBC for 165 episodes, and was made by 20th Century Fox Television. Ed Ames co-starred as Mingo, Boone's Cherokee friend, for the first four seasons of the series. Albert Salmi portrayed Boone's companion Yadkin in season one only. Dallas McKennon portrayed innkeeper Cincinnatus. Country Western singer-actor Jimmy Dean was a featured actor as Josh Clements during the 1968–1970 seasons. Actor and former NFL football player Rosey Grier made regular appearances as Gabe Cooper in the 1969 to 1970 season. The show was broadcast \"in living color\" beginning in fall 1965, the second season, and was shot entirely in California and Kanab, Utah.",
      "origin_country": [
        "US"
      ],
      "popularity": 9.079
    },
    {
      "original_name": "Hustle",
      "id": 3764,
      "name": "Hustle",
      "vote_count": 76,
      "vote_average": 7.8,
      "first_air_date": "2004-02-24",
      "poster_path": "/oeSEmYM2iDp5395DLz2POnoRX2B.jpg",
      "genre_ids": [
        35,
        80,
        18,
        9648
      ],
      "original_language": "en",
      "backdrop_path": null,
      "overview": "A motley group of London con artists pull of a series of daring and intricate stings.",
      "origin_country": [
        "GB"
      ],
      "popularity": 13.558
    },
    {
      "original_name": "John Adams",
      "id": 15114,
      "name": "John Adams",
      "vote_count": 141,
      "vote_average": 7.9,
      "first_air_date": "2008-03-16",
      "poster_path": "/34qRIcLKkTpmM9x9gzm9nKvo5pW.jpg",
      "genre_ids": [
        18
      ],
      "original_language": "en",
      "backdrop_path": "/nWK4U7wlAAGTARPZKScTqW3rm0T.jpg",
      "overview": "Adapted from David McCullough's Pulitzer Prize-winning biography, this lavish seven-part miniseries chronicles the life of Founding Father John Adams, starting with the Boston Massacre of 1770 through his years as an ambassador in Europe, then his terms as vice president and president of the United States, up to his death on July 4, 1826.",
      "origin_country": [
        "US"
      ],
      "popularity": 6.769
    },
    {
      "original_name": "Harlots",
      "id": 69541,
      "name": "Harlots",
      "vote_count": 49,
      "vote_average": 7.4,
      "first_air_date": "2017-03-27",
      "poster_path": "/w6F93B2ZUCEUhRpgCS1cU82htqz.jpg",
      "genre_ids": [
        18,
        10751
      ],
      "original_language": "en",
      "backdrop_path": "/kusA76u4LF4Gd4lUY7cYF3GKrSC.jpg",
      "overview": "Brothel owner, Margaret Wells, struggles to raise her daughters in London during the 18th century.",
      "origin_country": [],
      "popularity": 9.463
    },
    {
      "original_name": "Zone Blanche",
      "id": 70613,
      "name": "Black Spot",
      "vote_count": 22,
      "vote_average": 6.9,
      "first_air_date": "2017-03-09",
      "poster_path": "/24YXi0GA3DsrPBe7ttw8XVV3uL7.jpg",
      "genre_ids": [
        80,
        18,
        9648
      ],
      "original_language": "fr",
      "backdrop_path": "/oEC9mN0TGzZfKBVD6LRKJvnnZPn.jpg",
      "overview": "In the small bordertown of Villefranche, lost in the heart of a large forest, crime rate is six times higher than elsewhere in the area. Each new crime Major Laurène Weiss solves with the help of her unusual team makes her sink deeper and deeper into secrets of the area.",
      "origin_country": [
        "BE",
        "FR"
      ],
      "popularity": 10.717
    },
    {
      "backdrop_path": "/aoUJkGp6c58R5pje3anrwoFE4c7.jpg",
      "first_air_date": "2019-10-03",
      "genre_ids": [
        18,
        10768
      ],
      "id": 76692,
      "name": "Catherine the Great",
      "origin_country": [
        "GB"
      ],
      "original_language": "en",
      "original_name": "Catherine the Great",
      "overview": "This four-part historical drama follows the end of Catherine the Great's reign and her affair with Russian military leader Grigory Potemkin that helped shape the future of Russian politics.",
      "poster_path": "/s50flEj06i7HmZx0lVMTHD4p6MF.jpg",
      "vote_average": 7,
      "vote_count": 31,
      "popularity": 6.902
    }
  ],
  "total_pages": 5,
  "total_results": 98
}





## App Design.

### Component catalogue.

![Storybook Components][storybookComponents]: 
> Component stories from the Storybook UI 

![Card Component][card]

![Detail Page][detailPage]

![Header][Header]

![Home Page][homepage]

![Listing Page][listingPage]

![Profile Page][profilePage]

![Similars Page][similarsPage]


### Design patterns.

+ PrivateRoute.js, a HOC is used in App.js to make routes protected and only authenticated users can access them or they will be redirected to login page.

+ SearchBar.js is used to for filtering and sorting the lists and is used in Listing.js 

+ Cards.js is used to display the movies or series in Listing.js page and in Similar.js page

+ React Fragment is used for conditional rendering Similar.js, DetailPage.js and Profile.js.

+ useHistory() hook is used SearchBar.js to navigate using the provided filters

## UI Design.

. . . . . Screenshots of app's views (see example below) with appropriate captions (For extension to the Movies Fan App, only show the new/modified views) . . . . . . . 

![HomePage View][HomePageView]
> This is the Landing Page. Clicking on Movie/Tv Image takes you to movies/Series list page. 

![Movie List Page View][MovieListPageView]
> Displays list of movies. User can add a movie to favourites list by clicking on the Add to Favourite button or delete a movie from favourites list clicking on the Remove from Favourite button and get a list of similar movies by clicking on the similar button.

![Series List Page View][SeriesListPageView]
> Displays list of series. User can add a series to favourites list by clicking on the Add to Favourite button or delete a series from favourites list clicking on the Remove from Favourite button and get a list of similar series by clicking on the similar button.

![Detail Page View][DetailPageView]
> Displays details and reviews of the movie/series and users can add reviews their here.

![Similar Movies Page View][SimilarMoviesPageView]
> Displays list of movies similar to the selected movie.

![Similar Series Page View][SimilarSeriesPageView]
> Displays list of series similar to the selected series.

![Profile Page View][ProfilePageView]
> Displays the profile of the user i.e. user name and email id along with user image.


## Routing.

+ https://media-fanpage-client.herokuapp.com - Displays Home Page with header and Movie and Tv Image. Clicking on movie or Tv image will get list movies or series respectively. No Authentication required
+ /profile - Displays User Profile. Authentication required.
+ /listing/movie - Displays list of movies. Authentication required. Nested Route.
+ /listing/tv - Displays list of series. Authentication required. Nested Route.
+ /listing/similar/movie/{movie_id} - Displays list of similar movies. Authentication required. Nested Route.
+ /listing/similar/tv/{tv_id} - Displays list of similar series. Authentication required. Nested Route.
+ /movie/view/{movie_id} - Displays movie details along with any reviews if present and user can add his/her reviews here in the add review textbox. Authentication required.
+ /tv/view/{tv_id} - Displays series details along with any reviews if present and user can add his/her reviews here in the add review textbox.Authentication required.
+ 

## Independent learning.
 
Use of Auth0 for Authentication 
Reference: https://auth0.com/docs/quickstart/spa/react

Heroku used for Deployment of the App.
Reference: https://www.freecodecamp.org/news/deploy-a-react-node-app-to/
https://blog.heroku.com/deploying-react-with-zero-configuration

[storybookComponents]: ./public/storybookImages/storybookComponents.png
[card]: ./public/storybookImages/card.png
[detailPage]: ./public/storybookImages/detailPage.png
[Header]: ./public/storybookImages/Header.png
[homepage]: ./public/storybookImages/homepage.png
[listingPage]: ./public/storybookImages/listingPage.png
[profilePage]: ./public/storybookImages/profilePage.png
[similarsPage]: ./public/storybookImages/similarsPage.png
[HomePageView]: ./public/UI-Views/HomePageView.png
[MovieListPageView]: ./public/UI-Views/MovieListPageView.png
[SeriesListPageView]: ./public/UI-Views/SeriesListPageView.png
[DetailPageView]: ./public/UI-Views/DetailPageView.png
[SimilarMoviesPageView]: ./public/UI-Views/SimilarMoviesPageView.png
[SimilarSeriesPageView]: ./public/UI-Views/SimilarSeriesPageView.png
[ProfilePageView]: ./public/UI-Views/ProfilePageView.png
