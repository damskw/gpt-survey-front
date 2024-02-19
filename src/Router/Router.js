import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from "../MainPage/MainPage";

const RouterReact = () => (
    <Router>
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    </Router>
)

export default RouterReact;