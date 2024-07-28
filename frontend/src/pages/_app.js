import "../styles/globals.css";
import "../styles/root_variables.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider, useDispatch } from "react-redux";
import store from "../Store";
import Loading from '@/Components/Loading'
import { useEffect, useState } from "react";
import setWebApp from "@/Store/Actions/setWebApp";
import setTgUserData from "@/Store/Actions/setTgUserData";

function MyApp({ Component, pageProps }) {
    const [isTgConnected,ConnectTG] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.ready()
            console.log(tg.initDataUnsafe)
            store.dispatch(setWebApp(tg));
            store.dispatch(setTgUserData(tg.initDataUnsafe));
            ConnectTG(true);
        }
    }, []);
    return (
        <Provider store={store}>
            <Loading />
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false} ssd
                draggable
                theme="light"
            />
            {(isTgConnected && (
                <Component {...pageProps} />
                ))}
        </Provider>
    );
}

export default MyApp;


