import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage/HomePage"
import { AuthPage } from "./AuthPage/AuthPage"
import { PageLayout } from "./Layouts/PageLayout/PageLayout"
import { ProfilePage } from "./pages/HomePage/ProfilePage/ProfilePage"

function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/auth" element={<AuthPage />}/>
        <Route path="/:username" element={<ProfilePage />}/>
      </Routes>
    </PageLayout>
  )
}

export default App
