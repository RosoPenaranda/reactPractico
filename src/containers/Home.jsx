import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import VideoNotFound from "../components/VideoNotFound";
import "../assets/styles/App.scss";

const Home = props => {
  const { isSearching, myList, trends, originals, searching } = props;

  if (isSearching) {
    return searching.length > 0 ? (
      <>
        <Search isHome />
        <Categories title="Búsqueda">
          <Carousel>
            {searching.map(item => (
              <CarouselItem key={item.id} {...item} isMyList={true} />
            ))}
          </Carousel>
        </Categories>
      </>
    ) : (
      <VideoNotFound />
    );
  }
  return (
    <>
      <Search isHome />
      {myList.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {myList.map(item => (
              <CarouselItem key={item.id} {...item} isMyList={true} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales Platzi Video">
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};
const mapStateToProps = state => {
  return {
    isSearching: state.isSearching,
    searching: state.searching,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
