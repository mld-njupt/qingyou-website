import Header from "../../components/Header/Header";
import Swiper from "../../components/Swiper/Swiper";
import Part1 from "./components/Part1/Part1";
import Part2 from "./components/Part2/Part2";
import Part3 from "./components/Part3/Part3";
import Part4 from "./components/Part4/Part4";
import Part5 from './components/Part5/Part5';
import MobilePart1 from "./components/Part1/MobilePart1";
interface IndexProp {
  isMobile: boolean;
  width: number;
}
function Index(props: IndexProp) {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? null : <Header isTransparent={true} bgColor='#000000'></Header>}
      {isMobile ? (
        <Swiper isMobile={true}>
          <MobilePart1></MobilePart1>
          <Part2></Part2>
          <Part3 clientWidth={props.width}></Part3>
          <Part4></Part4>
          <Part5></Part5>
        </Swiper>
      ) : (
        <Swiper>
          <Part1></Part1>
          <Part2></Part2>
          <Part3 clientWidth={props.width}></Part3>
          <Part4></Part4>
          <Part5></Part5>
        </Swiper>
      )}
    </>
  );
}

export default Index;
