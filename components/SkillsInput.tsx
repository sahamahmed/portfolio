type Props = {
  title: string;
  link: string;
};

const SkillsInput = ({ title, link }: Props) => {
  return (
    <a href={link} target="_blank">
    <p className="border border-blue-800 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-400 shadow-lg rounded-md duration-300 hover:text-white hover:border-blue-600 hover:bg-yellow-500 shadow-slate-50">
  {title}
</p>


    </a>
  );
};




export default SkillsInput;