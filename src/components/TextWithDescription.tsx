interface TextWithDescriptionProps {
  title: string;
  description: string;
}

const TextWithDescription = ({
  title,
  description,
}: TextWithDescriptionProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center md:items-start mx-8">
        <h4 className="MediumText">{title}</h4>
        <p className="text-lg text-gray-400 text-center md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TextWithDescription;
