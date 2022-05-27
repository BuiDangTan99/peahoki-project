import React, { useEffect, useLayoutEffect, useState } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/action/news";
import * as action from "../../redux/action/preference";
import { List, Button, Modal } from "antd";

import NewItem from "../../components/newItem/index";
import DeitailNew from "../../components/detailNew/index";
import Preferences from "../../components/preferences/index";

const Index = () => {
  const dispatch = useDispatch();

  const listNews = useSelector((state) => state.newsReducer);
  const preference = useSelector((state) => state.preferenceReducer.preference);
  const loading = useSelector((state) => state.generalReducer);
  const [detailNew, setDetailNew] = useState({});
  const [visibleModal, setVisibleModal] = useState(false);
  const [queryParams, setQueryParams] = useState({
    page: 1,
    pageSize: 10,
    q: null,
  });

  const handleDetail = (item) => {
    if (!visibleModal) {
      setDetailNew(item);
    } else {
      setDetailNew({});
    }
    setVisibleModal((prevState) => !prevState);
  };
  useEffect(() => {
    setQueryParams({
      ...queryParams,
      q: preference,
    });
  }, [preference]);

  useLayoutEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [queryParams]);

  useEffect(() => {
    if (queryParams.q) {
      dispatch(getNews(queryParams));
    } else {
      setQueryParams({
        ...queryParams,
        q: preference,
      });
    }
  }, [queryParams]);

  const loadMoreData = () => {
    setQueryParams((state) => {
      return {
        ...queryParams,
        page: state.page + 1,
      };
    });
  };

  const loadMore = (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button onClick={() => loadMoreData()}>Loading more</Button>
    </div>
  );

  const getPreference = (pref) => {
    dispatch(action.postPreference(pref));
  };

  return (
    <div className="container-peahoki">
      <div className="">
        <Preferences onGetPreference={getPreference} />
      </div>
      <h1 className="newsTitle">Top Headline news</h1>
      {/* <Spin spinning={loading.loadingComponent}> */}
        <List
          loading={loading.loadingComponent}
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={listNews.news}
          loadMore={loadMore}
          renderItem={(item, i) => (
            <NewItem key={i} item={item} handleDetail={handleDetail} />
          )}
        />
      {/* </Spin> */}
      <Modal
        visible={visibleModal}
        title={
          Object.entries(detailNew).length > 0 ? (
            <h1 style={{ fontSize: 24 }}>{detailNew.title}</h1>
          ) : (
            ""
          )
        }
        onCancel={() => handleDetail()}
        footer={[
          <Button key="submit" type="primary" onClick={() => handleDetail()}>
            Đóng
          </Button>,
        ]}
      >
        <DeitailNew detailNew={detailNew} />
      </Modal>
    </div>
  );
};

export default Index;
