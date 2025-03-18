import Header from "../components/base/Header";
import SubjectList from "../components/SubjectList"
import { Subject } from "../types/Subject";

export default function HomeUser() {

    const subjects: Subject[] = [
        {id: 1, name: "Math"},
        {id: 2, name: "Science"},
        {id: 3, name: "English"},
        {id: 4, name: "History"}
    ];

    return (
        <>
            <Header />
            <SubjectList subjects={subjects}/>
        </>
    );
}