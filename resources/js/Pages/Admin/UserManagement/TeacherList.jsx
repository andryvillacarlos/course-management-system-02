import TeacherList from "@/Components/Admin/partial/UserManagement/TeacherTable";
import MainAdminLayout from "@/Layouts/Admin/MainAdminLayout";

function TeacherTableData() {
    return (
        <MainAdminLayout>
            <TeacherList/>
        </MainAdminLayout>
    );
}

export default TeacherTableData;