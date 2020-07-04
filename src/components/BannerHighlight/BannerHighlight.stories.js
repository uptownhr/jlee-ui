import BannerHighlight from "./BannerHighlight";
import "../../assets/tailwind.css";

const API = {
  image: ""
};

export default {
  title: "@uptownhr / BannerHighlight"
};

export const Default = () => ({
  components: { BannerHighlight },
  data() {
    return {
      api: API
    };
  },
  template: `<banner-highlight :image="api.image" to="/" />`
});