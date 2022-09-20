import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScroll = () => {
  const control = useAnimation();
  const [element, view] = useInView();

  if (view) {
    control.start("show");
  } else {
    control.start("hidden");
  }

  return [element, control];
};

export default useScroll;
