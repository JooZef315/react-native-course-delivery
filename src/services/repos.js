import Client from "./client";

export var getRepos = (pageNum = 1, date = "2021-01-30") => {
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
        return res.data.items;
      } else {
        return [];
      }
    })
    .catch((e) => {
      console.log("get error", e);
    });
};
