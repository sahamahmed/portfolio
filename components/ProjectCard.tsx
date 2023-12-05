import Image from "next/image";
interface Props {
  title: string;
  link: string;
  content: string;
  desc:string
}

const ProjectCard = ({ title, link, content,desc }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group  shadow-slate-400 shadow-md hover:shadow-lg hover:shadow-slate-300 sm:space-y-3">
        <Image
          className="object-cover translate-y-0 "
          width={350}
          height={350}
          src={content}
          alt="Projects"
        />
        {/* <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-blue-600 text-white text-center font-semibold duration-300">
          {title}
        </p> */}
        <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-blue-600 text-white text-center font-semibold duration-300">{desc}</p>
      </div>
    </a>
  );
};

export default ProjectCard;