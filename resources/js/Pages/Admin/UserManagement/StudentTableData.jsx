import StudentList from "@/Components/Admin/partial/UserManagement/StudentList";
import MainAdminLayout from "@/Layouts/Admin/MainAdminLayout";
import { usePage } from "@inertiajs/react";

function StudentTableData(){
    
    const {studentData} = usePage().props;

    return (
      <StudentList studentData={studentData}/>
    )
}

StudentTableData.layout = (page) => <MainAdminLayout children={page}/>

export default StudentTableData;