import AdminPage from "../../components/Pages/AdminPage"
import { AdminProvider } from "../../providers/AdminProvider"

const Admin = () => (
  <AdminProvider>
    <AdminPage />
  </AdminProvider>
)

export default Admin
