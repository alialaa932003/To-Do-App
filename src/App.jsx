import React, { useState } from "react";
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
import { Route, Routes } from "react-router-dom";
import { typography } from "./theme";
export const SideBarContext = React.createContext();
function App() {
    const [sideState, setSideState] = useState("openSide");
    const [themeState, setThemeState] = useState("light");
    return (
        <div
            className={`App ${themeState}`}
            style={{
                fontFamily: typography["en"].first,
            }}
        >
            <SideBarContext.Provider
                value={{ sideState, setSideState, themeState, setThemeState }}
            >
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route path="/" element={<TasksPage />} />
                        <Route path="/tasks" element={<TasksPage />} />
                        <Route path="/images" element={<ImagesPage />} />
                        <Route
                            path="/statistics"
                            element={<StatisticsPage />}
                        />
                        <Route path="/users" element={<UsersPage />} />
                    </Route>
                    <Route path="/" element={<GuestLayout />}>
                        <Route path="/signup" element={<LoginPage />} />
                        <Route path="/login" element={<SignupPage />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </SideBarContext.Provider>
        </div>
    );
}

export default App;
