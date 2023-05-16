import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {PUBLIC_ROUTES} from "./routes";

const AppRouter: FC = () => {

    return (
        <Routes>
            { PUBLIC_ROUTES.map(({ path, Element, title}) =>
                <Route key={path} path={path} element={<Element title={title} />} />)
            }
            <Route path={"*"} element={<Navigate to={"/signup"} replace />} />
        </Routes>
    );
};

export default AppRouter;