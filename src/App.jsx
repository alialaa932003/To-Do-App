import {
    TasksPage,
    DefaultLayout,
    GuestLayout,
    LoginPage,
    SignupPage,
    NotFound,
    UsersPage,
    ImagesPage,
    StatisticsPage,
} from "./containers";
import { Link, Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { theme, typography } from "./theme";
// import {} "./theme/colors";
function App() {
    return (
        <div
            className="App"
            style={{
                background: theme["light"].mainBg,
                fontFamily: typography["en"].first,
            }}
        >
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/tasks" element={<TasksPage />} />
                    <Route path="/" element={<TasksPage />} />
                    <Route path="/images" element={<ImagesPage />} />
                    <Route path="/statistics" element={<StatisticsPage />} />
                    <Route path="/users" element={<UsersPage />} />
                </Route>
                <Route path="/" element={<GuestLayout />}>
                    <Route path="/signup" element={<LoginPage />} />
                    <Route path="/login" element={<SignupPage />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
