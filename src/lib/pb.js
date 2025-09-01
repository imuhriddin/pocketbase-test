import PocketBase from "pocketbase";

const pb = new PocketBase("https://back.buyur.yurtal.tech");

// agar login qilgandan keyin tokenni localStorage’da saqlamoqchi bo‘lsangiz
pb.authStore.loadFromCookie(document.cookie);

export default pb;
