import Vue from 'vue'
import App from './App.vue'
import {
    Button,
    Select,
    Option,
    OptionGroup,
    Tooltip,
    Dialog,
    Message,
    Input
} from 'element-ui';
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Tooltip);
Vue.use(Dialog);
Vue.use(Input);
Vue.component('Message', Message);
Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app');