/* 
    ! Challenge
    * console log the "Pilot"
    * add a season 3
    * season 3 will be an object with properties of numberOfEpisodes & episodeInfo
    * episodeInfo will be an array of 2 objects
    * two objects will have properties of episode & episodeName
    * fabricate their values
    * assign property called totalSeasons to the netflix object with a value of what total seasons are
    ! SPICY MODE - don't hardcode totalSeasons, rather make it dynamic based on the amount of seasons
*/


let netflix = {
    id: 9,
    likes: 932,
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [
                {episode: 1, episodeName: "Pilot"},
                {episode: 2, episodeName: "second ep"},
                {episode: 3, episodeName: "third ep"},
                {episode: 4, episodeName: "fourth ep"},
                {episode: 5, episodeName: "fifth ep"},
            ]
        },
        season2: {
                numberOfEpisodes: 5,
                episodeInfo: [
                    {episode: 1, episodeName: "snd szn 1st ep"},
                    {episode: 2, episodeName: "snd szn 2st ep"},
                    {episode: 3, episodeName: "snd szn 3st ep"},
                    {episode: 4, episodeName: "snd szn 4st ep"},
                    {episode: 5, episodeName: "snd szn 5st ep"},
                ]
    }
}
}

netflix.seasonInfo.season3 = {
    numberOfEpisodes: 2,
    episodeInfo: [
        {episode: 1, episodeName: "things"},
        {episode: 2, episodeName: "stuff"},
    ]
}
console.log(netflix.seasonInfo.season1.episodeInfo[0].episodeName)
console.log(Object.keys(netflix.seasonInfo))
console.log(netflix);

console.log(netflix.seasonInfo);

