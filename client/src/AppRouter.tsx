import HomePage from "./components/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {GamePage} from "./components/GamePage";

type Props = {
    userName: string | null;
};

function AppRouter({userName}: Props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage userName={userName}/>}/>
                <Route path="/game" element={<GamePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
