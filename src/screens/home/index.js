import React, { useEffect, useState, useRef } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Platform,
  StatusBar,
} from "react-native";

import { Header, RepoCard } from "../../components";

import { getRepos } from "../../services/repos";

import { str, dateStr } from "../../utilities";

var Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [date, setDate] = useState("2021-01-01");
  const [show, setShow] = useState(false);

  const flatListRef = useRef();

  const ChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === "ios");
    setDate(dateStr(currentDate));
  };
  console.warn(date);

  let onLoadPage = () => {
    getRepos(page, date).then((repos) => {
      setData([...data, ...repos]);
      setLoading(false);
    });
  };
  useEffect(() => {
    onLoadPage();
  }, [page]);

  let onLoadDate = () => {
    getRepos(1, date).then((repos) => {
      setData([...repos]);
      setPage(1);
      setLoading(false);
    });
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };
  useEffect(() => {
    onLoadDate();
  }, [date]);

  let increasePage = () => {
    setLoading(true);
    let p = page + 1;
    setPage(p);
  };
  //console.warn(page);

  var RenderItem = (repo) => {
    return (
      <RepoCard
        key={repo.item.id + Math.floor(Math.random() * 10000)}
        title={str(repo.item.full_name, 16)}
        desc={str(repo.item.description, 32)}
        owner={repo.item.owner.login}
        img={repo.item.owner.avatar_url}
        issues={repo.item.open_issues}
        stars={repo.item.stargazers_count}
        onPress={() => {
          navigation.navigate("Repo", {
            data: repo.item,
          });
        }}
      />
    );
  };
  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <Header
        txt={"All Repositories"}
        homeScreen={true}
        onChangeDate={ChangeDate}
        show={show}
        setShowDate={setShow}
      />
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={RenderItem}
        showsVerticalScrollIndicator={false}
        onEndReached={increasePage}
        onEndReachedThreshold={2}
      />
      {loading && <ActivityIndicator style={{ marginVertical: 36 }} />}
    </View>
  );
};

export default Home;
