import { checkAdmin } from "./action";
import AdminForm from "./AdminForm";

export default function Page() {
  return <AdminForm action={checkAdmin} />;
}
