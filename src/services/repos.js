import axios from "axios";
import Client from "./client";

export var getRepos = (pageNum = 1) => {
  return Client.get("/search/repositories", {
    params: {
      q: "created:>2021-01-01",
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
