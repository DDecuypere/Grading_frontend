import { SubjectListProps } from "../types/Subject";
import "../css/SubjectList.css"

export default function SubjectList(props : SubjectListProps) {
    return (
        <div className="flex flex-col gap-8 items-center">
            {props.subjects.map((subject) => (
                <div className="rounded-3xl p-6 w-50 border-3" key={subject.name}>
                    <p>{subject.name}</p>
                </div>
            ))}
        </div>
    );
}