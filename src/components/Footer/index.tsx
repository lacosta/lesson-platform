// @own
import RocketSeat from "components/RocketSeat";

function Footer() {
  return (
    <footer className="bg-gray-900 border-t-2 border-gray-600 flex items-center justify-between py-5 mx-6 mt-20">
      <div className="flex items-center">
        <RocketSeat />
        <span className="text-gray-300 ml-6">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <span className="text-gray-300 font-bold">Políticas de privacidade</span>
    </footer>
  );
}

export default Footer;
