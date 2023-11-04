import { ImageIcon } from "lucide-react";

const ArticleImage = ({ src, alt }: { src?: string; alt: string }) => {
  if (!src)
    return <ImageIcon size={100} color="gray" className="flex-shrink-0" />;
  return (
    <img
      src={src}
      alt={alt}
      className="w-52 flex-shrink-0  h-40 object-cover rounded-md"
    />
  );
};

export default ArticleImage;
