// @packages
import "@vime/core/themes/default.css";
import Button from "components/Button";
import Card from "components/Card";
import Footer from "components/Footer";
import Loader from "components/Loader";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, Lightning } from "phosphor-react";
import { useGetLessonBySlugQuery } from "../../graphql/generated";

interface VideoPlayerProps {
  lessonSlug: string;
}

function VideoPlayer(props: VideoPlayerProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data) {
    return (
      <div className="flex-1 flex justify-center items-center w-full h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube
              videoId={data?.lesson?.videoId}
              key={data?.lesson?.videoId}
            />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data?.lesson?.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data?.lesson?.description}
            </p>
            {data?.lesson?.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={data?.lesson?.teacher?.avatarURL}
                  alt="teacher avatar"
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                />
                <div className="leading-relaxed">
                  <span className="font-bold text-2xl block">
                    {data?.lesson?.teacher?.name}
                  </span>
                  <span className="text-gray-200 text-sm block">
                    {data?.lesson?.teacher?.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <Button variant="primary">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </Button>
            <Button variant="secondary">
              <Lightning size={24} />
              Acesse o desafio
            </Button>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <Card
            title="Material complementar"
            description="Acesse o material complementar para acelerar o seu
            desenvolvimento"
          />
          <Card
            title="Wallpapers exclusivos"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
            maquina"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VideoPlayer;
