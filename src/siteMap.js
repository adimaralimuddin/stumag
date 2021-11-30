
import Home from './page/main/Home'
import Dashboard from './page/admin/Dashboard'
import Teacher from './page/teacher/Teacher'
import Student from './page/student/Student'
import Register from './page/main/Register'
import Login from './page/main/Login'
import StuAdd from './page/student/stuAdd'
import TeachAdd from './page/teacher/TeachAdd'
import StuList from './page/student/StuList'
import StuProfile from './page/student/stuProfile'
import Subjects from './page/student/subject/Subjects'
import Courses from './page/student/course/Courses'
import TeachList from './page/teacher/teachList'

export default function useSite() {
    const site = {
        home: {
            path: '/',
            component: <Home />,
            condition: true,
        },
        login: {
            path: '/login',
            component: <Login />,
            condition: true,
        },
        register: {
            path: '/register',
            component: <Register />,
            condition: true,
        },
        student: {
            path: '/student/*',
            component: <Student />,
            condition: true,
        },
        teacher: {
            path: '/teacher',
            component: <Teacher />,
            condition: true,
        },
        dashboard: {
            path: '/dashboard',
            component: <Dashboard />,
            condition: true,
        },

    }
    return site
}

export const stuPages = {
    add: {
        path: 'addstudent',
        element: <StuAdd />
    },
    list: {
        path: 'studentlist',
        element: <StuList />
    },
    ['']: {
        path: '',
        element: <StuList />
    },
    profile: {
        path: 'profile',
        element: <StuProfile />
    },
    subjects: {
        path: 'subjects',
        element: <Subjects />
    },
    course: {
        path: 'course',
        element: <Courses />
    },
}
export const TeachPages = {
    add: {
        path: 'addteacher',
        element: <TeachAdd />
    },
    list: {
        path: 'teacherlist',
        element: <TeachList />
    },
    ['']: {
        path: '',
        element: <StuList />
    },
    profile: {
        path: 'profile',
        element: <StuProfile />
    },
    subjects: {
        path: 'subjects',
        element: <Subjects />
    },
    course: {
        path: 'course',
        element: <Courses />
    },
}
