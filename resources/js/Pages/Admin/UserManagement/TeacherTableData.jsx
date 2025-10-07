
import TeacherList from "@/Components/Admin/partial/UserManagement/TeacherList";
import MainAdminLayout from "@/Layouts/Admin/MainAdminLayout";
import { usePage } from "@inertiajs/react";

function TeacherTableData() {
    const {teacherDataList} = usePage().props;
  
    return <TeacherList teacherData={teacherDataList}/>
}

TeacherTableData.layout = (page) => <MainAdminLayout children={page}/>

export default TeacherTableData;