import Client from "./client";

export var getRepos = (pageNum = 1, date = "2021-01-01") => {
  return Client.get("/search/repositories", {
    params: {
      q: `created:>${date}`,
      sort: "stars",
      order: "desc",
      page: pageNum,
    },
  })
    .then((res) => {
      if (res.data) {
        var reposData = res.data.items.map((repo) => {
          return (newRepo = {
            id: repo.id,
            full_name: repo.full_name,
            description: repo.description,
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            watchers_count: repo.watchers_count,
            forks_count: repo.forks_count,
            open_issues: repo.open_issues,
            owner: {
              avatar_url: repo.owner.avatar_url,
              login: repo.owner.login,
            },
          });
        });
        return reposData;
      } else {
        return [];
      }
    })
    .catch((e) => {
      console.log("get error", e);
    });
};
