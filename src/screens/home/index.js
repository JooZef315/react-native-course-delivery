import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import { RepoCard } from "../../components";
import { Header } from "../../components";

import { getRepos } from "../../services/repos";

import { str } from "../../utilities";

var Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  let onLoad = () => {
    getRepos(page).then((repos) => {
      setData([...data, ...repos]);
      setLoading(false);
      console.log(repos);
    });
  };
  useEffect(() => {
    onLoad();
  }, [page]);

  let increasePage = () => {
    setLoading(true);
    setPage((p) => p + 1);
    console.warn(page);
  };

  var RenderItem = (repo) => {
    console.log(repo.item.id + Math.random());
    return (
      <RepoCard
        key={Math.random()}
        title={str(repo.item.full_name, 16)}
        desc={str(repo.item.description, 32)}
        owner={repo.item.owner.login}
        img={repo.item.owner.avatar_url}
        issues={repo.item.open_issues}
        stars={repo.item.stargazers_count}
      />
    );
  };
  return (
    <View>
      <Header txt={"All Repositories"} />
      <FlatList
        data={data}
        renderItem={RenderItem}
        showsVerticalScrollIndicator={false}
        onEndReached={increasePage}
        onEndReachedThreshold={2}
      />
      {loading && <ActivityIndicator style={{ marginTop: 50 }} />}
    </View>
  );
};

export default Home;
