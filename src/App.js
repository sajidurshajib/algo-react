import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
