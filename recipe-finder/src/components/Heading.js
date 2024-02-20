const Heading = ({ text, isMainHeading }) => {
  const headingStyle = isMainHeading
    ? "text-3xl font-bold"
    : "text-gray-600 text-lg";
  const HeadingTag = isMainHeading ? "h1" : "h6";

  return (
    <HeadingTag className={`font-montserrat text-center ${headingStyle}`}>
      {text}
    </HeadingTag>
  );
};

export default Heading;
