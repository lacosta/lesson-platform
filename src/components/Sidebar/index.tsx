// @own
import Lesson from "components/Lesson";
import { useGetLessonsQuery } from "../../graphql/generated";

function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="bg-gray-700 border-gray-600 border-l p-6 w-[348px]">
      <span className="block border-b border-gray-500 font-bold mb-6 pb-6 text-2xl">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              availableAt={new Date(lesson.availableAt)}
              key={lesson.id}
              slug={lesson.slug}
              title={lesson.title}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
