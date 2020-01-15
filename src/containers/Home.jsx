import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import "../assets/styles/App.scss";

const Home = props => {
  const { user, myList, trends, originals } = props;

  console.log("props:");

  console.log(props);

  console.log("user");

  console.log(user);

  return (
    <>
      <Search />
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
    user: state.user,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
