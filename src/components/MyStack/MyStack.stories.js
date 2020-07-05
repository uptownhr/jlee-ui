import MyStack from './MyStack'
import '../../assets/tailwind.css'

export default {
  title: "MyStack"
};

export const Default = () => ({
  components: { MyStack },
  template: `<MyStack />`
})