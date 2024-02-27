import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.mount("#app");
app.use(MdEditorV3);
app.mount("#md-editor-v3");
