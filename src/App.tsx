import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {FooterSection} from "./sections/FooterSection/FooterSection";
import {EntitiesProvider} from "./entitites/useEntitiesContext";
import {lazy, Suspense} from "react";

const CountrySpecificPageAsync = lazy(() => import('./pages/CountrySpecificPage/CountrySpecificPage'));

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <EntitiesProvider>
                    <main className='pageContent'>
                        <Routes>
                            <Route index path='/' element={<MainPage/>}/>
                            <Route path='/:countryName/*' element={<Suspense>
                                <CountrySpecificPageAsync/>
                            </Suspense>}/>
                            <Route path="*" element={<Navigate to="/" replace/>}/>
                        </Routes>
                    </main>
                </EntitiesProvider>
                <FooterSection/>
            </BrowserRouter>
        </div>
    );
}

export default App;
