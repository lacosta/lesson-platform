// @packages
import { FileArrowDown, CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
}

function Card(props: CardProps) {
  return (
    <Link
      to="#"
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
    >
      <div className="bg-green-700 h-full p-6 flex items-center">
        <FileArrowDown size={40} />
      </div>
      <div className="py-6 leading-relaxed">
        <span className="text-2xl font-bold">{props.title}</span>
        <p className="text-sm text-gray-200 mt-2">{props.description}</p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </Link>
  );
}

export default Card;
