import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/home';
import {Questions} from '../pages/Questions';

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Home/>} />
                <Route path="questionnaire" element={<Questions/>}/>
            </Routes>
        </BrowserRouter>
    );

}