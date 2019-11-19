//File to call the api
const getAllNbaTeams = async () => {
    const response = await fetch(
      "https://free-nba.p.rapidapi.com/teams?page=0",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
          "x-rapidapi-key": "ac7cac8b25mshe61589dcf228915p1da28djsn29c26fd3e313"
        }
      }
    );
    const apiCallback = await response.json();
    console.log(apiCallback.data);
};

const getNbaPlayer = async (nbaPlayerName, page = 1) => {
    
    const response = await fetch(
      `https://free-nba.p.rapidapi.com/players?page=${page}&search=${nbaPlayerName}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
          "x-rapidapi-key": "ac7cac8b25mshe61589dcf228915p1da28djsn29c26fd3e313"
        }
      }
    );
    const apiCallback = await response.json();
    console.log(apiCallback.data);
  };

  export {
      getAllNbaTeams,
      getNbaPlayer
  }